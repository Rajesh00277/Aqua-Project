import { DELETE_ITEM, ADD_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCT } from '../action/product';

const initialState = {
  availableProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT: {
      return {
        availableProducts: action.products,
      }
    }
    case ADD_PRODUCT: {
      const newProduct = new Product(
        action.productData.id,
        action.productData.ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price,
        action.productData.ownerPushToken
      );
      return {
        ...state,
        userProducts: state.userProducts.concat(newProduct),
        availableProducts: state.availableProducts.concat(newProduct),
      };
    }
    case UPDATE_PRODUCT: {
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.pId
      );
      const availableProductIndex = state.availableProducts.findIndex(
        prod => prod.id === action.pId
      );
      const updatedProduct = new Product(
        action.pId,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        userProducts: updatedUserProducts,
        availableProducts: updatedAvailableProducts,
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.pId
        ),
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.pId
        ),
      }; //What this means is that basically it will keep all products where the IDs do not match,
    }
  }
  return state;
};
