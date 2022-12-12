import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Post from '../components/postscreen';
import Instagram from '../components/Instagram';

import Discover from '../screens/discover';
import Add from '../screens/add';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first">
        <Stack.Screen
          options={{header: () => <Instagram />}}
          name="first"
          component={Post}
        />
        <Stack.Screen
          name="addscreen"
          component={Add}
          options={{
            title: 'Add',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
          }}
        />

        <Stack.Screen
          name="discoverscreen"
          component={Discover}
          options={{
            title: 'Discover',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
