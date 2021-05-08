import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 7,
    width: 250,
    height: 250,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 80,
    width: '100%',
    margin: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  category: {
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'absolute',
    right: 0,
    transform: [{ scale: 2 }],
    margin: 15,
  },
  notificationIconActive: {
    color: '#1B9CC4',
  },
  notificationIconDeactive: {
    color: 'grey',
  },
})

const EventCard = ({ event }) => {
  const navigation = useNavigation()
  const local = 'Guatemala'

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Tournament', {
      event,
    })}
    >
      <View style={styles.container}>
        <IconIonic
          name="ios-notifications-outline"
          style={[
            // eslint-disable-next-line max-len
            event.isSubscribed ? styles.notificationIconActive : styles.notificationIconDeactive,
            styles.notificationIcon,
          ]}
        />
        <Image style={styles.image} source={{ uri: event.image }} />
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.category}>{event.category}</Text>
        {(event.actualJourney > 0) && (
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <IconIonic
              name="flag"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{`Jornada ${event.actualJourney} de ${event.totalJourneys}`}</Text>
          </View>
        )}
        {(event.sede !== local) && (
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <IconIonic
              name="pin"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{event.sede}</Text>
          </View>
        )}
        {(event.winner !== '') && (
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <IconIonic
              name="trophy"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{event.winner}</Text>
          </View>
        )}
        {(Date.parse(`${event.startDate.split('-')[2]}-${event.startDate.split('-')[1]}-${event.startDate.split('-')[0]}`) > Date.now()) && (
          <>
            <Text>Inicia:</Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <IconIonic
                name="calendar"
                style={{ margin: 5, color: '#1B9CC4' }}
              />
              <Text>{event.startDate}</Text>
            </View>
          </>
        )}
        {(Date.parse(`${event.endDate.split('-')[2]}-${event.endDate.split('-')[1]}-${event.endDate.split('-')[0]}`) > Date.now())
        && (Date.parse(`${event.startDate.split('-')[2]}-${event.startDate.split('-')[1]}-${event.startDate.split('-')[0]}`) < Date.now()) && (
          <>
            <Text>Finaliza:</Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <IconIonic
                name="calendar"
                style={{ margin: 5, color: '#1B9CC4' }}
              />
              <Text>{event.endDate}</Text>
            </View>
          </>
        )}
        {(Date.parse(`${event.endDate.split('-')[2]}-${event.endDate.split('-')[1]}-${event.endDate.split('-')[0]}`) < Date.now()) && (
          <>
            <Text>Finalizó:</Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <IconIonic
                name="calendar"
                style={{ margin: 5, color: '#1B9CC4' }}
              />
              <Text>{event.endDate}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  )
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    actualJourney: PropTypes.number,
    totalJourneys: PropTypes.number,
    sede: PropTypes.string,
    winner: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    isSubscribed: PropTypes.bool,
  }).isRequired,
}

export default EventCard
