import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import { routePlayerProfileText } from '../text/es.json'

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

const RouteProfile = () => (
  <View style={styles.container}>

    <Text style={styles.title}>{routePlayerProfileText.routeTitle}</Text>
  </View>
)

export default RouteProfile
