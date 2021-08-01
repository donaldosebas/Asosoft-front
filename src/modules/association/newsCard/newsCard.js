import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { margin, padding } from '../../../utils/stylesUtils'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 18,
    position: 'relative',
    top: 65,
    color: 'white',
    ...margin(2, 0, 2, 10),
  },
  preview: {
    ...padding(5, 10, 5, 10),
  },
  continue: {
    color: '#1B9CC4',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: 100,
    top: 150,
    zIndex: 1,
  },
})

const NewsCard = ({ notice }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: notice.image }}
    />
    <LinearGradient colors={['transparent', 'black']} style={styles.gradient}>
      <Text style={styles.title}>{notice.title}</Text>
    </LinearGradient>
    <Text style={styles.preview}>
      {notice.preview}
      <Text style={styles.continue}> ...Leer más</Text>
    </Text>
  </View>
)

NewsCard.propTypes = {
  notice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
}

export default NewsCard
