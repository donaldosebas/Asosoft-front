import { apiUrl } from './commons'
import { getToken } from './login.service'

export const fetchEventMatches = async (id, type) => {
  const token = await getToken()
  const response = await fetch(`${apiUrl}api/matches/${type}?event_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  const data = await response.json()
  return data
}

export const fetchMatch = async (id, type) => {
  const token = await getToken()
  const response = await fetch(`${apiUrl}api/matches/${type}?match_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  const data = await response.json()
  return data
}

export const fetchMatches = async (id, type) => {
  const token = await getToken()
  const response = await fetch(`${apiUrl}api/matches/${type}?event_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  const data = await response.json()
  return data
}
