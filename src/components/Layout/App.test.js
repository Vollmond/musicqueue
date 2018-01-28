// @flow

import React from 'react'
import App from './index'

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  shallow(<App />, div)
})
