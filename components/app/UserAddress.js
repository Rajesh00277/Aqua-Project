import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

import Color from '../../constants/Color';
import LocationPicker from '../app/LocationPicker';

const UserAddress = (props) => {
  const [isAddLocation, setIsAddLocation] = useState(false);

  const getAddressHandler = (location) => {
    setIsAddLocation(false);
    console.log(location);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentAlign}>
        <EvilIcons name="location" size={30} color={Color.label} />
        <View style={styles.addressContainer}>
          <TouchableOpacity
            style={styles.homeLine}
            onPress={() => setIsAddLocation(true)}>
            {isAddLocation && (
              <LocationPicker
                visible={isAddLocation}
                onPickedHandler={getAddressHandler}
              />
            )}
            <Text style={styles.label}>Your Location</Text>
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="ios-arrow-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>
            276,Nathavadi Village, Tiruvannamalai
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginVertical: 5,
    backgroundColor: Color.bgColor,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    width: '98%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  contentAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressContainer: {
    marginLeft: 8,
  },
  homeLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  label: {
    fontFamily: 'open-sans-bold',
    color: Color.label,
  },
});

export default UserAddress;
