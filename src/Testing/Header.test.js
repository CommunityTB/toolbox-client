import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../components/Header'

describe(`Header component`, () => {
  // Enzyme doesn't support React.createContext so skipping this test
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Header by default', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})