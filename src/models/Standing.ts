// Define your object model
import { BSON, ObjectSchema, Realm } from 'realm';

export class Standing extends Realm.Object<Standing> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  leagueName: string;
  leagueCode: string;
  users: string[];
  rounds: number[];
  league_id!: string;

  static primaryKey = '_id';
}
