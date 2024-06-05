import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ScaledSheet, ms, mvs, s, vs } from 'react-native-size-matters';
import { Button } from 'react-native-elements';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { BSON } from 'realm';
import { League, User } from '../../../models';
import { ThemeContext } from '../../../themeProvider/themeContext';
import CustomKeyboardView from '../../../components/custom/CustomKeyboardView';
import Colors from '../../../myAssets/colors/Colors';

const JoinLeague = () => {
  const realm = useRealm();
  const user = useUser();
  const userApp = useQuery(User).filtered(`userId == '${user.id}'`);
  const { theme } = useContext(ThemeContext);
  const [code, setCode] = useState(null);
  const router = useRouter();
  const { _id } = user.customData;

  let owner = useObject(User, new BSON.ObjectId(_id));

  const allLeagues = useQuery(League);
  // console.log('join ', allLeagues);
  const findLeagueByCode = async (code: string) => {
    let league = allLeagues.filtered(`joinCode == '${code}'`);

    if (league.length == 0) return console.log('no league found');

    realm.write(() => {
      league[0].users.push(userApp[0]);
    });
    // await addLeagueCustomUser(user, league[0]);
    router.push('tabs');
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
            onPress={() => findLeagueByCode(code)}
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
