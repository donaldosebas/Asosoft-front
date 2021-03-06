import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, Text, Image, Pressable,
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
    top: 55,
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

const NewsCard = ({ notice, navigation }) => (
  <View style={styles.container}>
    <Pressable
      onPress={() => navigation.navigate('News', { id: notice.id, title: notice.news_title })}
    >
      <Image
        style={styles.image}
        source={{ uri: notice.news_image }}
      />
      <LinearGradient colors={['transparent', 'black']} style={styles.gradient}>
        <Text style={styles.title}>{notice.news_title}</Text>
      </LinearGradient>
      <Text style={styles.preview}>
        {notice.news_preview}
        <Text style={styles.continue}> ...Leer más</Text>
      </Text>
    </Pressable>
  </View>
)

NewsCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  notice: PropTypes.shape({
    id: PropTypes.number.isRequired,
    news_title: PropTypes.string.isRequired,
    news_image: PropTypes.string.isRequired,
    news_preview: PropTypes.string.isRequired,
  }).isRequired,
}

export default NewsCard
