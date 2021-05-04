import React from 'react'
import {
  StyleSheet, ScrollView, View, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler'
import NewsCarousel from '../components/newsCarousel'
import { margin } from '../utils/stylesUtils'
import EventCard from '../components/eventCard'
import BestPlayers from '../components/bestPlayers'

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  notificationIconActive: {
    color: '#1B9CC4',
  },
  notificationIconDeactive: {
    color: 'grey',
  },
  title: {
    ...margin(20, 0, 10, 25),
    fontSize: 20,
    fontWeight: 'bold',
  },
})

// TODO: Estas noticias vienen en el objeto association
const notices = [
  {
    title: 'Noticia 1',
    image: 'https://lh3.googleusercontent.com/proxy/xnlc6Yc6mM2Ap_ovzaEIwZ6d4FKOWPVmXCTTmcSCiOk7Nck5eSqzyCaB_HkNhoCJQrmY6ElrIaGVw7tiHmXp_JiIH3KYnPhh7mcuteMCPQlM1A7H_AJdGKl3',
    preview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    title: 'Noticia 2',
    image: 'http://cdag.com.gt/wp-content/uploads/2014/09/ca3.jpg',
    preview: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
  {
    title: 'Noticia 3',
    image: 'https://static.wbsc.org/assets/cms/e64e1bb2-3a7e-b468-2be4-d82392a3d3d5.jpg',
    preview: 'There are many variations of passages of Lorem Ipsum available.',
  },
]

const actualEvents = [
  {
    id: 1,
    image: 'https://i.pinimg.com/474x/16/84/07/16840716d53d268432071001903fe2a0.jpg',
    title: 'Torneo 2021',
    category: 'Masculino Mayor A',
    actualJourney: 12,
    totalJourneys: 30,
    endDate: '28-10-2021',
  }, {
    id: 2,
    image: 'https://i.pinimg.com/474x/16/84/07/16840716d53d268432071001903fe2a0.jpg',
    title: 'Torneo 2021',
    category: 'Femenino Mayor A',
    actualJourney: 12,
    totalJourneys: 30,
    endDate: '28-10-2021',
  },
]

const nextEvents = [
  {
    id: 1,
    image: 'https://static.wbsc.org/assets/cms/ee2526f1-56b4-4bbb-bcd5-187b5f0ed8d4.jpg',
    title: 'Torneo 2021',
    category: 'Masculino',
    sede: 'Auckland, Nueva Zelanda',
    startDate: '28-10-2021',
  }, {
    id: 2,
    image: 'http://static.wbsc.org/wp-content/uploads/wbsc_u-19_flat_cmyk_small.jpg',
    title: 'Torneo 2021',
    category: 'Femenino Sub 19',
    sede: 'Irvine, USA',
    startDate: '28-10-2021',
  },
]

const pastEvents = [
  {
    id: 1,
    image: 'https://i.pinimg.com/474x/16/84/07/16840716d53d268432071001903fe2a0.jpg',
    title: 'Torneo 2020',
    category: 'Masculino Mayor A',
    winner: 'Equipo Ganador',
    endDate: '28-10-2020',
  }, {
    id: 2,
    image: 'https://i.pinimg.com/474x/16/84/07/16840716d53d268432071001903fe2a0.jpg',
    title: 'Torneo 2021',
    category: 'Femenino Mayor A',
    winner: 'Equipo Ganador',
    endDate: '28-10-2020',
  },
]

const players = [
  {
    id: 1,
    position: '1st',
    name: 'Juan Trejo',
    image: 'https://www.asosoft.org/assets/images/website/masculino_1.jpg',
  },
]

const AssociationView = ({ route }) => {
  const { association } = route.params
  return (
    <ScrollView>
      <View style={styles.notificationContainer}>
        <IconIonic
          name="ios-notifications-outline"
          style={[
            // eslint-disable-next-line max-len
            association.isNotification ? styles.notificationIconActive : styles.notificationIconDeactive,
            { transform: [{ scale: 2 }], margin: 3 },
          ]}
        />
        <Text style={{ marginLeft: 15 }}>{association.isNotification ? 'Estas suscrito a esta asociacion' : 'Suscribete a esta asociacion para recibir notificaciones'}</Text>
      </View>
      <NewsCarousel data={notices} />
      <Text style={styles.title}>Eventos en curso</Text>
      <FlatList
        data={actualEvents}
        horizontal
        renderItem={({ item }) => (
          <EventCard data={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.title}>Próximos Eventos</Text>
      <FlatList
        data={nextEvents}
        horizontal
        renderItem={({ item }) => (
          <EventCard data={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.title}>Eventos Pasados</Text>
      <FlatList
        data={pastEvents}
        horizontal
        renderItem={({ item }) => (
          <EventCard data={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.title}>Jugadores Destacados</Text>
      <FlatList
        data={players}
        horizontal
        renderItem={({ item }) => (
          <BestPlayers player={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  )
}

AssociationView.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      association: PropTypes.shape({
        isNotification: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default AssociationView
