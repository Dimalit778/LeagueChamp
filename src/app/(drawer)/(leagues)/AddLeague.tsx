import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { ms, mvs, s, vs } from 'react-native-size-matters';
import { countryFlags } from '../../../utils/countryFlags';
import { ThemeContext } from '../../../themeProvider/themeContext';
import { FlatList } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../../myAssets/colors/Colors';
import { Button } from 'react-native-elements';
import CustomKeyboardView from '../../../components/custom/CustomKeyboardView';
import { useApp, useObject, useQuery, useRealm, useUser } from '@realm/react';
import { League } from '../../../models/League';
import { User } from '../../../models/User';
import { BSON } from 'realm';
import { addLeagueCustomUser } from '../../../api/customUser';
import { getLeague } from '../../../store/leagueActions';
type ItemProps = {
  id: number;
  name: string;
  code: string;
  flagImage: any;
  country: string;
};
const AddLeague = () => {
  const firstItem = countryFlags[0];
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const [leagueName, setLeagueName] = useState(null);
  const [selectedItem, setSelectedItem] = useState(firstItem);
  const realm = useRealm();

  const user = useUser();

  const { _id } = user.customData;

  let owner = useObject(User, new BSON.ObjectId(_id));

  useEffect(() => {}, []);
  // Generate Code League
  const generateCode = () => {
    const length: number = 5;
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const saveNewLeague = async (leagueName: string, ownerId: string) => {
    let newLeague = null;
    realm.write(() => {
      newLeague = realm.create('League', {
        _id: new BSON.ObjectId(),
        leagueName,
        code: selectedItem.code,
        joinCode: generateCode(),
        owner_id: ownerId,
        users: [],
        rounds: [],
      });
    });
    realm.write(() => {
      newLeague.users.push(owner);
    });
    addLeagueCustomUser(user, newLeague);
    router.replace('/(tabs)');
  };
  // Item Card
  const CountryItem = ({ item }: { item: ItemProps }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { borderBottomColor: theme.border, borderTopColor: theme.border },
      ]}
      onPress={() => setSelectedItem(item)}
    >
      <Image
        source={item.flagImage}
        style={{ width: s(60), height: vs(40) }}
        contentFit="cover"
      />
      <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
        {item.country}
      </Text>
    </TouchableOpacity>
  );

  return (
    <CustomKeyboardView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          gap: mvs(20),
        }}
      >
        <Text
          style={[
            styles.headerText,
            { marginTop: vs(20), color: theme.primary },
          ]}
        >
          League Name
        </Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            value={leagueName}
            placeholder="Enter your league name"
            placeholderTextColor="grey"
            keyboardType={'email-address'}
            onChangeText={(text) => setLeagueName(text)}
          />
        </View>
        <View style={styles.selectedItem}>
          <Image
            source={selectedItem.flagImage}
            style={{ width: vs(115), height: vs(80) }}
            contentFit="cover"
          />
          <Text style={styles.flagText}>{selectedItem.name}</Text>
        </View>

        <Text
          style={[
            styles.headerText,
            { marginTop: vs(30), color: theme.primary },
          ]}
        >
          Pick League
        </Text>
        <FlatList
          data={countryFlags.filter(
            (item) => !selectedItem || item?.id !== selectedItem?.id
          )}
          keyExtractor={(item) => item?.code.toString()}
          renderItem={CountryItem}
          horizontal
          contentContainerStyle={{
            flexDirection: 'row',
          }}
        />

        <Button
          title="Create "
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          buttonStyle={{
            borderWidth: 2,
            borderColor: theme.navbar,
            backgroundColor: 'grey',
            borderRadius: 20,
          }}
          containerStyle={{
            width: s(160),
          }}
          icon={{
            name: 'arrow-right',
            type: 'font-awesome',
            size: ms(15),
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
          onPress={() => saveNewLeague(leagueName, user.id)}
        />
      </View>
    </CustomKeyboardView>
  );
};

export default AddLeague;
const styles = ScaledSheet.create({
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  inputBox: {
    width: '250@vs',
    backgroundColor: Colors.gray,
    borderRadius: '10@ms',
    padding: '10@ms',
  },

  item: {
    padding: '7@s',
    margin: '3@s',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },

  selectedItem: {
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: Colors.blueGrey,
    borderColor: 'gold',
    padding: '5@s',
  },

  flagText: {
    fontSize: '16@s',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput: {
    fontSize: '16@ms',
    paddingLeft: '10@ms',
    width: '100%',
  },
  createBtn: {
    height: '25@vs',
    width: '50@s',
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
});
