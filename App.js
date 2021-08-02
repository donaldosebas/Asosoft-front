import React, { useReducer, useEffect } from 'react'
import UserNavigation from './src/navigation/UserNavigation'
import LoginNavigation from './src/navigation/LoginNavigation'
import reducer from './src/store/Reducer'
import StoreProviderContext from './src/store/StoreProvider'
import { getToken } from './src/services/login.service'

const value = {
  type: 'LOGIN',
}

const App = () => {
  const [store, dispatch] = useReducer(reducer, value)

  const verifyToken = async () => {
    await getToken()
      .then((token) => {
        dispatch({ type: 'TOKEN', token })
      })
  }

  useEffect(() => {
    verifyToken()
  }, [])

  const Navigation = () => {
    switch (store.type) {
      case 'USER':
        return <UserNavigation />
      default:
        return <LoginNavigation />
    }
  }
  return (
    <StoreProviderContext.Provider value={{ store, dispatch }}>
      <Navigation />
    </StoreProviderContext.Provider>
  )
}
export default App
