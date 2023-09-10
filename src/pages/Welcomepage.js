import React from 'react'
import logo from "../assets/trebol.png"
import '../App.css';

export default function Welcomepage() {
  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenido/a</h2>
        <p>Cargando...</p>
        <p>
        ¡Juega al bingo en cualquier momento, en cualquier lugar! 😉✨
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho con React!
        </a>
      </header>
    </div>
  )
}
