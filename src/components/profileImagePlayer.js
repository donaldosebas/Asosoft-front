import React from 'react'
import { StyleSheet,View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  perfil:{
    width:'80%',
    height:200,
    borderRadius:5,
  },
})

const ImageProfile = () =>{
    return(
    <View style={styles.container}>
        <Image
            style={styles.perfil}
            source={{
            uri: 'https://a2.espncdn.com/combiner/i?img=%2Fmedia%2Fmotion%2F2020%2F0725%2FHu_200725_Deportes_video_Javier_lemus_beibolista_Guatemala_alemania%2FHu_200725_Deportes_video_Javier_lemus_beibolista_Guatemala_alemania.jpg&w=640&h=360&format=jpg',
            }}
        />
    </View>
    )}

export default ImageProfile