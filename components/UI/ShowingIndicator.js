import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Color from '../../constants/Color';

const ShowingIndicator = props => {
  return (
    <ActivityIndicator
      size='large'
      style={styles.loadingSpin}
      color={Color.label}
    />
  );
};

const styles = StyleSheet.create({
  loadingSpin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ShowingIndicator;