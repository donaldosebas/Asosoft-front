import React, { useReducer, useEffect } from 'react'
import MainNavigation from './src/navigation/MainNavigation'
import reducer from './src/store/Reducer'
import StoreProviderContext from './src/store/StoreProvider'
import { getToken } from './src/services/login.service'

const value = {
  token: '',
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

  return (
    <StoreProviderContext.Provider value={{ store, dispatch }}>
      <MainNavigation />
    </StoreProviderContext.Provider>
  )
}
export default App
