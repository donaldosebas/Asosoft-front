import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../views/home'

describe('Home view ', () => {
  it('Home view renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
