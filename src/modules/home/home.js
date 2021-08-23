/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import AsociacionCard from './asociacionCard/asociacionHomeCard'
import { fetchHomeItems, fetchHomeItemsDetails } from '../../services/association.service'
import { imagesUrl } from '../../services/commons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Home = ({ navigation }) => {
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
              id={+id}
              sport={associationsDetails[id].sport}
              photo={`${imagesUrl}${associationsDetails[id].photo}`}
              isSubscribed={true}
              news={associationsDetails[id].news}
              results={associationsDetails[id].results}
              navigation={navigation}
            />
          )
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
}

export default Home
