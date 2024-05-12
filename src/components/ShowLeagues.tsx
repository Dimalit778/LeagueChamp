import { Text, StyleSheet, View } from 'react-native';

export const ShowLeagues = ({ league }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        gap: 20,
      }}
    >
      <Text style={styles.listText}>{league.leagueName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    overflow: 'hidden',
    padding: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 15,
    color: 'white',
    width: '60%',
  },
});
