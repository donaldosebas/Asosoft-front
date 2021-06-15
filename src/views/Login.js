import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomTextInput, Types } from '../components/textInput'
import { loginText } from '../text/es.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  return (
    <View style={styles.container}>
      <Text>{loginText.loginTitle}</Text>
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
  )
}

export default Login
