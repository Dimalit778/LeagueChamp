// // Define your object model
import { BSON, Realm } from 'realm';
import { Match } from './Match';

import { League } from './League';

// export class Round extends Realm.Object<Round> {
//   _id: BSON.ObjectId = new BSON.ObjectId();
//   roundNumber!: number;
//   isFinished: boolean = false;
//   league_id!: string;
//   matches: Match[] = [];

//   static primaryKey = '_id';
// }
export class Round extends Realm.Object<Round> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  roundNumber!: number;
  isFinished: boolean = false;
  matches!: Match[];
  league!: League;

  static schema: Realm.ObjectSchema = {
    name: 'Round',
    properties: {
      _id: 'objectId',
      roundNumber: 'int',
      isFinished: 'bool',
      matches: { type: 'list', objectType: 'Match' },
      league: 'League',
    },
    primaryKey: '_id',
  };
}
