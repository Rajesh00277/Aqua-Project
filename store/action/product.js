import Product from "../../models/Product";

export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      // const token = getState().auth.token;
      // const userId = getState().auth.userId;
      const response = await fetch(`https://aqua-project-a007d.firebaseio.com/products.json`);
      if (!response.ok) {
        const errResData = await response.json();
        console.log(errResData);
        throw new Error('Something Wrong try again');
      }
      const resData = await response.json();
      const loadedProducts = [];
      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            resData[key].imageURL,
            resData[key].title,
            resData[key].description,
            resData[key].price,
            resData[key].quantity
          )
        );
      }
      dispatch({
        type: FETCH_PRODUCT,
        products: loadedProducts,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const addProuct = (title, price, imageUrl, description) => {
  return async (dispatch, getState) => {
    // we can write any async code because Redux Thunk will take care of handling
    let pushToken;
    let statusObj = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (statusObj.status !== 'granted') {
      statusObj = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
    if (statusObj.status !== 'granted') {
      pushToken = null;
    }
    pushToken = (await Notifications.getExpoPushTokenAsync()).data;// first await executes then data will retrieves from response
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(`https://react-native-shop-e0c5f.firebaseio.com/product.json?auth=${token}`,
      {
        method: 'POST', // we can use GET,PUT,POST,DELETE,PATCH all here based on requirments
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price,
          imageUrl,
          description,
          ownerId: userId,
          ownerPushToken: pushToken,
        }),
      }
    );
    const responseData = await response.json();
    //console.log(responseData);
    dispatch({
      type: ADD_PRODUCT,
      productData: {
        id: responseData.name,
        title,
        price,
        imageUrl, //modern JS facilty, if both paramerter and variable has same name u can use like this
        description,
        ownerId: userId,
        ownerPushToken: pushToken
      },
    });
  };
};

export const addWaterProducts = (imageURL, title, description, price, quantity) => {
  return async (dispatch, getState) => {
    const response = await fetch(`https://aqua-project-a007d.firebaseio.com/products.json`,
      {
        method: 'POST', // we can use GET,PUT,POST,DELETE,PATCH all here based on requirments
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageURL,
          title,
          description,
          price,
          quantity
        }),
      }
    );
    const responseData = await response.json();
    console.log(responseData);
  };
};