import React, { useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './menu.style'
import globals from '../shared/globals'
import { menu } from '../../text/es.json'
import menuOptions from './menu-options.json'
import provider from '../../store/StoreProvider'
import MenuOption from './menuoption/menuOption'

const Menu = ({ navigation }) => {
  const { store } = useContext(provider)
  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>
        <FlatList
          data={menuOptions.options}
          renderItem={({ item }) => {
            if (item.name === 'logout') {
              if (store.token) return <MenuOption icon={item.iconName} option={item.name} />
              return null
            }
            return <MenuOption icon={item.iconName} option={item.name} navigation={navigation} />
          }}
          keyExtractor={(option) => option.id.toString()}
        />
      </View>
      <View style={[styles.bottomContiner, { justifyContent: !store.token ? 'space-between' : 'flex-end' }]}>
        {!store.token && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonTitle}>
            {menu.login}
          </Text>
        </TouchableOpacity>
        )}
        <Text style={styles.versionText}>
          {menu.menuVersion + globals.appVersion}
        </Text>
      </View>
    </View>
  )
}

Menu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
}

export default Menu
