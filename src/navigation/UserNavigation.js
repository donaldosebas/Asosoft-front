import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../modules/home/home'
import playerProfile from '../modules/athleteprofile/playerProfile'
import tournamentDescription from '../modules/eventsDescription/tournamentDescription'
import AssociationView from '../modules/association/associationView'
import Matches from '../modules/matchs/matches'
import MatchDescription from '../modules/matchDescription/matchDescription'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const UserNavigationStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
    />
    <Stack.Screen
      name="Player"
      component={playerProfile}
    />
    <Stack.Screen
      name="Association"
      component={AssociationView}
    />
    <Stack.Screen
      name="Tournament"
      component={tournamentDescription}
    />
    <Stack.Screen
      name="Matches"
      component={Matches}
    />
    <Stack.Screen
      name="Match Description"
      component={MatchDescription}
    />
  </Stack.Navigator>
)

const UserNavigationTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeTab"
      component={UserNavigationStack}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
)

const UserNavigation = () => (
  <NavigationContainer>
    <UserNavigationTab />
  </NavigationContainer>
)
export default UserNavigation
