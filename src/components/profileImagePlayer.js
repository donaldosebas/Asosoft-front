import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  perfil: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})

const ImageProfile = ({ image }) => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.perfil}
      resizeMode="cover"
      source={{
        uri: image,
      }}
    />
  </View>
)

ImageProfile.propTypes = {
  image: PropTypes.string.isRequired,
}

export default ImageProfile
