import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import NotificationIcon from '../customIcons/notificationIcon'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 260,
    width: '100%',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  image: {
    width: '50%',
    height: 240,
    borderRadius: 10,
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 240,
    width: '40%',
  },
  notificationsTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
  },
  recentTitle: {
    fontSize: 10,
  },
  notificationsTitle: {
    fontSize: 20,
    marginRight: 10,
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'row',
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
  Sport,
  Photo,
  isSubscribed,
  News,
  Advertisements,
  Results,
  navigation,
}) => (
  // TODO: Debe enviar el objeto completo de association en el navigate
  <TouchableOpacity onPress={() => navigation.navigate('Association', {
    association: { isSubscribed }, // TODO: Y todos los demas parametros
  })}
  >
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: Photo }}
      />
      <View style={styles.information}>
        <IconIonic
          name="ios-notifications-outline"
          style={isSubscribed ? styles.notificationIconActive : styles.notificationIconDeactive}
        />
        <Text style={styles.title}>{Sport}</Text>
        <Text style={styles.recentTitle}>Reciente:</Text>
        <View style={styles.notificationsTitleContainer}>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationsTitle}>Noticias</Text>
            <NotificationIcon number={News} />
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationsTitle}>Anuncios</Text>
            <NotificationIcon number={Advertisements} />
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationsTitle}>Resultados</Text>
            <NotificationIcon number={Results} />
          </View>
        </View>
      </View>
      <IconAnt name="right" size={30} />
    </View>
  </TouchableOpacity>
)
export default AsociacionHomeCard
