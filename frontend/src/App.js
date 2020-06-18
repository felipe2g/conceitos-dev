import React from 'react';

import Header from './components/Header.js';

function App(){
  return (
    <div>
      <Header title="Homepage" />
      <Header title="Projects" />
      <Header title="Menu">
        <ul>
          <li>Página 1</li>
          <li>Pagina 2</li>
          <li>Login</li>
        </ul>
      </Header>
    </div>
  )
}

export default App;