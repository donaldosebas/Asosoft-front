import AsyncStorage from '@react-native-async-storage/async-storage'
import { apiUrl } from './commons'

export const authUser = async (user, pass) => {
  const response = await fetch(`${apiUrl}auth/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: user, password: pass }),
  })
  return response.json()
}

// TODO GET TOKEN FUNCTION
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
