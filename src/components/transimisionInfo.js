import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'

const styles = StyleSheet.create({
  data: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 15,
  },
  horary: {
    width: '100%',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  hour: {
    alignItems: 'center',
    fontSize: 24,
  },
  day: {
    alignItems: 'center',
    fontSize: 24,
  },
  price: {
    alignItems: 'center',
    fontSize: 24,
  },
  faceicon: {
    width: 55,
    height: 55,
    marginLeft: 15,
  },
  horarys: {
    width: '100%',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
})

const DateInfo = () => (
  <View style={styles.data}>
    <View style={styles.horary}>
      <Text style={styles.info}>Transmision en vivo en: </Text>
    </View>
    <View style={styles.horarys}>
      <Image
        style={styles.faceicon}
        source={{
          uri: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png',
        }}
      />
      <Image
        style={styles.faceicon}
        source={{
          uri: 'https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png',
        }}
      />
    </View>
  </View>
)

export default DateInfo
