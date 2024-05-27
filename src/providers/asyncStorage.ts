import AsyncStorage from '@react-native-async-storage/async-storage';

const saveStorageData = async (league: any) => {
  try {
    const jsonLeague = JSON.parse(league);
    await AsyncStorage.setItem('league', jsonLeague);
  } catch (e) {
    // saving error
  }
};
const getStorageData = async () => {
  try {
    const jsonLeague = await AsyncStorage.getItem('league');
    return jsonLeague != null ? JSON.parse(jsonLeague) : null;
  } catch (e) {
    // error reading value
  }
};
