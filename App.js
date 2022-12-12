import {
  Text,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import 'react-native-gesture-handler';

import RootNavigation from './navigation/RootNavigation';
import 'react-native-gesture-handler';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  // };

  return (
    // <SafeAreaView style={{backgroundColor: 'black'}}>
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <RootNavigation />
    </>
  );
};

export default App;
