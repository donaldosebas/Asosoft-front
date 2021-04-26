import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button navigation={navigation} />
  </View>
)
export default Home
