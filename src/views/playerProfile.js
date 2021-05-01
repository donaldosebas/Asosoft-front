import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  perfil:{
    width:'50%',
    height:'20%'
  },
  textBiography:{
    backgroundColor:'gray',
    borderRadius:5,
    padding:23
  },
  data:{
    display:'flex',
    flexDirection:'row'
  },
  faceicon: {
    width:35,
    height:35
  }
})

const PlayerProfile = () => (
  <View style={styles.container}>
    <Image
        style={styles.perfil}
        source={{
          uri: 'https://a2.espncdn.com/combiner/i?img=%2Fmedia%2Fmotion%2F2020%2F0725%2FHu_200725_Deportes_video_Javier_lemus_beibolista_Guatemala_alemania%2FHu_200725_Deportes_video_Javier_lemus_beibolista_Guatemala_alemania.jpg&w=640&h=360&format=jpg',
        }}
      />
    <Text>Biografia</Text>
    <Text style={styles.textBiography}>Es un gran jugador</Text>
    <View style={styles.data}>
        <View style={styles.victory}>
          <Text>Victorias</Text>
          <Text>45</Text>
        </View>
        <View style={styles.fail}>
          <Text>Derrotas</Text>
          <Text>45</Text>
        </View>
        <View style={styles.games}>
          <Text>Juegos</Text>
          <Text>45</Text>
        </View>
    </View>
    <Text>Contacto</Text>
    <View style={styles.icons}>
      <Image
      style={styles.faceicon}
      source={{
        uri: 'https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png',
      }} />

    </View>
  </View>

)
export default PlayerProfile
