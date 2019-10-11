import React from 'react'
import RegistrationForm from '../components/RegisterForm';


it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<RegistrationForm />, div);
   ReactDOM.unmountComponentAtNode(div);
});
