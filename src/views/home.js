import React from 'react'
import PropTypes from 'prop-types'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native'
import AsociacionCard from '../components/asociacionHomeCard'
import Boton from '../components/button'

const data = [
  {
    Sport: 'SOFTBOL',
    Photo: 'https://www.guatemala.com/fotos/2020/02/jd-morales.jpg',
    isNotification: true,
    News: 4,
    Advertisements: 9,
    Results: 10,
  },
  {
    Sport: 'BASKETBALL',
    Photo: 'https://www.usab.com/~/media/a06ee0b5e5b040afb696c2423f033c32.ashx?as=1&iar=1',
    isNotification: false,
    News: 10,
    Advertisements: 3,
    Results: 1,
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <AsociacionCard
          navigation={navigation}
          Sport={item.Sport}
          Photo={item.Photo}
          isNotification={item.isNotification}
          News={item.News}
          Advertisements={item.Advertisements}
          Results={item.Results}
        />

      )}
      keyExtractor={(item) => item.id}
    />
    <Boton navigation={navigation} />
  </SafeAreaView>
)

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
}

export default Home
