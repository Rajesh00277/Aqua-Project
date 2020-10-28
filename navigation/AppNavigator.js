import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Color from '../constants/Color';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import HistoryScreen from '../screens/HistoryScreen';
import StartUPI from '../screens/UPI/StartUPI';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Color.primary,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Color.secondary,
};

const ScreenNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ProductDetail: ProductDetailsScreen,
  },
  {
    navigationOptions: {
      drawerLabel: 'Products',
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          Colors={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const favNavigator = createStackNavigator(
  {
    favScreen: FavoriteScreen,
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const appTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: ScreenNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    UPI: {
      screen: StartUPI,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="rupee" size={21} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Favorite: {
      screen: favNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="favorite"
              size={26}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons name="payment" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Color.secondary,
      activeBackgroundColor: Color.bgColor,
      inactiveBackgroundColor: Color.bgColor
    },

  }
);
export default createAppContainer(appTabNavigator);
