import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Color from '../../constants/Color';

const CategoryGridStyle = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={styles.imageStyle}
          source={{ uri: props.image }}
        />
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 10,
    width: '45%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: Color.bgColor,
  },
  imageStyle: {
    width: '100%',
    height: '85%',
    resizeMode: 'stretch',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    marginTop: 3,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    textAlign: 'center',
    color: Color.label,
  },
});

export default CategoryGridStyle;
