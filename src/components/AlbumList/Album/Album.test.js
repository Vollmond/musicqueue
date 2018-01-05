import React from 'react'
import { shallow } from 'enzyme'

import Album from './index'

const albumMock = {
  name: 'Yes - Fragile',
  id: 1
}

describe('<Album />', () => {
  it('renders album', () => {
    const album = shallow(<Album name={ albumMock.name } id={ albumMock.id } />)

    expect(album.find('.Album-title').text()).toEqual(albumMock.name)
  })
})
