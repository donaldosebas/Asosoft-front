import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import styles from './menuOption.style'
import { logout } from '../../../services/login.service'
import provider from '../../../store/StoreProvider'

// eslint-disable-next-line react/prop-types
const MenuOption = ({ icon, option, navigation }) => {
  const { dispatch } = useContext(provider)

  const onPress = (func) => {
    switch (func) {
      case 'logout':
        logout()
        dispatch({ type: 'LOGOUT' })
        break
      case 'Términos y condiciones':
        // eslint-disable-next-line react/prop-types
        navigation.navigate('Terms', {
        })
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
