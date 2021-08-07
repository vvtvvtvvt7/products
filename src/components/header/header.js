import React from 'react';
import Logo from '../logo/logo';
import Button from '../button/button';
import './header.css';

// шапка сайта
function Header() {
  return (
    <header className="header">
      <Logo />
      <Button width={260}>Купить билет</Button>
    </header>
  );
}

export default Header;
