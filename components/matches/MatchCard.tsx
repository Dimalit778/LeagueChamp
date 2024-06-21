import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

type MatchCardProps = {
  match: any;
};

const MatchCard = ({ match }: MatchCardProps) => {
  console.log(' match ', match);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Text style={styles.date}></Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Image style={styles.logo} source={{ uri: match.homeTeam.logo }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    width: 340,
    height: 130,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  livePill: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  liveText: {
    color: '#3353dd',
  },
  clubs: {
    marginTop: 100,
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  column: {
    flexDirection: 'column',
    height: 90,
    width: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    marginRight: 25,
    alignSelf: 'center',
    width: 250,
  },
  club: {
    color: '#7c7b82',
    fontSize: 15,
    fontFamily: 'ubuntu',
    fontWeight: 'bold',
  },
  vs: {
    color: '#c6c6c8',
    marginTop: 20,
  },
  score: {
    color: '#7c7b82',
    fontSize: 22,
    fontFamily: 'ubuntu',
    marginTop: 20,
  },
  imageContainer: {
    opacity: 0.2,
  },
  image: {},
  date: {
    color: '#3353dd',
    fontSize: 15,
    fontFamily: 'ubuntu',
    alignSelf: 'center',
  },
});
