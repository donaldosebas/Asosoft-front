import { apiUrl } from './commons'

export const createUser = async (user, name, emailr, pass) => {
  const response = await fetch(`${apiUrl}api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user,
      password: pass,
      first_name: name,
      last_name: name,
      email: emailr,
    }),
  })
  return response.json()
}

export const getUsers = async (token) => {
  const response = await fetch(`${apiUrl}api/users/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
  return response.json()
}
