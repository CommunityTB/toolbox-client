import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ScrollToTop from './ScrollToTop'

describe(`ScrollToTop component`, () => {

  it('renders a ScrollToTop by default', () => {
    const wrapper = shallow(<ScrollToTop />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})