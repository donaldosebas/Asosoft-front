import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../views/home'
import Sport from '../views/Sport'
import playerProfile from '../views/playerProfile'

const Stack = createStackNavigator()

const UserNavigationStack = () => (
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
)

const Drawer = createDrawerNavigator()

const UserNavigationDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={UserNavigationStack} />
  </Drawer.Navigator>
)

const UserNavigation = () => (
  <NavigationContainer>
    <UserNavigationDrawer />
  </NavigationContainer>
)
export default UserNavigation
