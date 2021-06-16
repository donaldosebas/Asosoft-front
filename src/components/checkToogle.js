import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, StyleSheet } from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  icon: {
    transform: [{ scale: 2 }],
  },
  deselected: {
    color: '#7C7C7C',
  },
  selected: {
    color: '#68C17C',
  },
})

const animations = StyleSheet.create({
  bounce: (animation) => ({
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.3],
        }),
      },
    ],
  }),
})

const CheckToogle = ({ toogled }) => {
  const toogleAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(toogleAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(toogleAnim, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start()
  }, [toogleAnim, toogled])

  return (
    <Animated.View
      style={[
        styles.container,
        animations.bounce(toogleAnim),
      ]}
    >
      <IconIonic
        name="checkmark-circle-outline"
        style={[styles.icon, toogled ? styles.selected : styles.deselected]}
      />
    </Animated.View>
  )
}

CheckToogle.propTypes = {
  toogled: PropTypes.bool.isRequired,
}

export default CheckToogle
