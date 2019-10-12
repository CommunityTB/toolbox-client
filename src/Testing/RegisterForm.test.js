import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegisterForm from '../components/RegisterForm'

describe(`RegisterForm component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><RegisterForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a RegisterForm by default', () => {
    const wrapper = shallow(<RegisterForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})