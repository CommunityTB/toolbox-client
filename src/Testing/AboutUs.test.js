import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AboutUs from '../pages/AboutUs.js';

describe(`AboutUs component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter> <AboutUs /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders AboutUs by default', () => {
    const wrapper = shallow(<AboutUs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})