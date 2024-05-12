import { League } from '../models/League';
import { Match } from '../models/Match';
import { Round } from '../models/Round';

import { User } from '../models/User';
import { createRealmContext } from '@realm/react';
export const realmContext = createRealmContext({
  // Pass all of your models into the schema value.
  schema: [League, Match, Round, User],
});
export const schemas = [League, Match, Round, User];
