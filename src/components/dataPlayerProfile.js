import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import { dataPlayerProfileText } from '../text/es.json'

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
  data: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

const ProfileData = () => (
  <View style={styles.container}>

    <Text style={styles.title}>{dataPlayerProfileText.countryTitle}</Text>
    <View style={styles.origin}>
      <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/206/206754.png' }} style={{ width: 20, height: 20 }} />
      <Text style={styles.title2}>Guatemala</Text>
    </View>
    <Text style={styles.title}>{dataPlayerProfileText.actualteamTitle}</Text>
    <View style={styles.origin}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/1200px-Baltimore_Orioles_cap.svg.png' }} style={{ width: 20, height: 20, borderRadius: 50 }} />
      <Text style={styles.title2}>Orioles</Text>
    </View>

    <View style={styles.data}>
      <View style={styles.dataV}>
        <Text style={styles.title}>{dataPlayerProfileText.victoryTitle}</Text>
        <Text style={styles.title}>35</Text>
      </View>
      <View style={styles.dataF}>
        <Text style={styles.title}>{dataPlayerProfileText.defeatsTitle}</Text>
        <Text style={styles.title}>35</Text>
      </View>
      <View style={styles.dataG}>
        <Text style={styles.title}>{dataPlayerProfileText.gamesTitle}</Text>
        <Text style={styles.title}>35</Text>
      </View>
    </View>
  </View>
)

export default ProfileData
