import React from 'react';
import { Platform } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';

import HeaderButton from './HeaderButton';

const DrawerMenu = props => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={props.onClick}
      />
    </HeaderButtons>
  );
};

export default DrawerMenu;