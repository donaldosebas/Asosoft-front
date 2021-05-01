import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    width: '100%',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    backgroundColor: 'blue',
  },
  image: {
    width: '50%',
    height: 280,
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    height: 280,
    width: '40%',
  },
})

const AsociacionHomeCard = ({
  Sport,
  Photo,
  isNotification,
  News,
  Advertisements,
  Results,
}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: 'https://www.guatemala.com/fotos/2020/02/jd-morales.jpg' }}
    />
    <View style={styles.information}>
      <Icon name="ios-notifications-outline" size={30} />
    </View>
  </View>
)
export default AsociacionHomeCard
