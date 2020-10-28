import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Color from '../../constants/Color';

const windowWidth = Dimensions.get("window").width;
const windowHight = Dimensions.get("window").height;
const SlideImage = props => {
  return (
    <View horizontal="true" >
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'http://4.bp.blogspot.com/-A6oaVFZOwjA/T2K2s-7s30I/AAAAAAAAAAc/cSrqrWcwQoA/s1600/save_water_save_life_by_grfixds.jpg',
          }}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
    // borderColor: Color.primary,
    // borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    height: windowHight > 400 ? 180 : 200,
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
});

export default SlideImage;