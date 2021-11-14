import React from 'react'
import {
  StyleSheet, View, Text, Image, Pressable,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 250,
    height: 250,
    borderRadius: 7,
  },
  notPressed: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pressed: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
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

const EventCard = ({ event, navigation }) => (
  <View style={styles.container}>
    <Pressable
      style={({ pressed }) => [
        (pressed) ? styles.pressed : styles.notPressed,
        styles.contentContainer,
      ]}
      onPress={() => navigation.navigate('Tournament', {
        event,
      })}
    >
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
      {(event.actualJourney === 0) && (
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
      {(Date.parse(`${event.startDate.split('-')[0]}-${event.startDate.split('-')[1]}-${event.startDate.split('-')[2]}`) > Date.now()) && (
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
      {(Date.parse(`${event.endDate.split('-')[0]}-${event.endDate.split('-')[1]}-${event.endDate.split('-')[2]}`) > Date.now())
        && (Date.parse(`${event.startDate.split('-')[0]}-${event.startDate.split('-')[1]}-${event.startDate.split('-')[2]}`) < Date.now()) && (
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
      {(Date.parse(`${event.endDate.split('-')[0]}-${event.endDate.split('-')[1]}-${event.endDate.split('-')[2]}`) < Date.now()) && (
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
    </Pressable>
  </View>
)

EventCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
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
