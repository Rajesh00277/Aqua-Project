import { Platform } from "react-native";
export default {
  primary: Platform.OS === 'ios' ? '#4b0082' : '#ffffff',
  // primary: '#00ffff',
  secondary: Platform.OS === 'android' ? '#4b0082' : '#ffffff',
  label: '#4b0082',
  bgColor: '#ffffff',
  black: '#000000',
};