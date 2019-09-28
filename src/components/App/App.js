import React from 'react';
import './App.css';
import ToolCardList from '../ToolCard/ToolCardList';

function App() {
  const tools = [
    {
      id: '111',
      name: 'Claw Hammer',
      imageURL: 'https://images.homedepot-static.com/productImages/c275d0bb-5e98-412c-b1b1-8726fd1f1477/svn/dewalt-claw-hammers-dwht51054-64_400_compressed.jpg',
      availability: true
    },
    {
      id: '222',
      name: 'Sledge Hammer',
      imageURL: 'https://images.homedepot-static.com/productImages/1fdd9918-d45d-4c54-aaa2-fac5965f27ea/svn/stiletto-claw-hammers-tb15mc-64_400_compressed.jpg',
      availability: false
    },
    {
      id: '333',
      name: 'MC Hammer',
      imageURL: 'https://images.homedepot-static.com/productImages/05c3fadf-c695-4742-85c8-7ec5c1d15703/svn/estwing-specialty-hammers-dfh12-64_400_compressed.jpg',
      availability: true
    }
  ]

  return (
    <div className="App">
      <ToolCardList tools={tools} />
    </div>
  );
}

export default App;
