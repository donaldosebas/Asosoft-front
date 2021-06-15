import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import {
  View, Text, StyleSheet, Pressable,
} from 'react-native'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import CheckToggle from '../components/common/inputs/checkToggle'
import SimpleButton from '../components/common/inputs/simpleButton'
import { CustomTextInput, Types } from '../components/common/inputs/textInput'
import { signupText } from '../text/es.json'

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

const Signup = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  })
  const [rememberMe, setRememberMe] = useState(false)

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
      <SimpleButton title={signupText.action} />
      <Pressable
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>{signupText.goToLogin}</Text>
      </Pressable>
    </View>
  )
}

export default Signup
