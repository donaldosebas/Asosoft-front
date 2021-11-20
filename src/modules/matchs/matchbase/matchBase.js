import React from 'react'
import PropTypes from 'prop-types'
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

const MatchBase = ({
  type, match, event, navigation,
}) => {
  const dateFormat = (date) => {
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear()
    return `${day}/${month}/${year}`
  }
  const timeFormat = (date) => {
    // ISO 8601 to local time
    const dateObj = new Date(date)
    const hours = dateObj.getUTCHours()
    const minutes = dateObj.getUTCMinutes()
    // create time string with leading zeros
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    return time
  }
  return (
    <Pressable
      style={({ pressed }) => [
        (pressed) ? styles.pressed : {},
        styles.contentContainer,
      ]}
      onPress={() => navigation.navigate('Match Description', {
        event,
        match,
        type,
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
      <Text>{dateFormat(match.date)}</Text>
      <Text>{timeFormat(match.time)}</Text>
    </Pressable>
  )
}

MatchBase.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
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
