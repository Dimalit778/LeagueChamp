// // Define your object model
import { BSON, Realm } from 'realm';
import { League } from './League';

export class User extends Realm.Object<User> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  image!: string;
  userId!: string;
  leagues!: League[];

  static schema: Realm.ObjectSchema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      name: 'string',
      image: 'string',
      userId: 'string',
      leagues: { type: 'list', objectType: 'League' },
    },
    primaryKey: '_id',
  };
}
