import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './notificationIcon.styles'

const NotificationIcon = ({ number }) => (
  <View style={styles.container}>
    <Text style={styles.numberStyle}>{number}</Text>
  </View>
)

NotificationIcon.propTypes = {
  number: PropTypes.number,
}

NotificationIcon.defaultProps = {
  number: 0,
}

export default NotificationIcon
s