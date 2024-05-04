import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';
import { useRealm, useQuery, useUser } from '@realm/react';
import { Task } from '../models/Task';
import { League } from '../models/League';

export default function TaskList() {
  const realm = useRealm();
  // const tasks = useQuery(Task);
  const leagues = useQuery(League);

  // const user = useUser();

  const [newLeague, setNewLeague] = useState('');

  const addLeague = () => {
    realm.write(() => {
      realm.create(League, {
        leagueName: newLeague,
        leagueCode: '123',
        user_id: '123',
      });
    });
    setNewLeague('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      {/* The list of tasks */}
      <FlatList
        data={leagues}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => (
          <Text style={{ color: 'white' }}>{item.leagueName}</Text>
        )}
      />
      <TextInput
        value={newLeague}
        onChangeText={setNewLeague}
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Button title="Add task" onPress={addLeague} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: 'white',
    padding: 15,
    backgroundColor: '#1D2125',
    borderRadius: 5,
  },
});
