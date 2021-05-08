import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
  StyleSheet, View, Text, Dimensions,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'
import TeamCircle from './teamCircle'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  versusContainer: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
})

const Match = ({ match }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={{ padding: 20, paddingTop: 5 }}
      onPress={() => navigation.navigate('Match Description', {
        match,
      })}
    >
      <View style={styles.container}>
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
      </View>
    </TouchableOpacity>
  )
}

Match.propTypes = {
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
    date: PropTypes.string,
    time: PropTypes.string,
    stadium: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
}

export default Match
