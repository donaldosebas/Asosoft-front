import AsyncStorage from '@react-native-async-storage/async-storage'
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

export const setToken = async (token) => {
  try {
    return await AsyncStorage.setItem('token', token)
  } catch (err) {
    return err
  }
}

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token')
  } catch (err) {
    return err
  }
}
