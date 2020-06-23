import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const CustomButton = () => {
  return (
    <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                Following
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(227, 100, 99)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 25,
    
  },
  buttonText: {
      color: 'white',
      fontSize: 14
  }
})

export default CustomButton;