import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native'
import PropTypes from 'prop-types'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import CheckToggle from '../shared/inputs/checkToggle'
import SimpleButton from '../shared/inputs/simpleButton'
import { authUser, setToken } from '../../services/login.service'
import AppContext from '../../store/StoreProvider'
import { CustomTextInput, Types } from '../shared/inputs/textInput'
import { loginText } from '../../text/es.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '70%',
  },
  optionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
  },
  optionIcon: {
    transform: [{ scale: 1.7 }],
    margin: 10,
    color: '#7C7C7C',
  },
  linkContainer: {
    marginTop: 30,
  },
  link: {
    color: '#1B9CC4',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF0000',
  },
})

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState(undefined)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isEnabledButton, setIsEnabledButton] = useState(false)
  const { dispatch } = useContext(AppContext)

  const authorization = async () => {
    setIsLoading(true)
    await authUser(user.username, user.password)
      .then((data) => {
        if (data.non_field_errors) {
          if (data.non_field_errors.includes('Unable to log in with provided credentials.')) {
            setError('Usuario y contraseña no coinciden.')
          } else {
            setError(data.non_field_errors)
          }
        }
        if (data.token) {
          dispatch({ type: 'LOGIN', token: data.token })
          navigation.navigate('Menu')
        }
        if (rememberMe) setToken(data.token)
      })
      .catch(() => {
        setError(loginText.loginError)
        setIsLoading(false)
      })
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text>{loginText.loginTitle}</Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          title={loginText.usernameInput}
          name="username"
          value={user.username}
          onChangeText={(newValue) => {
            setUser((old) => ({ ...old, username: newValue }))
            if (user.username.length > 0 && user.password.length > 0) {
              setIsEnabledButton(true)
            } else {
              setIsEnabledButton(false)
            }
          }}
          type={Types.USERNAME}
        />
        <CustomTextInput
          title={loginText.passwordInput}
          name="password"
          value={user.password}
          onChangeText={(newValue) => {
            setUser((old) => ({ ...old, password: newValue }))
            if (user.username.length > 0 && user.password.length > 0) {
              setIsEnabledButton(true)
            } else {
              setIsEnabledButton(false)
            }
          }}
          type={Types.PASSWORD}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Pressable
          onPress={() => setRememberMe((old) => !old)}
          style={styles.optionContainer}
        >
          <CheckToggle toggled={rememberMe} />
          <Text>{loginText.rememberMe}</Text>
        </Pressable>
        <Pressable
          style={styles.optionContainer}
        >
          <IconAntDesign name="questioncircleo" style={styles.optionIcon} />
          <Text>{loginText.forgotPassword}</Text>
        </Pressable>
      </View>
      <SimpleButton
        title={loginText.action}
        onPress={authorization}
        isLoading={isLoading}
        enabled={isEnabledButton}
      />
      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={styles.linkContainer}
      >
        <Text style={styles.link}>{loginText.goToSignup}</Text>
      </Pressable>
    </View>
  )
}

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
}

export default Login
