import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { dataPlayerProfileText } from '../text/es.json'

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
    fontSize: 24,
  },
  games2: {
    alignItems: 'center',
    fontSize: 24,
  },
})

const ProfileData = () => (
  <View style={styles.data}>
    <View style={styles.victory}>
      <Text style={styles.games}>{dataPlayerProfileText.victoryTitle}</Text>
      <Text style={styles.games2}>35</Text>
    </View>
    <View style={styles.fail}>
      <Text style={styles.games}>{dataPlayerProfileText.defeatsTitle}</Text>
      <Text style={styles.games2}>45</Text>
    </View>
    <View style={styles.games}>
      <Text style={styles.games}>{dataPlayerProfileText.gamesTitle}</Text>
      <Text style={styles.games2}>47</Text>
    </View>
  </View>
)

export default ProfileData
