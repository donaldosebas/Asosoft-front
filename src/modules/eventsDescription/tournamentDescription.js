import React, { useState, useEffect } from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'
import { margin } from '../../utils/stylesUtils'
import TeamCircle from '../shared/teamCircle/teamCircle'
import Match from '../matchs/match/match'
import { fetchEventInfoAndTeams } from '../../services/event.service'
import { MATCHES_TYPE, MATCH_TYPE } from '../../utils/types'
import { EventInfoMapper, MatchesMapper } from '../../utils/events.mapper'
import { fetchEventMatches } from '../../services/match.service'

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

const TournamentDescription = ({ route, navigation }) => {
  const { event } = route.params
  const [eventInfo, setEventInfo] = useState(event)
  const [pastMatches, setPastMatches] = useState([])
  const [nextMatches, setNextMatches] = useState([])

  const getEventInfo = async (isMounted) => {
    if (!isMounted) return
    fetchEventInfoAndTeams(event.id).then((data) => {
      setEventInfo(EventInfoMapper(data[0]))
    })
    fetchEventMatches(event.id, MATCHES_TYPE.PAST).then((data) => {
      setPastMatches(data.map((match) => MatchesMapper(match)))
    })
    fetchEventMatches(event.id, MATCHES_TYPE.NEXT).then((data) => {
      setNextMatches(data.map((match) => {
        const mappedMatch = MatchesMapper(match)
        mappedMatch.localScore = null
        return mappedMatch
      }))
    })
  }

  useEffect(() => {
    let isMounted = true
    getEventInfo(isMounted)
    return () => { isMounted = false }
  }, [])

  return (
    <View style={styles.container}>
      {/* <IsSubscribed isSubscribed={eventInfo.isSubscribed} /> */}
      <ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{eventInfo.title}</Text>
          <Text style={styles.category}>{eventInfo.category}</Text>
          <Image style={styles.image} source={{ uri: eventInfo.image }} />
          <View style={styles.iconTextContainer}>
            <IconIonic
              name="pin"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{eventInfo.sede}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <IconIonic
              name="flag"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{`Jornada ${eventInfo.actualJourney} de ${eventInfo.totalJourneys}`}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <IconIonic
              name="calendar"
              style={{ margin: 5, color: '#1B9CC4' }}
            />
            <Text>{`Del ${eventInfo.startDate} al ${eventInfo.endDate}`}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Equipos</Text>
        <FlatList
          data={eventInfo.teams}
          horizontal
          renderItem={({ item }) => (
            <TeamCircle team={item} />
          )}
          keyExtractor={(team) => team.id.toString()}
        />
        {
          nextMatches.length !== 0
          && (
            <>
              <View style={styles.titleLinkContainer}>
                <Text style={styles.sectionTitle}>Encuentros Futuros</Text>
                <Text
                  style={styles.linkAll}
                  onPress={() => navigation.navigate('Matches', {
                    event,
                    type: MATCHES_TYPE.NEXT,
                  })}
                >
                  Ver todos
                </Text>
              </View>
              <FlatList
                data={nextMatches}
                horizontal
                renderItem={({ item }) => (
                  <Match
                    match={item}
                    event={eventInfo}
                    type={MATCH_TYPE.UPCOMING}
                    navigation={navigation}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )
        }
        {
          pastMatches.length !== 0
          && (
          <>
            <View style={styles.titleLinkContainer}>
              <Text style={styles.sectionTitle}>Resultados</Text>
              <Text
                style={styles.linkAll}
                onPress={() => navigation.navigate('Matches', {
                  event,
                  type: MATCHES_TYPE.PAST,
                })}
              >
                Ver todos
              </Text>
            </View>
            <FlatList
              data={pastMatches}
              horizontal
              renderItem={({ item }) => (
                <Match
                  match={item}
                  event={eventInfo}
                  type={MATCH_TYPE.FINISHED}
                  navigation={navigation}
                />
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
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
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
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default TournamentDescription
