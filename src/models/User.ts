// // Define your object model
import { BSON, Realm } from 'realm';

export class User extends Realm.Object<User> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  image: string = null;
  points: number = 0;
  leagues: [];

  static primaryKey = '_id';
}
