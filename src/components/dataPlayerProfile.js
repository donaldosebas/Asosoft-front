import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  data: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 15,
  },
  victory: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  fail: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  games: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
})

const ProfileData = () => (
  <View style={styles.data}>
    <View style={styles.victory}>
      <Text style={styles.games}>Victorias</Text>
      <Text style={styles.games}>45</Text>
    </View>
    <View style={styles.fail}>
      <Text style={styles.games}>Derrotas</Text>
      <Text style={styles.games}>45</Text>
    </View>
    <View style={styles.games}>
      <Text style={styles.games}>Juegos</Text>
      <Text style={styles.games}>45</Text>
    </View>
  </View>
)

export default ProfileData
