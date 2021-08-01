import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import { routePlayerProfileText } from '../../../text/es.json'
import MatchBase from '../../matchs/matchbase/matchBase'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    margin: 15,
    padding: 15,
    paddingTop: 0,
    borderRadius: 5,
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
    textAlign: 'center',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#DADADA',
    marginBottom: 10,
    marginTop: 10,
  },
  more: {
    color: '#1B9CC4',
    textAlign: 'center',
  },
})

const RouteProfile = ({ matches }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{routePlayerProfileText.routeTitle}</Text>
    {
      matches.map((match) => (
        <View key={match.id}>
          <MatchBase match={match} event={match.event} />
          <View style={styles.separator} />
        </View>
      ))
    }
    <Text style={styles.more}>Ver todo</Text>
  </View>
)

RouteProfile.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    local: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      isSubscribed: PropTypes.bool,
    }),
    visit: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      isSubscribed: PropTypes.bool,
    }),
    localScore: PropTypes.number,
    visitScore: PropTypes.number,
    journey: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
    stadium: PropTypes.string,
    price: PropTypes.string,
    event: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
}

export default RouteProfile
