import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Condomínio Tocantins</h1>
      <img 
        src="foto-condominio.jpg" 
        alt="Condomínio" 
        className="header-image"
      />
      <a href="/regulamento" className="header-button">Ver Regulamento</a>
    </header>
  );
}

export default Header;