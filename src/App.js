// src/App.js
import React from 'react';
import PostsList from './component/PostCardList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header de la aplicación */}
      <header className="app-header">
        <h1>🚀 Mi Primera App React</h1>
        <p>HECHA POR: VALENTINA MEJIA</p>
      </header>

      {/* Contenido principal */}
      <main className="app-main">
        <PostsList />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Hecho con ❤️ en React | 
          API: <a 
            href="https://jsonplaceholder.typicode.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            JSONPlaceholder
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;