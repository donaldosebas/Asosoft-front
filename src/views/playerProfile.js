import React from 'react'
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import ImageProfile from '../components/profileImagePlayer'
import ProfileData from '../components/dataPlayerProfile'
import { playerProfileText } from '../text/es.json'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  perfil: {
    width: '80%',
    height: 200,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBiography: {
    backgroundColor: '#1B9CC4',
    borderRadius: 5,
    padding: 23,
    color: 'white',
    textAlign: 'justify',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
  },
  faceicon: {
    fontSize: 35,
    color: 'white',
    borderRadius: 15,
    margin: 5,
    padding: 4,
    backgroundColor: '#1b9cc4',
  },
  biography: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  contact: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 24,
    marginBottom: 15,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const PlayerProfile = () => (
  <ScrollView>
    <View style={styles.container}>
      <ImageProfile />
      <Text style={styles.biography}>{playerProfileText.biographyTitle}</Text>
      <Text style={styles.textBiography}>
        Fabián Esteban Vizcaíno Chinchilla nació en el año 1995 es un beisbolista guatemalteco,
        que se desempeña como parador en corto.
        Ha sido dos veces campeón de Centroamérica, subcampeón en una eliminatoria premundialista
        y campeón de la Senior League Baseball World Series -competencia a nivel
        americano para niños entre 13 y 16 años.

        Actualmente, el jugador guatemalteco cursa una beca deportiva con la
        Academia Tomás moreno en Florida, Estados Unidos, en busca de cumplir
        sus metas de llegar a las Grandes Ligas de Béisbol de Estados Unidos.
      </Text>
      <ProfileData />
      <Text style={styles.contact}>{playerProfileText.contactTitle}</Text>
      <View style={styles.icons}>
        <IconIonic name="logo-facebook" style={styles.faceicon} />
        <IconIonic name="logo-instagram" style={styles.faceicon} />
        <IconIonic name="logo-twitter" style={styles.faceicon} />
        <IconIonic name="mail-outline" style={styles.faceicon} />

      </View>
    </View>
  </ScrollView>

)
export default PlayerProfile
