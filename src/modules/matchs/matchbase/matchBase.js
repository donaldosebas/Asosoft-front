import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet, View, Text, Pressable,
} from 'react-native'
import TeamCircle from '../../shared/teamCircle/teamCircle'

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  versusContainer: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  result: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
    margin: 10,
  },
})

const MatchBase = ({ match, event }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      style={({ pressed }) => [
        (pressed) ? styles.pressed : {},
        styles.contentContainer,
      ]}
      onPress={() => navigation.navigate('Match Description', {
        event,
        match,
      })}
    >
      <Text>{`${event.title} - ${event.category} - Jornada: ${match.journey}`}</Text>
      <View style={styles.versusContainer}>
        <TeamCircle team={match.local} />
        <Text style={styles.result}>
          {
            (match.localScore === null) ? 'VS' : `${match.localScore} - ${match.visitScore}`
          }
        </Text>
        <TeamCircle team={match.visit} side="right" />
      </View>
      <Text>{match.date}</Text>
      <Text>{match.time}</Text>
    </Pressable>
  )
}

MatchBase.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
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
  }).isRequired,
}

export default MatchBase
