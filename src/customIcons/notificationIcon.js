import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#1B9CC4',
  },
  numberStyle: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

const NotificationIcon = ({ number }) => (
  <View style={styles.container}>
    <Text style={styles.numberStyle}>{number}</Text>
  </View>
)
export default NotificationIcon
