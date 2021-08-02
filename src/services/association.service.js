import { apiUrl } from './commons'
import { getToken } from './login.service'

export const fetchNews = async (id) => {
  const token = await getToken()
  const response = await fetch(`${apiUrl}api/news/association_news?association_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  const data = await response.json()
  return data
}
