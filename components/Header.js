import React from 'react'
import { View } from 'react-native'
import NavigationBar from 'react-native-navbar'

const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello'),
};
    
const leftButtonConfig = {
    title: 'Back',
    handler: () => alert('hello!'),
};

const Header = ({ username }) => {    

    const titleConfig = {
        title: username,
    };
    
  return (
      <View>
        <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
        leftButton={leftButtonConfig}
        />
      </View>
  )
}

export default Header;