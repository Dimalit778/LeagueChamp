// // Define your object model
import { BSON, ObjectSchema, Realm } from 'realm';

import { User } from 'realm';
import { Round } from './Round';

// export class Match extends Realm.Object<Match> {
//   _id: BSON.ObjectId = new BSON.ObjectId();
//   homeTeam!: string;
//   awayTeam!: string;
//   homeScore!: number;
//   awayScore!: number;
//   isFinished: boolean = false;
//   matchPoints!: number;
//   user: User; // Reference to the user who created the match
//   round: Round; // Reference to the round the match belongs to

//   static primaryKey = '_id';
// }
export class Match extends Realm.Object<Match> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  homeScore!: number;
  awayScore!: number;
  isFinished: boolean = false;
  matchPoints!: number;
  user!: User;
  round!: Round;

  static schema: Realm.ObjectSchema = {
    name: 'Match',
    properties: {
      _id: 'objectId',
      homeScore: 'int',
      awayScore: 'int',
      isFinished: 'bool',
      matchPoints: 'int',
      user: 'User',
      round: 'Round',
    },
    primaryKey: '_id',
  };
}
