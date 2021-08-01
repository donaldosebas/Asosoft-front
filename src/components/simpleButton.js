import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#1B9CC4',
    borderRadius: 5,
    padding: 5,
    margin: 10,
    maxWidth: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
})

const SimpleButton = ({ title }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
)

SimpleButton.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SimpleButton
