import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/UI/CustomHeaderButton';
import Color from '../constants/Color';
import MainButton from '../components/UI/MainButton';

const ProductDetailScreen = (props) => {
  const prodId = props.navigation.getParam('productId');
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === prodId)
  );
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={{ ...styles.image, ...styles.marginContent }}
          source={{ uri: selectedProduct.imageURL }}
        />
        <Text style={{ ...styles.price, ...styles.marginContent }}>
          {'\u20B9'} {selectedProduct.price.toFixed(2)}
        </Text>
        <View style={styles.buttonContainer}>
          <MainButton onPress={() => { }}>
            <Text >Add To Cart</Text>
          </MainButton>
          <MainButton onPress={() => { }}>
            <Text>Buy Now</Text>
          </MainButton>
        </View>
        <Text style={{ ...styles.contentStyle, ...styles.marginContent }} >
          {selectedProduct.description}
        </Text>
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    resizeMode: 'stretch'
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  contentStyle: {
    fontSize: 15,
    fontFamily: 'open-sans',
    marginHorizontal: 20,
    textAlign: 'center',
    
  },
  marginContent: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
});

ProductDetailScreen.navigationOptions = (NavigationData) => {
  return {
    headerTitle: NavigationData.navigation.getParam('title'),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => { }}
        />
      </HeaderButtons>
    ),
  };
};
export default ProductDetailScreen;
