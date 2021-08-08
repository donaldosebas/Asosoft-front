import { TeamMapper } from './events.mapper'

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
