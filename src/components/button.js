import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
})
const Button = ({ navigation }) => {
  const press = () => {
    navigation.navigate('Sport', { name: 'Sport' })
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={press}
    >
      <Text style={styles.text}>Ir a asociación</Text>
    </TouchableOpacity>
  )
}
export default Button
