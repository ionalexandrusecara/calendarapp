import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  TabBarBottom
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

import SignInScreen from './screens/SignInScreen'
import MapScreen from './screens/MapScreen'
import ExploreScreen from './screens/ExploreScreen'
import ProfileScreen from './screens/ProfileScreen'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import LogInScreen from './screens/LogInScreen'
import SignUpScreen from './screens/SignUpScreen'
import CalendarScreen from './screens/CalendarScreen'

//AIzaSyB9LLATU9fXkbTTXMlOxSMCKm-d6VqLU0g

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const AppTab = createBottomTabNavigator(
  {
    Map: MapScreen,
    Calendar: CalendarScreen,
    Explore: ExploreScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Calendar'
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Calendar') {
          iconName = 'calendar';
        } else if (routeName === 'Map') {
          iconName = 'calendar';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={'md-checkmark-circle'} size={32} color="green" />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  LogIn: LogInScreen,
  SignUp: SignUpScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppTab,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)
