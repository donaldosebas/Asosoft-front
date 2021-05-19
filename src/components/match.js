import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
  StyleSheet, View, Text, Dimensions, Pressable,
} from 'react-native'
import PropTypes from 'prop-types'
import TeamCircle from './teamCircle'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    margin: 20,
  },
  contentContainer: {
    width: width - 40,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
  },
  notPressed: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pressed: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
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

const Match = ({ match, event }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          (pressed) ? styles.pressed : styles.notPressed,
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
    </View>
  )
}

Match.propTypes = {
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

export default Match
