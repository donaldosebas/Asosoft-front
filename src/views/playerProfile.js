import React from 'react'
import {
  View, StyleSheet, ScrollView,
} from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import ImageProfile from '../components/profileImagePlayer'
import ProfileData from '../components/dataPlayerProfile'
import RouteProfile from '../components/routePlayerProfile'
import BiographyProfile from '../components/biographyPlayerProfile'

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
      <View style={styles.icons}>
        <IconIonic name="logo-facebook" style={styles.faceicon} />
        <IconIonic name="logo-instagram" style={styles.faceicon} />
        <IconIonic name="mail-outline" style={styles.faceicon} />
      </View>
      <ProfileData />
      <RouteProfile />
      <BiographyProfile />
    </View>
  </ScrollView>

)
export default PlayerProfile
