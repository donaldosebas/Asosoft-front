import { apiUrl } from './commons'

export const fetchNews = async (association) => {
  const response = await fetch(`${apiUrl}api/news/association_news?association_id=${association}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}
