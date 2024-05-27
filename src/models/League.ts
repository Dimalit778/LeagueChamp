// Define your object model
import { BSON, Realm } from 'realm';

import { User } from './User';
import { Round } from './Round';

export class League extends Realm.Object<League> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  leagueName!: string;
  code!: string;
  joinCode!: string;
  users!: User[];
  rounds!: Round[];
  owner_id!: string;

  static schema: Realm.ObjectSchema = {
    name: 'League',
    properties: {
      _id: 'objectId',
      leagueName: 'string',
      code: 'string',
      joinCode: 'string',
      owner_id: 'string',
      users: { type: 'list', objectType: 'User' },
      rounds: { type: 'list', objectType: 'Round' },
    },
    primaryKey: '_id',
  };
}
