import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TopBar = () => {
  return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.buttonOne}>
              <Text style={styles.buttonText}>
                  Followers
              </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonTwo}>
              <Text style={styles.buttonText}>
                  Following
              </Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 40,
    width: 'auto',
    backgroundColor: 'rgb(227, 100, 99)',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center'
  },
  buttonOne: {
    width: 207,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonTwo: {
    width: 207,
    padding: 7,
    backgroundColor: 'white',
  }

})

export default TopBar;