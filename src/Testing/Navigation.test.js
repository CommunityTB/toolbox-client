import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Navigation from '../components/Navigation'

describe(`Navigation component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Navigation /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Navigation by default', () => {
    const wrapper = shallow(<Navigation />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})