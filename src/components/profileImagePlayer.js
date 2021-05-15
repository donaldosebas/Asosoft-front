import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  perfil: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})

const ImageProfile = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.perfil}
      resizeMode="stretch"
      source={{
        uri: 'https://www.soy502.com/sites/default/files/styles/escalar_image_inline/public/bib_4277.jpg',
      }}

    />
  </View>
)

export default ImageProfile
