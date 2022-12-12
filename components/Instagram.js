import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Instagram = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.forhead}>
      <Text style={styles.title}>Instagram</Text>
      <TouchableOpacity
        style={{right: 50, position: 'absolute'}}
        onPress={() => {
          navigation.navigate('addscreen');
        }}>
        <IconButton
          icon="plus"
          style={{
            borderWidth: 2,
            borderRadius: 8,
          }}
          size={14}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('discoverscreen');
        }}
        style={{right: 0, position: 'absolute'}}>
        <IconButton icon="magnify" size={28} style={{opacity: 0.8}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  img: {
    width: 200,
    height: 100,
  },
  forhead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
});

export default Instagram;
