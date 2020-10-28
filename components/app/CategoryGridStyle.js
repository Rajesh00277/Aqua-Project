import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Color from '../../constants/Color';

const CategoryGridStyle = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity onPress={() => { }}>
        <Image style={styles.imageStyle} source={{ uri: props.image }} />
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
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    textAlign: 'center',
    color: Color.label,
  },
});

export default CategoryGridStyle;
