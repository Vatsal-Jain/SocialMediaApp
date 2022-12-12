import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {Modal, Portal, Button, Provider} from 'react-native-paper';

const Stories = ({item}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: '#000000ae',
    padding: 20,
    alignItems: 'center',
  };
  const wdth = useWindowDimensions().width;
  const hgt = useWindowDimensions().height;

  return (
    <View style={{marginHorizontal: 10, marginVertical: 10}}>
      <TouchableOpacity onPress={showModal}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Image
              source={{uri: item.profileimage}}
              style={{
                width: wdth * 1,
                height: hgt * 0.5,
                resizeMode: 'contain',
              }}
            />
            <Text>Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Image
          source={{uri: item.profileimage}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderColor: 'pink',
            borderWidth: 3,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <Text style={{textAlign: 'center'}}>{item.name.split(' ')[0]}</Text>
    </View>
  );
};

export default Stories;
