import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from '../components/Footer'

describe(`Footer component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Footer /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Footer by default', () => {
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})