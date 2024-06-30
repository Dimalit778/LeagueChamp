import { View, Text, TextInput } from 'react-native';
import React, { useContext, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { ScaledSheet, ms, mvs, s, vs } from 'react-native-size-matters';
import { Button } from 'react-native-elements';

import { ThemeContext } from '../../../themeProvider/themeContext';
import CustomKeyboardView from '../../../components/custom/CustomKeyboardView';
import Colors from '../../../myAssets/colors/Colors';
import { useLeaguesRealm } from '@/hooks/useLeaguesRealm';
import Toast from 'react-native-toast-message';

const JoinLeague = () => {
  const { joinNewLeague } = useLeaguesRealm();
  const { theme } = useContext(ThemeContext);
  const [leagueCode, setLeagueCode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleJoinLeague = async () => {
    if (!leagueCode) {
      setErrorMsg('Please enter a league code');
      return;
    }
    const result = await joinNewLeague(leagueCode);
    if (!result.status) {
      setErrorMsg(result.message);
      return;
    }
    Toast.show({
      type: 'success',
      text1: result.message,
    });
    router.back();
  };

  return (
    <CustomKeyboardView>
      <Stack.Screen options={{ title: 'Join League' }} />
      <View style={styles.container}>
        <Text style={[styles.headerText, { color: theme.primary }]}>
          Join With League Code
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={leagueCode}
            placeholder="Enter Code..."
            placeholderTextColor="grey"
            keyboardType="email-address"
            onChangeText={setLeagueCode}
          />
        </View>
        {errorMsg ? <Text style={styles.errorText}>{errorMsg} </Text> : null}
        <Button
          title="Join"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={handleJoinLeague}
        />
      </View>
    </CustomKeyboardView>
  );
};
export default JoinLeague;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: mvs(30),
  },
  headerText: {
    marginTop: vs(20),
    fontFamily: 'Roboto_700Bold',
    fontSize: ms(25),
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginTop: mvs(30),
    backgroundColor: Colors.gray,
    borderRadius: ms(10),
    padding: mvs(10),
  },
  textInput: {
    fontSize: ms(18),
    paddingHorizontal: mvs(10),
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginTop: mvs(30),
  },
  button: {
    backgroundColor: Colors.darkGreen,
    borderRadius: ms(30),
    paddingVertical: vs(10),
    paddingHorizontal: ms(60),
  },
  buttonTitle: {
    fontSize: ms(20),
    fontWeight: 'bold',
  },
  errorText: {
    backgroundColor: 'red',

    marginTop: '10@ms',
    color: 'white',
    padding: '3@ms',
    fontSize: '14@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '5@ms',
  },
});
