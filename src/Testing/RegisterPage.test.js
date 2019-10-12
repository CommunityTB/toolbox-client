import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegisterPage from '../pages/RegisterPage';

describe(`RegisterPage component`, () => {
   it('renders without crashing', () => {
     const div = document.createElement('div');
     ReactDOM.render(<BrowserRouter><RegisterPage /></BrowserRouter>, div);
     ReactDOM.unmountComponentAtNode(div);
   });
 
   it('renders a RegisterPage by default', () => {
     const wrapper = shallow(<RegisterPage />)
     expect(toJson(wrapper)).toMatchSnapshot()
   })
 })