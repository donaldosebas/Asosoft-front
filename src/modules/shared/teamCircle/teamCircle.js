import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  teamContainer: {
    width: 90,
    margin: 10,
    marginBottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleShadow: {
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  imageTeam: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  teamTitleNotification: {
    margin: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    position: 'absolute',
    marginRight: 10,
  },
  notificationIconActive: {
    color: '#1B9CC4',
  },
  notificationIconDeactive: {
    color: 'grey',
  },
  title: {
    textAlign: 'center',
  },
})

const TeamCircle = ({ team, side, isIcon }) => (
  <View style={[
    styles.teamContainer,
    {
      marginLeft: (side === 'left') ? 40 : 0,
      marginRight: (side === 'right') ? 40 : 0,
    },
  ]}
  >
    <View style={styles.circleShadow}>
      <Image style={styles.imageTeam} source={{ uri: team.image }} />
    </View>
    <View style={styles.teamTitleNotification}>
      {isIcon
        && (
        <IconIonic
          name="ios-notifications-outline"
          style={[
            // eslint-disable-next-line max-len
            team.isSubscribed ? styles.notificationIconActive : styles.notificationIconDeactive,
            styles.notificationIcon,
            {
              transform: [{ scale: 1.5 }, { translateX: (side === 'left') ? -35 : 35 }],
            },
          ]}
        />
        )}
      <Text style={styles.title}>{team.title}</Text>
    </View>
  </View>
)

TeamCircle.propTypes = {
  team: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    isSubscribed: PropTypes.bool,
  }).isRequired,
  side: PropTypes.string,
  isIcon: PropTypes.bool,
}

TeamCircle.defaultProps = {
  side: 'left',
  isIcon: true,
}

export default TeamCircle
