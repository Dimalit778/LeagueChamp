// Define your object model
import { BSON, ObjectSchema, Realm } from 'realm';
import { User } from './User';
import { Round } from './Round';

export class Match extends Realm.Object<Match> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  homeTeam!: string;
  awayTeam!: string;
  homeScore!: number;
  awayScore!: number;
  isFinished: boolean = false;
  matchPoints!: number;
  user: User; // Reference to the user who created the match
  round: Round; // Reference to the round the match belongs to

  static primaryKey = '_id';
}
