import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../views/Home'

const Stack = createStackNavigator()

const UserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ Home }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default UserNavigation