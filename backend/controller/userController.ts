import axios from 'axios';
import Realm from 'realm';
import { Request, Response } from 'express';
import { User } from '../models/UserSchema'
// import { AppError, handleAppError } from './errors';

class UserController {
    async showSetPassword(req: Request, res: Response) {
        res.render('set_password');
    }

    async getUser(req: Request, res: Response) {
        try {
            const user = await this.getAuthenticatedUser(req);
            res.json(user);
        } catch (error) {
            handleAppError(error, res);
        }
    }

    async updateUTL(req: Request, res: Response) {
        try {
            const user = await this.getAuthenticatedUser(req);
            const { tournamentId } = req.params;
            const { name } = req.body;

            if (typeof name !== 'string' || name.length < 2) {
                throw new AppError("Invalid name", 400);
            }

            const realm = await Realm.open({
                schema: [UserSchema, TournamentSchema, TournamentUserSchema, BetSchema],
                sync: { user: realmApp.currentUser, partitionValue: 'userPartition' }
            });

            const utl = realm.objectForPrimaryKey('TournamentUser', { userId: user.id, tournamentId });
            if (!utl) {
                throw new AppError("User not found", 404);
            }

            const existingUtl = realm.objects('TournamentUser').filtered('tournamentId == $0 AND name == $1', tournamentId, name)[0];
            if (existingUtl && existingUtl.id !== utl.id) {
                throw new AppError(`A user with the name "${name}" already exists in this tournament`, 400);
            }

            realm.write(() => {
                utl.name = name;
            });

            res.json(utl);
        } catch (error) {
            handleAppError(error, res);
        }
    }

    async getUserUTLs(req: Request, res: Response) {
        try {
            const user = await this.getAuthenticatedUser(req);
            const realm = await Realm.open({
                schema: [UserSchema, TournamentSchema, TournamentUserSchema, BetSchema],
                sync: { user: realmApp.currentUser, partitionValue: 'userPartition' }
            });

            const utls = realm.objects('TournamentUser').filtered('userId == $0', user.id);
            res.json(utls);
        } catch (error) {
            handleAppError(error, res);
        }
    }

    async joinTournament(req: Request, res: Response) {
        try {
            const user = await this.getAuthenticatedUser(req);
            const { name, code: tournamentCode } = req.body;

            if (!name || name.length < 2) {
                throw new AppError("Name must be at least 2 characters", 400);
            }

            if (!tournamentCode) {
                throw new AppErr
