import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'

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
    fontSize: 45,
    marginLeft: 15,
    backgroundColor: '#1B9CC4',
    borderRadius: 15,
    color: 'white',
    padding: 5,
  },
  horarys: {
    marginTop: 15,
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
      <IconIonic name="logo-instagram" style={styles.faceicon} />
      <IconIonic name="logo-facebook" style={styles.faceicon} />
    </View>
  </View>
)

export default DateInfo
