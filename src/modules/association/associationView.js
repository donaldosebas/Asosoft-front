import React, { useState, useEffect } from 'react'
import {
  StyleSheet, ScrollView, Text, View,
} from 'react-native'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native-gesture-handler'
import NewsCarousel from './newsCarousel/newsCarousel'
import { margin } from '../../utils/stylesUtils'
import EventCard from './eventCard/eventCard'
import BestPlayers from '../bestPlayers/bestPlayers'
import IsSubscribed from '../shared/issubscribe/isSubscribed'
import { associationViewText } from '../../text/es.json'
import { fetchAssociationEvents, fetchNews } from '../../services/association.service'
import { EventMapper } from '../../utils/events.mapper'
import { EVENT_TYPE } from '../../utils/types'

const styles = StyleSheet.create({
  title: {
    ...margin(20, 0, 10, 25),
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const players = [
  {
    id: 1,
    position: '1st',
    name: 'Esteban Vizcaíno',
    image: 'https://i1.wp.com/antorchadeportiva.com/wp-content/uploads/2014/04/1340-2-Columbia-Blue-14.jpg?fit=250%2C360&ssl=1',
  },
]

const AssociationView = ({ route, navigation }) => {
  const { isSubscribed } = route.params
  const { id } = route.params
  const [news, setNews] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [currentEvents, setCurrentEvents] = useState([])
  const [futureEvents, setFutureEvents] = useState([])

  const fetchAssociation = async () => {
    fetchNews(id).then((data) => {
      setNews(data)
    })
    fetchAssociationEvents(id, EVENT_TYPE.PAST).then((data) => {
      setPastEvents(data.map((event) => EventMapper(event)))
    })
    fetchAssociationEvents(id, EVENT_TYPE.CURRENT).then((data) => {
      setCurrentEvents(data.map((event) => EventMapper(event)))
    })
    fetchAssociationEvents(id, EVENT_TYPE.FUTURE).then((data) => {
      setFutureEvents(data.map((event) => EventMapper(event)))
    })
  }

  useEffect(() => {
    fetchAssociation()
  }, [])

  return (
    <View>
      <IsSubscribed isSubscribed={isSubscribed} />
      <ScrollView>
        { news.length > 0 && <NewsCarousel data={news} /> }
        {
          currentEvents.length > 0
            ? (
              <>
                <Text style={styles.title}>{associationViewText.currentEventsTitle}</Text>
                <FlatList
                  data={currentEvents}
                  horizontal
                  renderItem={({ item }) => (
                    <EventCard event={item} navigation={navigation} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            )
            : null
        }
        {
          futureEvents.length > 0
            ? (
              <>
                <Text style={styles.title}>{associationViewText.postEventsTitle}</Text>
                <FlatList
                  data={futureEvents}
                  horizontal
                  renderItem={({ item }) => (
                    <EventCard event={item} navigation={navigation} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            )
            : null
        }
        {
          pastEvents.length > 0
            ? (
              <>
                <Text style={styles.title}>{associationViewText.pastEventsTitle}</Text>
                <FlatList
                  data={pastEvents}
                  horizontal
                  renderItem={({ item }) => (
                    <EventCard event={item} navigation={navigation} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            )
            : null
        }
        <Text style={styles.title}>{associationViewText.topPlayersTitle}</Text>
        <FlatList
          data={players}
          horizontal
          renderItem={({ item }) => (
            <BestPlayers player={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  )
}

AssociationView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isSubscribed: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
}

export default AssociationView
