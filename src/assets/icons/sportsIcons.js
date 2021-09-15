/* eslint-disable max-len */
import React from 'react'
import BasketballSVG from './basketball'
import SoftbolSVG from './softbol'

const SportsIcons = {
  softbol: (width, height, color) => <SoftbolSVG width={width} height={height} color={color} />,
  basketball: (width, height, color) => <BasketballSVG width={width} height={height} color={color} />,
}

export default SportsIcons
