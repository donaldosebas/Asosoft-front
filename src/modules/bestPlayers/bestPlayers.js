import React from 'react'
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 250,
    height: 350,
    borderRadius: 7,
    shadowColor: '#000',
    margin: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    position: 'relative',
    height: '80%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
})

const BestPlayers = ({ player, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Player', {
  })}
  >
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: player.image }} />
      <Text style={styles.title}>{player.name}</Text>
      <Text>{player.position}</Text>
    </View>
  </TouchableOpacity>
)

BestPlayers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  player: PropTypes.shape({
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default BestPlayers
