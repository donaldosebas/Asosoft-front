import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Match from './match/match'
import { fetchMatches } from '../../services/match.service'
import { MatchesMapper } from '../../utils/events.mapper'
import { MATCHES_TYPE } from '../../utils/types'
import { MatchesToMatchTypeMapper } from '../../utils/match.mapper'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})

const Matches = ({ route }) => {
  const [matches, setMatches] = useState([])
  const { event, type } = route.params

  const getMatches = async () => {
    fetchMatches(event.id, type).then((data) => {
      if (type === MATCHES_TYPE.NEXT) {
        setMatches(data.map((match) => {
          const mappedMatch = MatchesMapper(match)
          mappedMatch.localScore = null
          return mappedMatch
        }))
      } else {
        setMatches(data.map((match) => MatchesMapper(match)))
      }
    })
  }

  useEffect(() => {
    getMatches()
  }, [])

  return (
    <View style={styles.container}>
      {
        matches.map((match) => (
          <Match key={match.id} match={match} event={event} type={MatchesToMatchTypeMapper(type)} />
        ))
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
      type: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default Matches
