import React from 'react'
import {
  StyleSheet, View, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'
import MatchBase from '../matchbase/matchBase'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    margin: 20,
  },
  contentContainer: {
    width: width - 40,
    backgroundColor: 'white',
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
})

const Match = ({
  match, event, type, navigation,
}) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <MatchBase match={match} event={event} type={type} navigation={navigation} />
    </View>
  </View>
)

Match.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
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
  type: PropTypes.string.isRequired,
}

export default Match
