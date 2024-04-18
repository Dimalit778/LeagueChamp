// Define your object model
import { BSON, ObjectSchema, Realm } from 'realm';

export class Match extends Realm.Object<Match> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  leagueName: string;
  leagueCode: string;
  users: string[];
  rounds: number[];
  league_id!: string;

  static primaryKey = '_id';
}
