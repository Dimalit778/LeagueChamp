// Define your object model
import { BSON, List, Realm } from 'realm';
import { User } from './User';
import { Round } from './Round';

export class League extends Realm.Object<League> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  leagueName!: string;
  leagueCode!: string;
  members: User[] = [];
  rounds: Round[] = [];
  owner_id!: string;

  static primaryKey = '_id';
}
