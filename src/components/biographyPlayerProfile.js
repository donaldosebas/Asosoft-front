import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import Truncate from './truncateText'
import { biographyPlayerProfileText } from '../text/es.json'

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
  textBiography: {
    borderRadius: 5,
    padding: 23,
    color: 'black',
    textAlign: 'justify',
  },
})

const BiographyProfile = () => (
  <View style={styles.container}>

    <Text style={styles.title}>{biographyPlayerProfileText.bioTitle}</Text>
    <Truncate max={126}>
      Fabián Esteban Vizcaíno Chinchilla nació en el año 1995 es un beisbolista guatemalteco,
      que se desempeña como parador en corto.
      Ha sido dos veces campeón de Centroamérica, subcampeón en una eliminatoria premundialista
      y campeón de la Senior League Baseball World Series -competencia a nivel
      americano para niños entre 13 y 16 años.

      Actualmente, el jugador guatemalteco cursa una beca deportiva con la
      Academia Tomás moreno en Florida, Estados Unidos, en busca de cumplir
      sus metas de llegar a las Grandes Ligas de Béisbol de Estados Unidos.
    </Truncate>
  </View>
)

export default BiographyProfile
