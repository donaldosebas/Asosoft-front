import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#1B9CC4',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
  spinnerContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '5%',
    height: '100%',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
})

const SimpleButton = ({ title, onPress, isLoading }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {isLoading && (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    )}
    <Text style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
)

SimpleButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
}

SimpleButton.defaultProps = {
  onPress: () => {},
  isLoading: false,
}

export default SimpleButton
