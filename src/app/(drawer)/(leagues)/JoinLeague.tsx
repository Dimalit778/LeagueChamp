import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ms, mvs, s, vs } from 'react-native-size-matters';

import { ThemeContext } from '../../../themeProvider/themeContext';

import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../../myAssets/colors/Colors';
import { Button } from 'react-native-elements';
import CustomKeyboardView from '../../../components/custom/CustomKeyboardView';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';

import { User } from '../../../models/User';
import { BSON } from 'realm';
import { addLeagueCustomUser } from '../../../api/customUser';
import { League } from '../../../models/League';

type ItemProps = {
  id: number;
  name: string;
  code: string;
  flagImage: any;
  country: string;
};
const JoinLeague = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const [code, setCode] = useState(null);

  const realm = useRealm();

  const user = useUser();

  const { _id } = user.customData;

  let owner = useObject(User, new BSON.ObjectId(_id));

  // console.log(leagues);

  useEffect(() => {}, []);
  // Generate Code League

  const joinLeague = async (code: string, ownerId: string) => {
    try {
      const currentLeague = useQuery(League).filtered(`owner_id == '${code}'`);
      console.log('L ', currentLeague);
      let newLeague = null;
      // realm.write(() => {
      //   newLeague = realm.create('League', {
      //     _id: new BSON.ObjectId(),
      //   });
      // });
      // realm.write(() => {
      //   newLeague.users.push(owner);
      // });
      // addLeagueCustomUser(user, newLeague);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CustomKeyboardView>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: mvs(20),
          }}
        >
          <Text
            style={{
              marginTop: vs(20),
              color: theme.primary,
              fontSize: ms(30),
            }}
          >
            Join League
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={code}
              placeholder="Enter Code..."
              placeholderTextColor="grey"
              keyboardType={'email-address'}
              onChangeText={(text) => setCode(text)}
            />
          </View>

          <Button
            title="Join "
            titleStyle={{ fontWeight: 'bold', fontSize: ms(24) }}
            buttonStyle={{
              borderWidth: 2,
              borderColor: theme.navbar,
              backgroundColor: 'grey',
              borderRadius: 20,
            }}
            containerStyle={{
              width: s(150),
            }}
            onPress={() => joinLeague(code, user.id)}
          />
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default JoinLeague;
const styles = ScaledSheet.create({
  inputBox: {
    width: '170@vs',
    backgroundColor: Colors.gray,
    borderRadius: '10@ms',
    padding: '10@ms',
  },

  textInput: {
    fontSize: '24@ms',
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
