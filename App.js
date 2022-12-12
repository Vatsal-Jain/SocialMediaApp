import {
  Text,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import Postscreen from './components/postscreen';
import {IconButton} from 'react-native-paper';
import 'react-native-gesture-handler';

import Stories from './components/Stories';
import Secondscreen from './screens/secondscreen';
import RootNavigation from './navigation/RootNavigation';
import 'react-native-gesture-handler'
import Post from './components/postscreen';




const App = () => {

  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  // };

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View style={styles.forhead}>
        <Text style={styles.title}>Instagram</Text>
        <TouchableOpacity style={{ right: 50,
            position: 'absolute',}}>
        <IconButton
          icon="plus"
          style={{
            borderWidth: 2,
            borderRadius: 8,
          }}
          size={14}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{ right: 0,
            position: 'absolute',}}>
        <IconButton
          icon="magnify"
          size={28}
          style={{opacity: 0.8}}
        />
        </TouchableOpacity>
      </View>
     <RootNavigation />
     <Post />
    </SafeAreaView>
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

    paddingVertical: 10,
  },
});

export default App;
