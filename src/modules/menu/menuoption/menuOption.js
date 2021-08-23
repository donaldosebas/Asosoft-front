import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import styles from './menuOption.style'
import { logout } from '../../../services/login.service'
import provider from '../../../store/StoreProvider'

const MenuOption = ({ icon, option }) => {
  const { dispatch } = useContext(provider)

  const onPress = (func) => {
    switch (func) {
      case 'logout':
        logout()
        dispatch({ type: 'LOGOUT' })
        break
      default:
        break
    }
  }

  return (
    <TouchableOpacity onPress={() => onPress(option)} style={styles.container}>
      <IconIonic
        name={icon}
        style={{ color: '#1B9CC4', fontSize: 20 }}
      />
      <Text style={styles.title}>{option}</Text>
    </TouchableOpacity>
  )
}

MenuOption.propTypes = {
  icon: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
}

export default MenuOption
