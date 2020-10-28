import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Color from '../../constants/Color';

const Greetings = props => {
  return (
    <View style={{ ...styles.greetingContainer, ...props.style }} >
      <TouchableOpacity style={styles.imageContainer} onPress={() => { }} >
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://bespokeevents.com/wp-content/uploads/2017/11/blank-profile-picture-973460.png',
          }}
        />
      </TouchableOpacity>
      <View style={styles.lableSection} >
        <Text style={styles.labelStyle}>Good Morning Rajesh !</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    marginVertical: 5,
    backgroundColor: Color.bgColor,
    flexDirection: "row",
    alignItems: 'center',
    height: 100,
    width: '98%',
    overflow: "hidden",
    borderRadius: 15,
    shadowColor: Color.secondary,
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 8,
    elevation: 8
  },
  imageContainer: {
    height: 90,
    width: 90,
    borderRadius: 45,
    // borderColor: Color.primary,
    // borderWidth: 1,
    overflow: 'hidden',
    marginLeft: 15
  },
  profileImage: {
    height: "100%",
    width: "100%"
  },
  lableSection: {
    marginLeft: 20,
  },
  labelStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: Color.label,
  },
  lablePosition: {
    marginLeft: 30,
  }
});

export default Greetings;