import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Notifications from '../modules/notifications/notifications'

const Stack = createStackNavigator()

const NotificationsNavigationStack = () => (
  <Stack.Navigator initialRouteName="Notifications">
    <Stack.Screen
      name="Notifications"
      component={Notifications}
    />
  </Stack.Navigator>
)

export default NotificationsNavigationStack
