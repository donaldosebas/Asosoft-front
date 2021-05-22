import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import TeamVersusHeader from '../components/teamVersus'
import TransmissionInfo from '../components/transmissionInfo'
import MatchInfo from '../components/matchInfo'
import TeamsShowdown from '../components/teamsShowdown'

const styles = StyleSheet.create({
  container: {
  },
})

const playerStyles = StyleSheet.create({
  containerLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerRight: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  number: {
    width: 30,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1B9CC4',
  },
})

const summaryStyles = StyleSheet.create({
  containerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  containerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
  },
  data: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
    color: '#1B9CC4',
  },
})

const MatchDescription = ({ route }) => {
  const { match } = route.params
  const { event } = route.params

  const Player = ({ number, name, side }) => (
    <View style={(side === 'left') ? playerStyles.containerLeft : playerStyles.containerRight}>
      <Text style={playerStyles.number}>{number}</Text>
      <Text>{name}</Text>
    </View>
  )

  Player.propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
  }

  const TeamSummary = ({ title, data, side }) => (
    <View style={(side === 'left') ? summaryStyles.containerLeft : summaryStyles.containerRight}>
      <Text style={summaryStyles.title}>{title}</Text>
      <Text style={summaryStyles.data}>{data}</Text>
    </View>
  )

  TeamSummary.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TeamVersusHeader
            eventLabel={`${event.title} - ${event.category} - Jornada: ${match.journey}`}
            match={match}
          />
          <MatchInfo match={match} showExtraInfo={match.localScore === null} />
          {
            (match.localScore === null)
              ? (
                <TransmissionInfo transmissions={match.transmissions} />
              )
              : (
                <>
                  <TeamsShowdown
                    title="Jugadores"
                    localTitle={match.local.title}
                    localData={(
                      <View>
                        {
                          match.local.players.map((player) => (
                            <Player
                              key={player.number.toString()}
                              number={player.number.toString()}
                              name={player.name}
                              side="left"
                            />
                          ))
                        }
                      </View>
                    )}
                    visitTitle={match.visit.title}
                    visitData={(
                      <View>
                        {
                          match.visit.players.map((player) => (
                            <Player
                              key={player.number.toString()}
                              number={player.number.toString()}
                              name={player.name}
                              side="right"
                            />
                          ))
                        }
                      </View>
                    )}
                  />
                  <TeamsShowdown
                    title="Resumen"
                    localTitle={match.local.title}
                    localData={(
                      <View>
                        {
                          match.local.summary.map((item) => (
                            <TeamSummary key={item.title} title={item.title} data={item.data} side="left" />
                          ))
                        }
                      </View>
                    )}
                    visitTitle={match.visit.title}
                    visitData={(
                      <View>
                        {
                          match.visit.summary.map((item) => (
                            <TeamSummary key={item.title} title={item.title} data={item.data} side="right" />
                          ))
                        }
                      </View>
                    )}
                  />
                </>
              )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

MatchDescription.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }),
      match: PropTypes.shape({
        local: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
          players: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            name: PropTypes.string,
          })),
          summary: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            data: PropTypes.string,
          })),
        }),
        visit: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
          players: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            name: PropTypes.string,
          })),
          summary: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            data: PropTypes.string,
          })),
        }),
        localScore: PropTypes.number,
        visitScore: PropTypes.number,
        journey: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
        stadium: PropTypes.string,
        price: PropTypes.string,
        parking: PropTypes.string,
        transmissions: PropTypes.arrayOf(PropTypes.shape({
          paltform: PropTypes.string,
          link: PropTypes.string,
        })),
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default MatchDescription
