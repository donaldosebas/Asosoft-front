import React from 'react'
import renderer from 'react-test-renderer'

import Truncate from '../components/profile/truncateText'

describe('Testing truncate visualization', () => {
  test('Truncate renders correctly', () => {
    // eslint-disable-next-line react/no-children-prop
    renderer.create(<Truncate children="Helo" max={2} />)
  })
  test('Truncate receives the props correctly', () => {
    // eslint-disable-next-line react/no-children-prop
    const component = renderer.create(<Truncate children="Helo" max={2} />)
    const instance = component.root
    expect(instance.findByType(Truncate).props.children).toBe('Helo')
    expect(instance.findByType(Truncate).props.max).toBe(2)
  })
})
