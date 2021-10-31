import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, TextInput, Animated, Easing,
} from 'react-native'
// import IconIonic from 'react-native-vector-icons/Ionicons'
import IconFeather from 'react-native-vector-icons/Feather'

const PRIMARYCOLOR = '#1B9CC4'

const styles = StyleSheet.create({
  container: {
    padding: 5,
    minWidth: 150,
    width: '100%',
  },
  title: {
    position: 'absolute',
    color: 'black',
  },
  none: {
    color: PRIMARYCOLOR,
    transform: [{ translateX: 5 }, { translateY: -25 }],
  },
  box: {
    backgroundColor: 'white',
    height: 52,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: PRIMARYCOLOR,
    borderRadius: 5,
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: {
    color: PRIMARYCOLOR,
    transform: [{ scale: 2 }, { translateY: 11 }, { translateX: 8 }],
  },
  input: {
    color: 'black',
    marginLeft: 30,
    top: -7,
    paddingRight: 5,
    flex: 1,
    height: 48,
  },
  isFocused: {
    color: PRIMARYCOLOR,
  },
})

const animations = StyleSheet.create({
  title: (animation, value) => ({
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: (value === '') ? [0, 1] : [1, 1],
          outputRange: [42, 5],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: (value === '') ? [0, 1] : [1, 1],
          outputRange: [12, -25],
        }),
      },
    ],
  }),
})

const Types = {
  USERNAME: 'username',
  PASSWORD: 'password',
  EMAIL: 'email',
}

const CustomTextInput = ({
  title, value, onChangeText, type,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const focusAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.3, 0.25, 0.1, 1),
      useNativeDriver: true,
    }).start()
  }, [focusAnim, isFocused])

  return (
    <View style={styles.container}>
      <View
        style={styles.box}
      >
        <Animated.Text
          style={[
            styles.title,
            isFocused ? styles.isFocused : {},
            animations.title(focusAnim, value),
            (value !== '') ? styles.none : {},
          ]}
        >
          {title}
        </Animated.Text>
        {
          (() => {
            if (type === Types.USERNAME) return <IconFeather style={styles.icon} name="user" />
            if (type === Types.PASSWORD) return <IconFeather style={styles.icon} name="lock" />
            if (type === Types.EMAIL) return <IconFeather style={styles.icon} name="mail" />
            return ''
          })()
        }
        <TextInput
          style={[styles.input, isFocused ? styles.isFocused : {}]}
          onChangeText={onChangeText}
          value={value}
          key={type === Types.EMAIL ? 'email-address' : 'default'}
          secureTextEntry={type === Types.PASSWORD}
          keyboardType={type === Types.EMAIL ? 'email-address' : 'default'}
          onBlur={() => {
            setIsFocused(false)
          }}
          onFocus={() => {
            setIsFocused(true)
          }}
        />
      </View>
    </View>
  )
}

CustomTextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export {
  CustomTextInput,
  Types,
}
