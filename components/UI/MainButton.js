import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Color from '../../constants/Color';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: Math.round(Dimensions.get('window').width) / 2.2
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default MainButton;
