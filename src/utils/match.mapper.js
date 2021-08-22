import { EventMapper, TeamFinishedMatchMapper, TeamMapper } from './events.mapper'
import { MATCHES_TYPE, MATCH_TYPE } from './types'

// TODO: completar con las propiedades de matchDescription.js
export const MatchMapper = (match) => ({
  id: match.id,
  local: TeamMapper(match.local_team),
  visit: TeamMapper(match.visiting_team),
  localScore: match?.local_score || null,
  visitScore: match?.visiting_score || null,
  journey: match.journey,
  date: match.match_date,
  time: match.start_time,
  endTime: match.end_time,
  stadium: match.match_place,
  price: match?.access_ticket || 0,
})

export const MatchInfoMapper = (match) => ({
  id: match.id,
  local: TeamFinishedMatchMapper(match.local_team),
  visit: TeamFinishedMatchMapper(match.visiting_team),
  localScore: match?.local_score || null,
  visitScore: match?.visiting_score || null,
  time: match.start_time,
  estimateEndTime: match.end_time,
  stadium: match.match_place,
  price: match?.access_ticket.toString() || '',
  parking: match?.match_parking || '',
  date: match.match_date,
  journey: match.journey,
  // TODO: transmissions podrian venir como un array desde el api
  transmissions: [
    {
      platform: 'facebook',
      link: match.facebook_link,
    },
    {
      platform: 'youtube',
      link: match.youtube_link,
    },
  ],
  type: match?.match_type || MATCH_TYPE.UNKNOWN,
  event: EventMapper(match.tournament),
})

export const MatchesToMatchTypeMapper = (type) => {
  switch (type) {
    case MATCHES_TYPE.NEXT:
      return MATCH_TYPE.UPCOMING
    case MATCHES_TYPE.PAST:
      return MATCH_TYPE.FINISHED
    default:
      return MATCH_TYPE.UNKNOWN
  }
}
