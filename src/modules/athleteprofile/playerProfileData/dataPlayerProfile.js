import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import { dataPlayerProfileText } from '../../../text/es.json'

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
    marginTop: 15,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 15,
    marginBottom: 5,
  },
  valueNumber: {
    fontSize: 25,
    marginBottom: 5,
  },
  available: {
    color: '#68c17c',
    fontWeight: 'bold',
  },
  notAvailable: {
    color: '#c71b1b',
    fontWeight: 'bold',
  },
  data: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataV: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  dataF: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  dataG: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  origin: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const ProfileData = ({
  country,
  team,
  wins,
  loses,
  games,
}) => (
  <View style={styles.container}>

    <Text style={styles.title}>{dataPlayerProfileText.countryTitle}</Text>
    <View style={styles.origin}>
      <Image source={{ uri: country.flag }} style={{ width: 18, height: 12, marginRight: 5 }} />
      <Text style={styles.value}>{country.name}</Text>
    </View>
    <Text style={styles.title}>{dataPlayerProfileText.actualteamTitle}</Text>
    <View style={styles.origin}>
      <Image
        source={{ uri: team.image }}
        style={{
          width: 20, height: 20, borderRadius: 50, marginRight: 5,
        }}
      />
      <Text style={styles.value}>{team.title}</Text>
    </View>

    <View style={styles.data}>
      <View style={styles.dataV}>
        <Text style={styles.title}>{dataPlayerProfileText.victoryTitle}</Text>
        <Text style={styles.valueNumber}>{wins}</Text>
      </View>
      <View style={styles.dataF}>
        <Text style={styles.title}>{dataPlayerProfileText.defeatsTitle}</Text>
        <Text style={styles.valueNumber}>{loses}</Text>
      </View>
      <View style={styles.dataG}>
        <Text style={styles.title}>{dataPlayerProfileText.gamesTitle}</Text>
        <Text style={styles.valueNumber}>{games}</Text>
      </View>
    </View>
  </View>
)

ProfileData.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
  }).isRequired,
  team: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  wins: PropTypes.number.isRequired,
  loses: PropTypes.number.isRequired,
  games: PropTypes.number.isRequired,
}

export default ProfileData
