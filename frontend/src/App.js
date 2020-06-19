import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header.js';

import './App.css';

function App(){

  //useState returna um array com duas posições
  // 
  //1. variável com o seu valor inicial
  //2. Função para atualizarmos este valor

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <div>
      <>
        <Header title="Projects" />

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

      </>
    </div>
  )
}

export default App;