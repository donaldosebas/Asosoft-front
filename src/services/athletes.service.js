import { apiUrl } from './commons'
import { getToken } from './login.service'

// TODO: la url debe cambiar en el api, pedir match_id
export const fetchMatchPlayers = async (localId, visitingId) => {
  const token = await getToken()
  const url = `${apiUrl}api/athletes/match_players?local_id=${localId}&visiting_id=${visitingId}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  const data = await response.json()
  return data
}
