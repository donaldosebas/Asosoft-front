import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { termsText } from '../../text/es.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 20,
  },
})

const Terms = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{termsText.title}</Text>
  </View>
)

export default Terms
