// Define your object model
import { BSON, ObjectSchema, Realm } from 'realm';

export class League extends Realm.Object<League> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  leagueName!: string;
  leagueCode: string;
  //   users: string[];
  //   rounds: number[];
  user_id!: string;

  static primaryKey = '_id';
}
