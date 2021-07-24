import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Match from '../components/matchs/match'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})

const Matches = ({ route }) => {
  const { matches } = route.params
  const { event } = route.params

  return (
    <View style={styles.container}>
      {
        matches.map((match) => <Match key={match.id} match={match} event={event} />)
      }
    </View>
  )
}

Matches.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }),
      matches: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        local: PropTypes.shape,
        visit: PropTypes.shape,
        localScore: PropTypes.number,
        visitScore: PropTypes.number,
        journey: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
        stadium: PropTypes.string,
        price: PropTypes.string,
      })),
    }).isRequired,
  }).isRequired,
}

export default Matches
