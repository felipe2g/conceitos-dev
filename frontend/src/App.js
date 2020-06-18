import React, { useState } from 'react';

import Header from './components/Header.js';

function App(){

  //useState returna um array com duas posições
  // 
  //1. variável com o seu valor inicial
  //2. Função para atualizarmos este valor

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <div>
      <>
        <Header title="Projects" />

        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

      </>
    </div>
  )
}

export default App;