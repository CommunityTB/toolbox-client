import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BadgeCounter from '../components/BadgeCounter/BadgeCounter'

describe(`BadgeCounter component`, () => {
  const props = {
    count: 1
  }
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BadgeCounter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders a BadgeCounter by default', () => {
    const wrapper = shallow(<BadgeCounter />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the badge counter from props', () => {
    const wrapper = shallow(<BadgeCounter {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})