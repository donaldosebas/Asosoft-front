import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, ScrollView, Text, Image,
} from 'react-native'
import { fetchNewById } from '../../services/news.service'
import { NewsMapper } from '../../utils/news.mapper'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    margin: 20,
    textAlign: 'justify',
  },
})

const NewsView = ({ route }) => {
  const { id, title } = route.params
  const [news, setNews] = useState({})

  const getNews = async () => {
    fetchNewById(id).then((data) => {
      setNews(NewsMapper(data))
    })
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: news?.image }} />
      <Text style={styles.title}>{ news?.title || title }</Text>
      <Text style={styles.description}>{ news?.description }</Text>
    </ScrollView>
  )
}

NewsView.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default NewsView
