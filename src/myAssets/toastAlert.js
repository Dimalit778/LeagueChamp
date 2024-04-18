import { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastAlert = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderColor: 'green',
        borderLeftWidth: 10,
        borderRightWidth: 10,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: 'green',
        fontSize: 20,
        fontWeight: '700',
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderColor: 'red',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        height: 40,
      }}
      text1Style={{
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
      }}
      text2Style={{
        fontSize: 20,
        color: 'red',
        fontWeight: '500',
      }}
    />
  ),
};
export default toastAlert;
