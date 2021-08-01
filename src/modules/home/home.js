/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native'
import AsociacionCard from './asociacionCard/asociacionHomeCard'
import { fetchHomeItems, fetchHomeItemsDetails } from '../../services/home.service'
import { imagesUrl } from '../../services/commons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Home = () => {
  const [associations, setAssociations] = useState({})
  const [associationsDetails, setAssociationsDetails] = useState('')

  const fetchItems = async () => {
    setAssociations(await fetchHomeItems())
    setAssociationsDetails(await fetchHomeItemsDetails())
  }

  useEffect(() => {
    fetchItems()
  }, [])

  if (associationsDetails === '' || associations === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>isLoading</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={associations}
        renderItem={({ item }) => {
          const id = item.id.toString()
          return (
            <AsociacionCard
              key={id}
              sport={associationsDetails[id].sport}
              photo={`${imagesUrl}${associationsDetails[id].photo}`}
              isSubscribed={true}
              news={associationsDetails[id].news}
              results={associationsDetails[id].results}
            />
          )
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default Home
