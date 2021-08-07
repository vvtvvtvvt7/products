import React from 'react';
import logo from '../../assets/images/logo.svg';
import './logo.css';

// Логотип сайта с названием
function Logo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Логотип - лапа" />
      <span className="logo__text">Котокафе</span>
    </a>
  );
}

export default Logo;
