import { apiUrl } from './commons'

export const createUser = async (user, name, email, pass) => {
  const response = await fetch(`${apiUrl}users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user,
      name,
      email,
      password: pass,
    }),
  })
  return response.json()
}
