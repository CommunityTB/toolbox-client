import Reactfrom 'react';
import { AppContext } from '../components/AppProvider';


it('without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<AppContext />, div);
   ReactDOM.unmountComponentAtNode(div);
});
