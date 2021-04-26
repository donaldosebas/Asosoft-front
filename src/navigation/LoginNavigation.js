import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../views/Login'

const Stack = createStackNavigator()

const LoginNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={ Login }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default LoginNavigation
