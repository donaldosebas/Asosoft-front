import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import PropTypes from 'prop-types'

const SoftbolSVG = ({ color, width, height }) => (
  <Svg height={height} width={width} viewBox="0 0 24 24">
    <Path
      d="M5.063 9.375c2.382 0 4.313-1.931 4.313-4.313s-1.931-4.313-4.313-4.313c-2.382 0-4.313 1.931-4.313 4.313v0c0.003 2.381 1.932 4.31 4.312 4.313h0zM5.063 2.25c1.553 0 2.813 1.259 2.813 2.813s-1.259 2.813-2.813 2.813c-1.553 0-2.813-1.259-2.813-2.813v0c0.002-1.553 1.26-2.811 2.812-2.813h0z"
      fill={color}
    />
    <Path
      d="M22.356 1.793h-0c-0.645-0.645-1.535-1.043-2.519-1.043s-1.874 0.399-2.519 1.043l-0.257 0.257c-0.987 0.987-1.948 2.025-2.856 3.084l-0.015 0.017-6.508 8.604-4.001 4.001c-0.256-0.15-0.565-0.238-0.894-0.238-0.991 0-1.794 0.803-1.794 1.794 0 0.495 0.201 0.944 0.525 1.268l1.899 1.899c0.325 0.324 0.773 0.524 1.268 0.524 0.991 0 1.794-0.803 1.794-1.794 0-0.329-0.088-0.636-0.243-0.901l0.005 0.009 3.996-3.996 8.472-6.16c1.259-1.050 2.486-2.171 3.646-3.33 0.644-0.645 1.042-1.536 1.042-2.519s-0.398-1.874-1.042-2.519l0 0zM21.296 5.771c-1.122 1.122-2.308 2.206-3.526 3.223l-8.508 6.184-5.096 5.096 0.73 0.73c0.054 0.053 0.087 0.127 0.087 0.209 0 0.162-0.131 0.293-0.293 0.293-0.082 0-0.156-0.033-0.209-0.087l-1.899-1.899c-0.053-0.053-0.086-0.126-0.086-0.208 0-0.162 0.131-0.293 0.293-0.293 0.081 0 0.154 0.033 0.208 0.086l0.73 0.73 5.091-5.091 6.542-8.65c0.879-1.025 1.809-2.028 2.763-2.983l0.257-0.257c0.374-0.376 0.891-0.609 1.463-0.609 1.139 0 2.063 0.923 2.063 2.062 0 0.572-0.233 1.089-0.609 1.463l-0 0z"
      fill={color}
    />
  </Svg>
)

SoftbolSVG.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

SoftbolSVG.defaultProps = {
  color: '#000',
  height: 24,
  width: 24,
}

export default SoftbolSVG
