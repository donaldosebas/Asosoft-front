import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceicon: {
    fontSize: 45,
    color: '#1B9CC4',
    padding: 5,
  },
  platform: {
    fontSize: 12,
  },
})

const TransmissionInfo = ({ transmissions }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Transmision en vivo en: </Text>
    <View style={styles.iconsContainer}>
      {
        transmissions.map((transmission) => (
          <View key={transmission.link} style={styles.iconContainer}>
            {
              // TODO: use link for open on external app
            }
            <IconIonic name={`logo-${transmission.platform}`} style={styles.faceicon} />
            <Text style={styles.platform}>{transmission.platform}</Text>
          </View>
        ))
      }
    </View>
  </View>
)

TransmissionInfo.propTypes = {
  transmissions: PropTypes.arrayOf(PropTypes.shape({
    platform: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
}

export default TransmissionInfo
