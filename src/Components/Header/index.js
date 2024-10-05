import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <img 
        src="caminho-para-sua-imagem.jpg" 
        alt="Condomínio" 
        className="header-image" 
      />
      <h1 className="header-title">Nome do Condomínio</h1>
      <a href="/regulamento" className="header-button">Ver Regulamento</a>
    </header>
  );
}

export default Header;