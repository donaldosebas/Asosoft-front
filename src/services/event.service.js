import { apiUrl } from './commons'
import { getToken } from './login.service'

export const fetchAssociationEvents = async (id, type) => {
  const token = await getToken()
  const response = await fetch(`${apiUrl}api/tournaments/${type}?association_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  try {
    const data = await response.json()
    return data
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`Ha habido un error al obtener los eventos ${type}`)
    return []
  }
}

export const fetchEventInfoAndTeams = async (id) => {
  const token = await getToken()
  const response = await fetch(`${apiUrl}api/tournaments/event_info?event_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  const data = await response.json()
  return data
}
