import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    width: 250,
    height: 250,
    shadowColor: '#000',
    margin: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    position: 'relative',
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
})

const EventCard = ({ data }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: data.image }} />
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.category}>{data.category}</Text>
    {data.actualJourney && (
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <IconIonic
          name="flag"
          style={{ margin: 5, color: '#1B9CC4' }}
        />
        <Text>{`Jornada ${data.actualJourney} de ${data.totalJourneys}`}</Text>
      </View>
    )}
    {data.sede && (
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <IconIonic
          name="pin"
          style={{ margin: 5, color: '#1B9CC4' }}
        />
        <Text>{data.sede}</Text>
      </View>
    )}
    {data.winner && (
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <IconIonic
          name="trophy"
          style={{ margin: 5, color: '#1B9CC4' }}
        />
        <Text>{data.winner}</Text>
      </View>
    )}
    {data.startDate && (
      <>
        <Text>Inicia:</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <IconIonic
            name="calendar"
            style={{ margin: 5, color: '#1B9CC4' }}
          />
          <Text>{data.startDate}</Text>
        </View>
      </>
    )}
    {data.endDate && (
      <>
        <Text>Finaliza:</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <IconIonic
            name="calendar"
            style={{ margin: 5, color: '#1B9CC4' }}
          />
          <Text>{data.endDate}</Text>
        </View>
      </>
    )}
  </View>
)

EventCard.propTypes = {
  data: PropTypes.shape({
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
  }).isRequired,
}

export default EventCard
