// Define your object model
import { BSON, List, Realm } from 'realm';
import { User } from './User';
import { Round } from './Round';

export class League extends Realm.Object {
  _id!: BSON.ObjectId;
  leagueName!: string;
  owner_id!: string;
  code!: string;
  users!: Realm.List<User>;

  static schema: Realm.ObjectSchema = {
    name: 'League',
    properties: {
      _id: 'objectId',
      leagueName: 'string',
      owner_id: 'string',
      code: 'string',

      users: 'User[]',
    },
  };
}
// export class League extends Realm.Object<League> {
//   _id: BSON.ObjectId = new BSON.ObjectId();
//   leagueName!: string;
//   leagueCode!: string;
//   members: User[] = [];
//   rounds: Round[] = [];
//   owner_id!: string;

//   static primaryKey = '_id';
// }
