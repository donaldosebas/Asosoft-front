import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const PlayerProfile = () => (
  <View style={styles.container}>
    <Text>Player Profile</Text>
  </View>
)
export default PlayerProfile