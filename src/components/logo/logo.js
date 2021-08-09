import React from 'react';
import logo from '../../assets/images/logo.svg';
import './logo.css';

// Логотип сайта с названием
function Logo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Логотип - фермер" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;
