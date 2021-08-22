import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../modules/menu/menu'
import Login from '../modules/login/Login'
import Signup from '../modules/signup/signup'

const Stack = createStackNavigator()

const LoginStackNavigation = () => (
  <Stack.Navigator initialRouteName="Menu">
    <Stack.Screen
      name="Menu"
      component={Menu}
    />
    <Stack.Screen
      name="Login"
      component={Login}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
    />
  </Stack.Navigator>
)

export default LoginStackNavigation
