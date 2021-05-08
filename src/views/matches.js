import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Match from '../components/match'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})

const Matches = ({ route }) => {
  const { matches } = route.params

  return (
    <View style={styles.container}>
      {
        matches.map((match) => <Match key={match.id} match={match} />)
      }
    </View>
  )
}

Matches.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      matches: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        local: PropTypes.shape,
        visit: PropTypes.shape,
        localScore: PropTypes.number,
        visitScore: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
        stadium: PropTypes.string,
        price: PropTypes.string,
      })),
    }).isRequired,
  }).isRequired,
}

export default Matches
