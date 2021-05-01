import React, { useReducer } from 'react'
import UserNavigation from './src/navigation/UserNavigation'
import LoginNavigation from './src/navigation/LoginNavigation'
import reducer from './src/store/Reducer'
import StoreProviderContext from './src/store/StoreProvider'
//trys
import As from './src/components/asociacionHomeCard'

const value = {
  type: 'USER',
}

const App = () => {
  const [store, dispatch] = useReducer(reducer, value)
  const Navigation = () => {
    switch (store.type) {
      case 'USER':
        return <As />
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
