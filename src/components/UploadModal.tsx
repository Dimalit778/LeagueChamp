import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-elements';
const UploadModal = () => {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.

  return (
    <View style={styles.container}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}

      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}

      <Button title="close" />
    </View>
  );
};
export default UploadModal;
const styles = ScaledSheet.create({
  container: {
    width: '200@s',
    height: '200@vs',
    backgroundColor: 'green',
  },
});
