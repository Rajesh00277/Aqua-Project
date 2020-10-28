import { Platform } from "react-native";
export default {
  // primary: '#4b0082',
  primary: Platform.OS === 'ios' ? '#0000ff' : '#ffffff',
  // primary: '#00ffff',
  secondary: Platform.OS === 'android' ? '#0000ff' : '#ffffff',
  label: '#0000ff',
  bgColor: '#ffffff',
  black: '#000000',
  // primary1: '#009dff',
  // accent: 'white'
};