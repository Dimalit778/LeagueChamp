// Item Card

import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';

export const CountryItem = ({ item }) => {
  return (
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
};

const styles = ScaledSheet.create({
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
