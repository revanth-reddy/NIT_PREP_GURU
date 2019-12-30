import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/settings';
import Prep from './screens/Prep';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Prep: {
      screen: Prep,
      navigationOptions: {
        tabBarLabel: 'Prep',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={[{color: tintColor}]}
              size={25}
              name={'library-books'}
            />
          </View>
        ),
        activeColor: 'white',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'settings'} />
          </View>
        ),
        activeColor: 'white',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: 'white',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#3BAD87'},
  },
);

export default createAppContainer(TabNavigator);
