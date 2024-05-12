// // Define your object model
import { BSON, Realm } from 'realm';
import { League } from './League';

export class User extends Realm.Object<User> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  leagues: League[] = [];
  user_id!: string;

  static primaryKey = '_id';
}
