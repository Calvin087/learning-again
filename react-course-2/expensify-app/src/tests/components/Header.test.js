// react-test-renderer
//  info of snapshot gets sent here './__snapshots__/Header.text'

// What is shallow redering vs full DOM?
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('should render header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

