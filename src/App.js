import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Prospecção from './pages/Prospecção';
import Desempenho from './pages/Desempenho';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Plataforma de Prospecção SaaS</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Prospecção</Link>
              </li>
              <li>
                <Link to="/desempenho">Desempenho</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Prospecção />} />
          <Route path="/desempenho" element={<Desempenho />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
