import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native'

const logo = require('./sp.png')

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '70%',
  },
  optionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  optionIcon: {
    transform: [{ scale: 1.7 }],
    margin: 10,
    color: '#7C7C7C',
  },
  link: {
    color: '#1B9CC4',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF0000',
  },
  image: {
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
})

const Splash = () => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <View style={styles.container}>
    <Image style={styles.image} source={logo} />
    <Text style={styles.title}>GuateSports</Text>
  </View>
)

export default Splash
