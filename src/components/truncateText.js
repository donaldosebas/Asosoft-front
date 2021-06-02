import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    margin: 15,
    padding: 15,
    paddingTop: 0,
    borderRadius: 5,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  available: {
    color: '#68c17c',
    fontWeight: 'bold',
  },
  notAvailable: {
    color: '#c71b1b',
    fontWeight: 'bold',
  },
  data: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataV: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  dataF: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  dataG: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  origin: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  see: {
    color: '#1B9CC4',
    textAlign: 'center',
  },
  textBiography: {
    borderRadius: 5,
    padding: 23,
    color: 'black',
    textAlign: 'justify',
  },
})
// eslint-disable-next-line react/prop-types
const Truncate = ({ children, max }) => {
  const text = children
  const [activo, setActivo] = useState(true)
  const resultString = activo ? text.slice(0, max) : text

  const changeAct = () => {
    setActivo(!activo)
  }
  return (
    <View>
      <Text style={styles.textBiography}>{resultString}</Text>
      <Text style={styles.see} onPress={changeAct}>{activo ? 'Ver más...' : 'Ver menos...'}</Text>
    </View>

  )
}

export default Truncate
