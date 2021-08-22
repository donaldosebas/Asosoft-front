import { AssociationMapper } from './association.mapper'

export const TeamMapper = (team) => ({
  id: team.id,
  image: team.team_image,
  title: team.team_name,
  description: team.team_description,
  isSubscribed: team?.is_subscribed || false,
})

export const EventMapper = (event) => ({
  id: event.id,
  image: event?.image || 'https://i.pinimg.com/474x/16/84/07/16840716d53d268432071001903fe2a0.jpg',
  title: event.tournament_name || 'No definido',
  category: event.tournament_category || 'No definido',
  actualJourney: event?.current_date || 0,
  totalJourneys: event?.total_dates || null,
  sede: event?.tournament_country || null,
  winner: event?.winner || event?.tournament_winner || '',
  startDate: event?.start_date || '2021-01-01',
  endDate: event?.end_date || '2021-12-31',
  isSubscribed: event?.is_subscribed || false,
  association: event?.association && AssociationMapper(event?.association),
  teams: event?.teams && event?.teams.map((team) => TeamMapper(team)),
})

export const TeamFinishedMatchMapper = (team) => ({
  ...TeamMapper(team),
  players: team.players, // TODO: mapear segun la propiedad que venga del api
  summary: team.summary, // TODO: mapear segun la propiedad que venga del api
})

export const EventInfoMapper = (event) => ({
  ...EventMapper(event),
  teams: event.teams.map((team) => TeamMapper(team)),
})

export const MatchesMapper = (match) => ({
  id: match.id,
  local: TeamMapper(match.local_team),
  visit: TeamMapper(match.visiting_team),
  localScore: match.local_score,
  visitScore: match.visiting_score,
  journey: match?.journey || 0,
  date: match?.start_time || '2021-01-01',
  time: match?.start_time || '00:00',
  stadium: match?.stadium || 'Estadio no definido',
  price: match?.price || 'precio no definido',
})
