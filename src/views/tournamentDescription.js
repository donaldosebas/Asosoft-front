import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/core'
import IconIonic from 'react-native-vector-icons/Ionicons'
import IsSubscribed from '../components/common/isSubscribed'
import { margin } from '../utils/stylesUtils'
import TeamCircle from '../components/common/teamCircle'
import Match from '../components/matchs/match'

const styles = StyleSheet.create({
  container: {
  },
  infoContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 15,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
  titleLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    ...margin(20, 0, 10, 25),
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkAll: {
    color: '#1B9CC4',
    margin: 20,
    top: 5,
    fontWeight: 'bold',
  },
  notificationIcon: {
    transform: [{ scale: 1.5 }],
    margin: 5,
  },
  notificationIconActive: {
    color: '#1B9CC4',
  },
  notificationIconDeactive: {
    color: 'grey',
  },
})

const TournamentDescription = ({ route }) => {
  const { event } = route.params
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <IsSubscribed isSubscribed={event.isSubscribed} />
      <ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.category}>{event.category}</Text>
          <Image style={styles.image} source={{ uri: event.image }} />
          <View style={styles.iconTextContainer}>
            <IconIonic
              name="pin"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{event.sede}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <IconIonic
              name="flag"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{`Jornada ${event.actualJourney} de ${event.totalJourneys}`}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <IconIonic
              name="calendar"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{`Del ${event.startDate} al ${event.endDate}`}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Equipos</Text>
        <FlatList
          data={event.teams}
          horizontal
          renderItem={({ item }) => (
            <TeamCircle team={item} />
          )}
          keyExtractor={(team) => team.id.toString()}
        />
        {
          (event.matches.filter((match) => (
            Date.parse(`${match.date.split('-')[2]}-${match.date.split('-')[1]}-${match.date.split('-')[0]}`) > Date.now()
          )).length !== 0)
          && (
            <>
              <View style={styles.titleLinkContainer}>
                <Text style={styles.sectionTitle}>Encuentros Futuros</Text>
                <Text
                  style={styles.linkAll}
                  onPress={() => navigation.navigate('Matches', {
                    event,
                    matches: event.matches.filter((match) => (
                      Date.parse(`${match.date.split('-')[2]}-${match.date.split('-')[1]}-${match.date.split('-')[0]}`) > Date.now()
                    )),
                  })}
                >
                  Ver todos
                </Text>
              </View>
              <FlatList
                data={event.matches.filter((match) => (
                  Date.parse(`${match.date.split('-')[2]}-${match.date.split('-')[1]}-${match.date.split('-')[0]}`) > Date.now()
                ))}
                horizontal
                renderItem={({ item }) => (
                  <Match match={item} event={event} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )
        }
        {
          (event.matches.filter((match) => (
            Date.parse(`${match.date.split('-')[2]}-${match.date.split('-')[1]}-${match.date.split('-')[0]}`) < Date.now()
          )).length !== 0)
          && (
          <>
            <View style={styles.titleLinkContainer}>
              <Text style={styles.sectionTitle}>Resultados</Text>
              <Text
                style={styles.linkAll}
                onPress={() => navigation.navigate('Matches', {
                  event,
                  matches: event.matches.filter((match) => (
                    Date.parse(`${match.date.split('-')[2]}-${match.date.split('-')[1]}-${match.date.split('-')[0]}`) < Date.now()
                  )),
                })}
              >
                Ver todos
              </Text>
            </View>
            <FlatList
              data={event.matches.filter((match) => (
                Date.parse(`${match.date.split('-')[2]}-${match.date.split('-')[1]}-${match.date.split('-')[0]}`) < Date.now()
              ))}
              horizontal
              renderItem={({ item }) => (
                <Match match={item} event={event} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
          )
        }
      </ScrollView>
    </View>
  )
}

TournamentDescription.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        actualJourney: PropTypes.number,
        totalJourneys: PropTypes.number,
        sede: PropTypes.string,
        winner: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        isSubscribed: PropTypes.bool,
        teams: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
        })),
        matches: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          local: PropTypes.shape,
          visit: PropTypes.shape,
          localScore: PropTypes.number,
          visitScore: PropTypes.number,
          journey: PropTypes.number,
          date: PropTypes.string,
          time: PropTypes.string,
          stadium: PropTypes.string,
          price: PropTypes.string,
        })),
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default TournamentDescription
