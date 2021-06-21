import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native'
import AsociacionCard from '../components/asociacionHomeCard'

const data = [
  {
    id: 1,
    Sport: 'SOFTBOL',
    Photo: 'https://scontent.fgua9-1.fna.fbcdn.net/v/t1.6435-9/69361977_10157182589816777_621699724436570112_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=KaQSFbOWgA8AX97rzku&_nc_oc=AQkuoVV-jvALKNfKwPXh7kcs1y_SjqK8IBiUAnf3ZP3ErxWd_xO6t3IIJnH5gKe6XTQ&tn=cLHFj1pnGDJ0nWAH&_nc_ht=scontent.fgua9-1.fna&oh=0c5e30133d4e3261f078f1d505eed577&oe=60D62BCC',
    isSubscribed: true,
    News: 4,
    Advertisements: 9,
    Results: 10,
  },
  {
    id: 2,
    Sport: 'BASKETBALL',
    Photo: 'https://fnbg.com.gt/wp-content/uploads/2020/07/Rodrigo-Oliva-Guatemala.jpg',
    isSubscribed: false,
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

const Home = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <AsociacionCard
          sport={item.Sport}
          photo={item.Photo}
          isSubscribed={item.isSubscribed}
          news={item.News}
          advertisements={item.Advertisements}
          results={item.Results}
        />

      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </SafeAreaView>
)

export default Home
