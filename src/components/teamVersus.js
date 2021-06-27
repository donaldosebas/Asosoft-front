import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import TeamCircle from './teamCircle'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventLabel: {
    backgroundColor: '#1B9CC4',
    width: '90%',
    borderRadius: 50,
    margin: 10,
    padding: 5,
    alignItems: 'center',
  },
  eventLabelText: {
    color: 'white',
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

const TeamVersusHeader = ({ eventLabel, match }) => (
  <View style={styles.container}>
    <View style={styles.eventLabel}>
      <Text style={styles.eventLabelText}>{eventLabel}</Text>
    </View>
    <View style={styles.versusContainer}>
      <TeamCircle team={match.local} />
      <Text style={styles.result}>
        {
          (match.localScore === null) ? 'VS' : `${match.localScore} - ${match.visitScore}`
        }
      </Text>
      <TeamCircle team={match.visit} side="right" />
    </View>
  </View>
)

TeamVersusHeader.propTypes = {
  eventLabel: PropTypes.string.isRequired,
  match: PropTypes.shape({
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
  }).isRequired,
}

export default TeamVersusHeader
