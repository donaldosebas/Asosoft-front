import React from 'react'
import renderer from 'react-test-renderer'

import Sports from '../views/Sport'

describe('Sport view ', () => {
  it('Sport view renders correctly', () => {
    const tree = renderer.create(<Sports />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
