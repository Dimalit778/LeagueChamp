import { vs, ms } from 'react-native-size-matters';
import {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message';
import { AntDesign } from '@expo/vector-icons';
const toastAlert = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderColor: 'green',
        borderLeftWidth: ms(7),
        borderRightWidth: ms(7),
      }}
      contentContainerStyle={{ paddingHorizontal: ms(15) }}
      text1Style={{
        color: 'green',
        fontSize: ms(16),
        fontWeight: '700',
      }}
      text2Style={{
        fontSize: ms(14),
      }}
    />
  ),
  actionComplete: (props) => (
    <SuccessToast
      {...props}
      renderLeadingIcon={() => (
        <AntDesign name="checkcircleo" size={32} color="green" />
      )}
      style={{
        paddingHorizontal: ms(30),
        borderColor: 'gold',

        borderWidth: ms(2),
        alignItems: 'center',
      }}
      contentContainerStyle={{
        paddingHorizontal: ms(15),
      }}
      text1Style={{
        color: 'green',
        fontSize: ms(16),
        fontWeight: '700',
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderColor: 'red',
        borderLeftWidth: ms(7),
        borderRightWidth: ms(7),
        height: vs(40),
      }}
      text1Style={{
        textAlign: 'center',
        color: 'black',
        fontSize: ms(16),
      }}
      text2Style={{
        fontSize: ms(14),
        color: 'red',
        fontWeight: '500',
      }}
    />
  ),
};
export default toastAlert;
