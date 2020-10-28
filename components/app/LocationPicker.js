import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import Color from '../../constants/Color';

const LocationPicker = (props) => {
  const [currentLocation, setCurrentLocation] = useState('');

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        'Sorry !',
        'Application needs Location permission to procced',
        [{ text: 'Okay' }],
        { cancelable: false }
      );
      const resultAgain = await Permissions.getAsync(Permissions.LOCATION);
      if (resultAgain.status !== 'granted') {
        return false;
      }
      return true;
    } else {
      return true;
    }
  };

  const onLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      if (currentLocation) {
        closeHander();
      }
    } catch (Err) {
      console.log(Err);
    }
  };

  const closeHander = () => {
    props.onPickedHandler(currentLocation);
  };

  return (
    <Modal visible={props.visible} animationType="none">
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-close' : 'ios-close'}
            size={30}
            color={Color.black}
            onPress={closeHander}
          />
          <Text style={styles.label}>Set Location</Text>
        </View>
        <TouchableOpacity style={styles.locationBox} onPress={onLocationHandler}>
          <MaterialIcons name="my-location" size={26} color={Color.bgColor} />
          <Text style={styles.contentLabel}>Current Location</Text>
        </TouchableOpacity>
        <View style={styles.orStyle}>
          <Text style={styles.label}>Or</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 2,
    marginTop: 20,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: Color.label,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 5,
  },

  locationBox: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '70%',
    backgroundColor: Color.secondary,
    borderRadius: 40,
    overflow: 'hidden',
  },
  label: {
    marginLeft: 20,
    color: Color.black,
    fontSize: 25,
  },
  contentLabel: {
    color: Color.bgColor,
    fontSize: 25,
    marginLeft: 10,
  },
  orStyle: {
    position: 'relative',
    marginLeft: 20,
  },
});

export default LocationPicker;
