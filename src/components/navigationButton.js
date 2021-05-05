import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
})

const NavigationButton = ({ content, navigation, screenName }) => {
  const press = () => {
    navigation.navigate(screenName)
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={press}
    >
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  )
}

NavigationButton.propTypes = {
  content: PropTypes.string.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  screenName: PropTypes.string.isRequired,
}

export default NavigationButton
