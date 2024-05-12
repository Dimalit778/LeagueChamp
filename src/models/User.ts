// // Define your object model
import { BSON, Realm } from 'realm';
import { League } from './League';

export class User extends Realm.Object {
  _id!: BSON.ObjectId;
  name!: string;
  image?: string;
  leagues!: Realm.List<League>;

  static schema: Realm.ObjectSchema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      name: 'string',
      image: 'string',
      leagues: 'League[]',
    },
  };
}
// export class User extends Realm.Object<User> {
//   _id: BSON.ObjectId = new BSON.ObjectId();
//   name!: string;
//   leagues: League[] = [];
//   user_id!: string;

//   static primaryKey = '_id';
// }
