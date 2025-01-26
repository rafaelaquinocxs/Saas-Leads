import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/prospecção" className="sidebar-link">Prospecção</Link>
        </li>
        <li>
          <Link to="/desempenho" className="sidebar-link">Desempenho</Link>
        </li>
        {/* Adicionar outros links de navegação conforme necessário */}
      </ul>
    </div>
  );
};

export default Sidebar;
