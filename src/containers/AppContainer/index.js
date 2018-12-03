import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './../../screens/HomeScreen'
import InfoScreen from './../../screens/InfoScreen'

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Info: InfoScreen
}, {
  initialRouteName: "Home"
});

export {
  AppNavigator
}

export default createAppContainer(AppNavigator);
