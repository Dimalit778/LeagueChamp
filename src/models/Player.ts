// // Define your object model
import { BSON, Realm } from 'realm';
import { League } from './League';

export class Player extends Realm.Object<Player> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  image!: string;
  userId!: string;
  leagues!: string;
  points!: number;

  static schema: Realm.ObjectSchema = {
    name: 'Player',
    properties: {
      _id: 'objectId',
      name: 'string',
      image: 'string',
      userId: 'string',
      leagueId: 'string',
      points: 'int',
    },
    primaryKey: '_id',
  };
}
