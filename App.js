import React, { useReducer } from 'react'
import UserNavigation from './src/navigation/UserNavigation'
import LoginNavigation from './src/navigation/LoginNavigation'
import reducer from './src/store/Reducer'
import StoreProviderContext from './src/store/StoreProvider'

const value = {
  type: 'USER',
}

const App = () => {
  const [store, dispatch] = useReducer(reducer, value)
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
