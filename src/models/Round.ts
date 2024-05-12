// Define your object model
import { BSON, Realm } from 'realm';
import { Match } from './Match';

export class Round extends Realm.Object<Round> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  roundNumber!: number;
  isFinished: boolean = false;
  league_id!: string;
  matches: Match[] = [];

  static primaryKey = '_id';
}
