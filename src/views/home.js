import React from 'react'
import PropTypes from 'prop-types'
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

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
}

export default Home
