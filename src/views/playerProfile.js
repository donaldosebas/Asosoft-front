import React from 'react'
import {
  View, Text, StyleSheet, Image,
} from 'react-native'
import ImageProfile from '../components/profileImagePlayer'
import ProfileData from '../components/dataPlayerProfile'

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  perfil: {
    width: '80%',
    height: 200,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBiography: {
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    padding: 23,
    color: 'black',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
  },
  faceicon: {
    width: 55,
    height: 55,
    marginLeft: 15,
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
  <View style={styles.container}>
    <ImageProfile />
    <Text style={styles.biography}>Biografia</Text>
    <Text style={styles.textBiography}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged.
    </Text>
    <ProfileData />
    <Text style={styles.contact}>Contacto</Text>
    <View style={styles.icons}>
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
      <Image
        style={styles.faceicon}
        source={{
          uri: 'https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_instagram-512.png',
        }}
      />

    </View>
  </View>

)
export default PlayerProfile
