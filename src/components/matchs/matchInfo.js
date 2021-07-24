import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    margin: 15,
    padding: 15,
    paddingTop: 0,
    borderRadius: 5,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  available: {
    color: '#68c17c',
    fontWeight: 'bold',
  },
  notAvailable: {
    color: '#c71b1b',
    fontWeight: 'bold',
  },
})

const MatchInfo = ({ match, showExtraInfo }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Fecha:</Text>
    <Text>{match.date}</Text>
    <Text style={styles.title}>Hora:</Text>
    <Text>{`Inicia: ${match.time}`}</Text>
    {
      (match.estimateEndTime) && <Text>{`Finaliza: ${match.estimateEndTime}`}</Text>
    }
    <Text style={styles.title}>Lugar:</Text>
    <Text>{match.stadium}</Text>
    {
      (showExtraInfo)
      && (
      <>
        <Text style={styles.title}>Entrada:</Text>
        <Text style={(match.price === null) ? styles.notAvailable : styles.available}>{(match.price === null) ? 'No disponible' : 'Disponible'}</Text>
        {
          (match.price !== null) && <Text>{match.price}</Text>
        }
        <Text style={styles.title}>Parqueo:</Text>
        <Text>{match.parking}</Text>
      </>
      )
    }
  </View>
)

MatchInfo.propTypes = {
  match: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    estimateEndTime: PropTypes.string,
    stadium: PropTypes.string.isRequired,
    price: PropTypes.string,
    parking: PropTypes.string,
  }).isRequired,
  showExtraInfo: PropTypes.bool.isRequired,
}

export default MatchInfo
