import { useQuery, useRealm } from '@realm/react';
import { League } from '../models/League';

const realm = useRealm();
const joinLeague = async (code: string) => {
  const leagues = realm.objects('League');
  console.log(leagues);
  // const leagues = await useQuery(League.name, `owner_id == ${code}`);
  return leagues.length > 0 ? leagues[0] : null;
};
export default joinLeague;
