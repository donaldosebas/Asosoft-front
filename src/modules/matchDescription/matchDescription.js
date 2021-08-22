import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import TeamVersusHeader from '../matchs/teamversus/teamVersus'
import TransmissionInfo from './transmissioninfo/transmissionInfo'
import MatchInfo from './matchinfo/matchInfo'
import TeamsShowdown from './teamsshowdown/teamsShowdown'
import { fetchMatch } from '../../services/match.service'
import { MatchInfoMapper } from '../../utils/match.mapper'

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
  const { match, event, type } = route.params
  // eslint-disable-next-line no-unused-vars
  const [matchInfo, setMatchInfo] = useState()

  const getMatchInfo = async () => {
    fetchMatch(match.id, type).then((data) => {
      const matchToMap = data[0]
      // eslint-disable-next-line max-len
      // TODO: temporalmente se usara data estatica para players y summary
      // TODO: nota: aqui no se deberia usar el formato local_team_id y visiting_team
      matchToMap.local_team = {
        ...matchToMap.local_team,
        players: [{ number: 1, name: 'Juan Perez' }, { number: 2, name: 'Pedro Perez' }],
        summary: [{ title: 'Bateos', data: '12' }, { title: 'Atrapadas', data: '15' }],
      }
      matchToMap.visiting_team = {
        ...matchToMap.visiting_team,
        players: [{ number: 5, name: 'Fernando Gonzalez' }, { number: 6, name: 'Luis Quezada' }],
        summary: [{ title: 'Bateos', data: '17' }, { title: 'Atrapadas', data: '11' }],
      }
      setMatchInfo(MatchInfoMapper(matchToMap))
    })
  }

  useEffect(() => {
    getMatchInfo()
  }, [])

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
            eventLabel={`${event.title} - ${event.category} - Jornada: ${(matchInfo && matchInfo?.journey) || match.journey}`}
            match={matchInfo || match}
          />
          <MatchInfo match={matchInfo || match} showExtraInfo={match.localScore === null} />
          {
            (match.localScore === null)
              ? (
                matchInfo?.transmissions
                && <TransmissionInfo transmissions={matchInfo?.transmissions} />
              )
              : (
                <>
                  <TeamsShowdown
                    title="Jugadores"
                    localTitle={matchInfo?.local?.title || match.local.title}
                    localData={(
                      <View>
                        {
                          matchInfo?.local?.players && matchInfo.local.players.map((player) => (
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
                    visitTitle={matchInfo?.visit?.title || match.visit.title}
                    visitData={(
                      <View>
                        {
                          matchInfo?.visit?.players && matchInfo.visit.players.map((player) => (
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
                    localTitle={matchInfo?.local?.title || match.local.title}
                    localData={(
                      <View>
                        {
                          matchInfo?.local?.summary && matchInfo.local.summary.map((item) => (
                            <TeamSummary key={item.title} title={item.title} data={item.data} side="left" />
                          ))
                        }
                      </View>
                    )}
                    visitTitle={matchInfo?.visit?.title || match.visit.title}
                    visitData={(
                      <View>
                        {
                          matchInfo?.visit?.summary && matchInfo.visit.summary.map((item) => (
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
      type: PropTypes.string.isRequired,
      event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }),
      match: PropTypes.shape({
        id: PropTypes.number.isRequired,
        local: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
          /* players: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            name: PropTypes.string,
          })),
          summary: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            data: PropTypes.string,
          })), */
        }),
        visit: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
          /* players: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            name: PropTypes.string,
          })),
          summary: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            data: PropTypes.string,
          })), */
        }),
        localScore: PropTypes.number,
        visitScore: PropTypes.number,
        journey: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
        stadium: PropTypes.string,
        price: PropTypes.string,
        /* parking: PropTypes.string,
        transmissions: PropTypes.arrayOf(PropTypes.shape({
          paltform: PropTypes.string,
          link: PropTypes.string,
        })), */
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default MatchDescription
