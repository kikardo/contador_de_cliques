import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from './estados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador básico de cliques!
        </p>
       
        <Botao />
      </header>

    </div>
  );
}

export default App;
