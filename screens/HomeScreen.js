import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/UI/CustomHeaderButton';
import ShowingIndicator from '../components/UI/ShowingIndicator'
import Greetings from '../components/app/Greetings';
import UserAddress from '../components/app/UserAddress';
import CategoryGridStyle from '../components/app/CategoryGridStyle';
import Color from '../constants/Color';

import * as ProductActions from '../store/action/product';

const HomeScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const allProducts = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const loadProducts = useCallback(async () => {
    setError(null);
    try {
      await dispatch(ProductActions.fetchProducts());
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [loadProducts]);

  if (error) {
    return (
      <View style={styles.loadingSpin}>
        <Text> An error occured. Please try again </Text>
        <Button
          title="Try Again"
          color={Color.label}
          onPress={loadProducts}
        />
      </View>
    );
  };
  if (isLoading && allProducts.length === 0) {
    return (
      <View style={styles.loadingSpin}>
        <Text> Something went wrong. please try agin </Text>
      </View>
    );
  };

  const renderGridItem = itemData => {
    return (
      <CategoryGridStyle
        title={itemData.item.title}
        image={itemData.item.imageURL}
        onPress={() => {
          props.navigation.navigate('ProductDetail', {
            productId: itemData.item.id,
            title: itemData.item.title
          });
        }} />
    );
  };
  return (
    <View style={styles.container}>
      <Greetings style={styles.greetings} />
      <UserAddress />
      <View style={styles.greetings} >
        <Text style={styles.label}>Categories</Text>
      </View>
      {isLoading ? (<ShowingIndicator />
        // <ActivityIndicator
        //   size='large'
        //   style={styles.loadingSpin}
        //   color={Color.label}
        // />
      ) : (<FlatList
        data={allProducts}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        renderItem={renderGridItem}
        />)
      }
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
          title="Notifications"
          iconName={
            Platform.OS === 'android' ? 'md-notifications' : 'ios-notifications'
          }
          onPress={() => {
          }}
        />
        <Item
          title="Help"
          iconName={
            Platform.OS === 'android'
              ? 'md-help-circle'
              : 'ios-help-circle'
          }
          onPress={() => {
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
  },
  loadingSpin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default HomeScreen;
