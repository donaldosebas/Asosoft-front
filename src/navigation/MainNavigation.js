import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeNavigationStack from './HomeNavigation'
import LoginStackNavigation from './LoginNavigation'
import NotificationsNavigationStack from './NotificationsNavigation'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ color, size }) => {
        let iconName

        if (route.name === 'HomeTab') {
          iconName = 'home-outline'
        } else if (route.name === 'NotificationsTab') {
          iconName = 'notifications-outline'
        } else if (route.name === 'MenuTab') {
          iconName = 'menu-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#1B9CC4',
      tabBarInactiveTintColor: 'gray',
      tabBarItemStyle: {
        paddingBottom: 10,
        paddingTop: 10,
      },
      tabBarStyle: {
        height: 60,
      },
    })}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeNavigationStack}
      options={{ headerShown: false, title: 'Home' }}
    />
    <Tab.Screen
      name="NotificationsTab"
      component={NotificationsNavigationStack}
      options={{ headerShown: false, title: 'Notificaciones' }}
    />
    <Tab.Screen
      name="MenuTab"
      component={LoginStackNavigation}
      options={{ headerShown: false, title: 'Menu' }}
    />
  </Tab.Navigator>
)

const MainNavigation = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
)
export default MainNavigation
