import React, { useState, useContext } from 'react'
import {
  View, Text, StyleSheet, Pressable,
} from 'react-native'
import PropTypes from 'prop-types'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import CheckToggle from '../shared/inputs/checkToggle'
import SimpleButton from '../shared/inputs/simpleButton'
import AppContext from '../../store/StoreProvider'
import { createUser } from '../../services/signup.service'
import { setToken } from '../../services/login.service'
import { CustomTextInput, Types } from '../shared/inputs/textInput'
import { signupText } from '../../text/es.json'

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
    marginTop: 5,
  },
  optionIcon: {
    transform: [{ scale: 1.7 }],
    margin: 10,
    color: '#7C7C7C',
  },
  link: {
    color: '#1B9CC4',
    textDecorationLine: 'underline',
  },
})

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const { dispatch } = useContext(AppContext)

  const register = async () => {
    setIsLoading(true)
    await createUser(user.username, user.name, user.email, user.password)
      .then((data) => {
        if (data.non_field_errors) setError(data.non_field_errors)
        if (data.token) dispatch({ type: 'LOGIN', token: data.token })
        if (rememberMe) setToken(data.token)
      })
      .catch(() => {
        setError(signupText.signupError)
        setIsLoading(false)
      })
  }

  return (
    <View style={styles.container}>
      <Text>{signupText.signupTitle}</Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          title={signupText.usernameInput}
          name="username"
          value={user.username}
          onChangeText={(newValue) => setUser((old) => ({ ...old, username: newValue }))}
          type={Types.USERNAME}
        />
        <CustomTextInput
          title={signupText.nameInput}
          name="name"
          value={user.name}
          onChangeText={(newValue) => setUser((old) => ({ ...old, name: newValue }))}
          type={Types.USERNAME}
        />
        <CustomTextInput
          title={signupText.emailInput}
          name="email"
          value={user.email}
          onChangeText={(newValue) => setUser((old) => ({ ...old, email: newValue }))}
          type={Types.EMAIL}
        />
        <CustomTextInput
          title={signupText.passwordInput}
          name="password"
          value={user.password}
          onChangeText={(newValue) => setUser((old) => ({ ...old, password: newValue }))}
          type={Types.PASSWORD}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Pressable
          onPress={() => setRememberMe((old) => !old)}
          style={styles.optionContainer}
        >
          <CheckToggle toggled={rememberMe} />
          <Text>{signupText.rememberMe}</Text>
        </Pressable>
        <Pressable
          style={styles.optionContainer}
        >
          <IconAntDesign name="questioncircleo" style={styles.optionIcon} />
          <Text>{signupText.termsConditions}</Text>
        </Pressable>
      </View>
      <SimpleButton onPress={register} title={signupText.action} isLoading={isLoading} />
      <Pressable
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>{signupText.goToLogin}</Text>
      </Pressable>
    </View>
  )
}

Signup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
}

export default Signup
