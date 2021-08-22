import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeNavigationStack from './HomeNavigation'
import LoginStackNavigation from './LoginNavigation'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ color, size }) => {
        let iconName

        if (route.name === 'HomeTab') {
          iconName = 'home-outline'
        } else if (route.name === 'MenuTab') {
          iconName = 'menu-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#1B9CC4',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeNavigationStack}
      options={{ headerShown: false, title: 'Home' }}
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
