import { FlatList, Text, View } from 'react-native';

// interface User {
//   name: string;
//   points: number;
// }
const LeagueTable = (matches: any) => {
  // const [users, setUsers] = useState([]);
  // const { leagueId } = useAppSelector((state: any) => state.league.leagueData);

  // const leagueQuery = useObject<League>(League, new BSON.ObjectId(leagueId));
  // console.log('Home league ', leagueQuery);
  console.log('matches ', matches);
  return (
    <FlatList
      data={matches}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{item.homeTeam.shortName}</Text>
            <Text>{item.score.fullTime.home}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{item.awayTeam.shortName}</Text>
            <Text>{item.score.fullTime.away}</Text>
          </View>
        </View>
      )}
    />
  );
};
export default LeagueTable;
