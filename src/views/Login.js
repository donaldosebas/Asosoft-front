import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { loginText } from '../text/es.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Login = () => (
  <View style={styles.container}>
    <Text>{loginText.loginTitle}</Text>
  </View>
)
export default Login
