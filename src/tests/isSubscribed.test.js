import React from 'react'
import renderer from 'react-test-renderer'

import Subscribed from '../components/common/isSubscribed'

describe('Testing subscribed visualization', () => {
  test('Subscribed renders correctly', () => {
    // eslint-disable-next-line react/no-children-prop
    renderer.create(<Subscribed isSubscribed />)
  })
  test('Subscribed receives the props correctly', () => {
    // eslint-disable-next-line react/no-children-prop
    const component = renderer.create(<Subscribed isSubscribed />)
    const instance = component.root
    expect(instance.findByType(Subscribed).props.isSubscribed).toBe(true)
  })
})
