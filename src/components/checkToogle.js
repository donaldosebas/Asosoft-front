import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  icon: {
    transform: [{ scale: 2 }],
  },
  deselected: {
    color: '#7C7C7C',
  },
  selected: {
    color: '#68C17C',
  },
})

const CheckToogle = ({ toogled }) => (
  <View style={styles.container}>
    <IconIonic
      name="checkmark-circle-outline"
      style={[styles.icon, toogled ? styles.selected : styles.deselected]}
    />
  </View>
)

CheckToogle.propTypes = {
  toogled: PropTypes.bool.isRequired,
}

export default CheckToogle
