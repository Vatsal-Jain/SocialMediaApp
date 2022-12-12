import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Postscreen from '../components/postscreen';

const Tab = createMaterialBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Postscreen} />
      <Tab.Screen name="Settings" component={Stories} />
    </Tab.Navigator>
  );
}

export default Navigator