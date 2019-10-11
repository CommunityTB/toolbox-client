import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
});