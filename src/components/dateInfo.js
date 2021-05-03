import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

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
    fontWeight: 'bold',
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
})

const DateInfo = () => (
  <View style={styles.data}>
    <View style={styles.horary}>
      <Text style={styles.info}>Horario</Text>
      <Text style={styles.hour}>9:00 am - 11:00 am</Text>
    </View>
    <View style={styles.horary}>
      <Text style={styles.info}>Fecha</Text>
      <Text style={styles.day}>Domingo 24 de abril</Text>
    </View>
    <View style={styles.horary}>
      <Text style={styles.info}>Precio</Text>
      <Text style={styles.price}>Q. 25.00</Text>
    </View>
  </View>
)

export default DateInfo
