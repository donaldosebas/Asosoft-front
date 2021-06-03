import React from 'react'
import {
  View, StyleSheet, ScrollView, Text,
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
    color: '#1B9CC4',
    borderRadius: 15,
    margin: 5,
    padding: 4,
    alignItems: 'center',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  red: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
})

const PlayerProfile = () => (
  <ScrollView>
    <View style={styles.container}>
      <ImageProfile />
      <View style={styles.icons}>
        <View style={styles.red}>
          <IconIonic name="logo-facebook" style={styles.faceicon} />
          <Text style={styles.text}>/vizcaino.gt</Text>
        </View>
        <View style={styles.red}>
          <IconIonic name="logo-instagram" style={styles.faceicon} />
          <Text style={styles.text}>@vizcaino.gt</Text>
        </View>
        <View style={styles.red}>
          <IconIonic name="mail-outline" style={styles.faceicon} />
          <Text style={styles.text}>vizcaino@gmail.com</Text>
        </View>
      </View>
      <ProfileData />
      <RouteProfile />
      <BiographyProfile />
    </View>
  </ScrollView>

)
export default PlayerProfile
