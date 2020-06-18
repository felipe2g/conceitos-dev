import React from 'react';

import Header from './components/Header.js';

function App(){

  const project = ['Desenvolvimento de app', 'Front-end web'];

  return (
    <div>
      <>
        <Header title="Projects" />

        <ul>
          {project.map(project => <li key={project}>{project}</li>)}
        </ul>

      </>
    </div>
  )
}

export default App;