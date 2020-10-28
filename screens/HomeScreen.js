import React from 'react';
import { View, StyleSheet, FlatList, Platform, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/CustomHeaderButton';
import Greetings from '../components/app/Greetings';
import UserAddress from '../components/app/UserAddress';
import CategoryGridStyle from '../components/app/CategoryGridStyle';
import { PRODUCTS } from '../data/dummy_data';
import Color from '../constants/Color';

const HomeScreen = (props) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridStyle title={itemData.item.title} image={itemData.item.imageURL} />
    );
  };
  return (
    <View style={styles.container}>
      <Greetings style={styles.greetings} />
      <UserAddress />
      <View style={styles.greetings} >
        <Text style={styles.label}>Categories</Text>
      </View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        renderItem={renderGridItem}
      />
      <View  >

      </View>
      <StatusBar style="light" backgroundColor="black" />
    </View>
  );
};

HomeScreen.navigationOptions = (NavigationData) => {
  return {
    headerTitle: 'Aqua ',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            NavigationData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
          onPress={() => {
            NavigationData.navigation.navigate('Cart');
          }}
        />
        <Item
          title="Cart"
          iconName={
            Platform.OS === 'android' ? 'md-notifications' : 'ios-notifications'
          }
          onPress={() => {
            NavigationData.navigation.navigate('Cart');
          }}
        />
        <Item
          title="Cart"
          iconName={
            Platform.OS === 'android'
              ? 'md-help-circle-outline'
              : 'ios-help-circle'
          }
          onPress={() => {
            NavigationData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  greetings: {
    margin: 5,
    marginVertical: 10,
  },
  label: {
    fontFamily: "open-sans-bold",
    fontSize: 19,
    color: Color.label
  }
});

export default HomeScreen;
