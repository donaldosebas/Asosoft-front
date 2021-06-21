import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import NotificationIcon from '../customIcons/iconBadge/notificationIcon'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: 250,
    padding: 10,
  },
  image: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  information: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: 20,
    height: '100%',
    width: '40%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    zIndex: 1,
  },
  decoration: {
    width: 0,
    height: 0,
    bottom: 0,
    borderTopWidth: 230,
    borderTopColor: 'rgba(0,0,0,0.5)',
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    zIndex: 0,
  },
  notificationsTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  notificationsTitle: {
    fontSize: 16,
    marginRight: 10,
    color: 'white',
    marginLeft: 10,
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
    color: 'white',
  },
  notificationIconActive: {
    color: '#1B9CC4',
    fontSize: 30,
  },
  notificationIconDeactive: {
    color: 'grey',
    fontSize: 30,
  },
})

const AsociacionHomeCard = ({
  sport,
  photo,
  isSubscribed,
  news,
  advertisements,
  results,
}) => {
  const navigation = useNavigation()

  return (
    // TODO: Debe enviar el objeto completo de association en el navigate
    <TouchableOpacity onPress={() => navigation.navigate('Association', {
      association: { isSubscribed }, // TODO: Y todos los demas parametros
    })}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: photo }}
        />
        <View style={styles.information}>
          <View style={styles.notificationContainer}>
            <IconIonic
              name="ios-notifications-outline"
              style={isSubscribed ? styles.notificationIconActive : styles.notificationIconDeactive}
            />
            <Text style={styles.title}>{sport}</Text>
          </View>
          <View style={styles.notificationsTitleContainer}>
            <View style={styles.notificationContainer}>
              <NotificationIcon number={news} />
              <Text style={styles.notificationsTitle}>Noticias</Text>
            </View>
            <View style={styles.notificationContainer}>
              <NotificationIcon number={advertisements} />
              <Text style={styles.notificationsTitle}>Anuncios</Text>
            </View>
            <View style={styles.notificationContainer}>
              <NotificationIcon number={results} />
              <Text style={styles.notificationsTitle}>Resultados</Text>
            </View>
          </View>
        </View>
        <View style={styles.decoration} />
      </View>
    </TouchableOpacity>
  )
}

AsociacionHomeCard.propTypes = {
  sport: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  news: PropTypes.number.isRequired,
  advertisements: PropTypes.number.isRequired,
  results: PropTypes.number.isRequired,
}

export default AsociacionHomeCard
