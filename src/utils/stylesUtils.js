const padding = (top, right, bottom, left) => ({
  paddingTop: top,
  paddingRight: right || top,
  paddingBottom: bottom || top,
  paddingLeft: left || (right || top),
})

const margin = (top, right, bottom, left) => ({
  marginTop: top,
  marginRight: right || top,
  marginBottom: bottom || top,
  marginLeft: left || (right || top),
})

export {
  padding,
  margin,
}
