import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import {
  View, Text, StyleSheet, Pressable,
} from 'react-native'
import { CustomTextInput, Types } from '../components/textInput'
import { loginText } from '../text/es.json'

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
  link: {
    color: '#1B9CC4',
    textDecorationLine: 'underline',
  },
})

const Login = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  return (
    <View style={styles.container}>
      <Text>{loginText.loginTitle}</Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          title={loginText.usernameInput}
          name="username"
          value={user.username}
          onChangeText={(newValue) => setUser((old) => ({ ...old, username: newValue }))}
          type={Types.USERNAME}
        />
        <CustomTextInput
          title={loginText.passwordInput}
          name="password"
          value={user.password}
          onChangeText={(newValue) => setUser((old) => ({ ...old, password: newValue }))}
          type={Types.PASSWORD}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.link}>{loginText.goToSignup}</Text>
      </Pressable>
    </View>
  )
}

export default Login
