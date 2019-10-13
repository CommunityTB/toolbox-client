import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ToolBoxMap from '../components/ToolBoxMap/ToolBoxMap'

describe(`ToolBoxMap component`, () => {
  it('renders a ToolBoxMap by default', () => {
    const wrapper = shallow(<ToolBoxMap />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})