import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../modules/home/home'
import playerProfile from '../modules/athleteprofile/playerProfile'
import tournamentDescription from '../modules/eventsDescription/tournamentDescription'
import AssociationView from '../modules/association/associationView'
import Matches from '../modules/matchs/matches'
import MatchDescription from '../modules/matchDescription/matchDescription'
import NewsView from '../modules/news/newsView'

const Stack = createStackNavigator()

const HomeNavigationStack = () => (
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
    <Stack.Screen
      name="News"
      component={NewsView}
    />
  </Stack.Navigator>
)

export default HomeNavigationStack
