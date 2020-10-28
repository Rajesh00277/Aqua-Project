import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StartUPI = props => {
  return (
    <View style={styles.container}>
      <Text>
        Good things comes those who waits !
      </Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StartUPI;