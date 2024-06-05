// Define your object model
import { BSON, Realm } from 'realm';

import { User } from './User';
import { Round } from './Round';

export class League extends Realm.Object<League> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  leagueName!: string;
  code!: string;
  joinCode!: string;
  isSelected: boolean = false;
  owner_id!: string;
  users!: User[];

  static schema: Realm.ObjectSchema = {
    name: 'League',
    properties: {
      _id: 'objectId',
      leagueName: 'string',
      code: 'string',
      joinCode: 'string',
      isSelected: 'bool',
      owner_id: 'string',
      users: { type: 'list', objectType: 'User' },
    },
    primaryKey: '_id',
  };
}
