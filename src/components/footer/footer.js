import React from 'react';
import Logo from '../logo/logo';
import './footer.css';

// подвал сайта
function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <span className="footer__right">
          Создано 2021
      </span>
    </footer>
  );
}

export default Footer;
