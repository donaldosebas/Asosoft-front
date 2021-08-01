import { apiUrl } from './commons'

export const fetchHomeItems = async () => {
  const response = await fetch(`${apiUrl}asociations/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}

export const fetchHomeItemsDetails = async () => {
  const response = await fetch(`${apiUrl}asociations/associations_info/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}
