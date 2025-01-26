// src/pages/Desempenho/Desempenho.js

import React from 'react';
import './Desempenho.css';

function Desempenho() {
  return (
    <div className="desempenho-page">
      <header className="navbar">
        <h2>Plataforma SaaS</h2>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/prospecao">Prospecção</a>
          <a href="/desempenho">Desempenho</a>
        </nav>
      </header>

      <div className="content-container">
        <div className="desempenho-header">
          <h3>Desempenho da Prospecção</h3>
        </div>

        <div className="metrics-dashboard">
          <div className="metric">
            <div className="icon">📩</div>
            <h4>Mensagens Enviadas</h4>
            <p className="metric-number">500</p>
          </div>

          <div className="metric">
            <div className="icon">📞</div>
            <h4>Contatos Feitos</h4>
            <p className="metric-number">300</p>
          </div>

          <div className="metric">
            <div className="icon">📧</div>
            <h4>E-mails Enviados</h4>
            <p className="metric-number">150</p>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h4>Gráfico de Desempenho</h4>
          </div>
          <div className="chart">
            <p>Gráfico interativo virá aqui (usaremos Chart.js ou Recharts futuramente)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desempenho;
