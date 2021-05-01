import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../views/home'
import Sport from '../views/Sport'
import playerProfile from '../views/playerProfile'

const Stack = createStackNavigator()

const UserNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Sport"
        component={Sport}
      />
      <Stack.Screen
        name="Player"
        component={playerProfile}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
export default UserNavigation
