import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from '../components/postscreen';
import 'react-native-gesture-handler'

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="second">
   <Stack.Screen name='first' component={Post} 
   options={{ title: 'Overview' }}
   />
    <Stack.Screen name="second" component={HomeScreen} 
    options={{ title: 'Overview' }}
    />
   
 </Stack.Navigator> 
 </NavigationContainer>

  )
}

export default RootNavigation