import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 1,
    right: 0,
  },
  notificationContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  notificationIconActive: {
    color: '#1B9CC4',
  },
  notificationIconDeactive: {
    color: 'grey',
  },
})

const IsSubscribed = ({ isSubscribed }) => (
  <View style={styles.container}>
    <View style={styles.notificationContainer}>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>{isSubscribed ? 'Suscrito' : 'Suscríbete'}</Text>
      <IconIonic
        name="ios-notifications-outline"
        style={[
          // eslint-disable-next-line max-len
          isSubscribed ? styles.notificationIconActive : styles.notificationIconDeactive,
          { transform: [{ scale: 2 }], margin: 3 },
        ]}
      />
    </View>
  </View>
)

IsSubscribed.propTypes = {
  isSubscribed: PropTypes.bool.isRequired,
}

export default IsSubscribed
