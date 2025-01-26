import React, { useState } from 'react';
import './Prospecção.css';  
import InfoTooltip from '../components/InfoTooltip';

function Prospection() {
  const [companyInfo, setCompanyInfo] = useState("");
  const [businessModel, setBusinessModel] = useState("");
  const [uploads, setUploads] = useState(null);
  const [website, setWebsite] = useState("");
  const [personas, setPersonas] = useState([]);
  const [cadence, setCadence] = useState([]);

  // Funções para atualizar o estado
  const handleInputChange = (e) => {
    setCompanyInfo(e.target.value);
  };

  const handleBusinessModelChange = (e) => {
    setBusinessModel(e.target.value);
  };

  const handleFileUpload = (e) => {
    setUploads(e.target.files);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handlePersonaChange = (persona) => {
    setPersonas([...personas, persona]);
  };

  const handleCadenceChange = (cadenceItem) => {
    setCadence([...cadence, cadenceItem]);
  };

  return (
    <div className="prospection-container">
      <div className="sidebar">
        <h3>Menu de Prospecção</h3>
        <ul>
          <li><a href="#empresa">Informações sobre a Empresa</a></li>
          <li><a href="#modelo">Modelo de Negócio</a></li>
          <li><a href="#uploads">Upload de Arquivos</a></li>
          <li><a href="#website">Website e Links</a></li>
          <li><a href="#personas">Personas</a></li>
          <li><a href="#cadencia">Fluxo de Cadência</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h2 className="page-title">Página de Prospecção</h2>

        <div className="section" id="empresa">
          <h3>Informações sobre a Empresa</h3>
          <textarea
            className="input-field"
            placeholder="Conte-nos sobre a empresa"
            value={companyInfo}
            onChange={handleInputChange}
          />
        </div>

        <div className="section" id="modelo">
          <h3>Modelo de Negócio</h3>
          <textarea
            className="input-field"
            placeholder="Descreva o modelo de negócio"
            value={businessModel}
            onChange={handleBusinessModelChange}
          />
        </div>

        <div className="section" id="uploads">
          <h3>Upload de Arquivos</h3>
          <input
            type="file"
            multiple
            className="file-upload"
            onChange={handleFileUpload}
          />
        </div>

        <div className="section" id="website">
          <h3>Website e Links de Referência</h3>
          <input
            type="url"
            placeholder="Insira o site da empresa"
            className="input-field"
            value={website}
            onChange={handleWebsiteChange}
          />
        </div>

        <div className="section" id="personas">
          <h3>Defina seu Público-Alvo e Crie Personas</h3>
          <div className="persona-creation">
            <input
              type="text"
              placeholder="Nome da Persona"
              className="persona-input"
              onKeyDown={(e) => e.key === 'Enter' && handlePersonaChange(e.target.value)}
            />
            <div className="persona-list">
              {personas.map((persona, index) => (
                <div key={index} className="persona-item">
                  {persona}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section" id="cadencia">
          <h3>Crie o Fluxo de Cadência (Arraste e Solte)</h3>
          <div className="cadence-builder">
            <button
              className="cadence-button"
              onClick={() => handleCadenceChange('WhatsApp')}
            >
              Adicionar WhatsApp
            </button>
            <button
              className="cadence-button"
              onClick={() => handleCadenceChange('Email')}
            >
              Adicionar Email
            </button>

            <div className="cadence-list">
              {cadence.map((item, index) => (
                <div key={index} className="cadence-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="submit-button">Enviar Prospecção</button>
      </div>
    </div>
  );
}

export default Prospection;
