import React from 'react';
import Header from '../header/header';
import About from '../about/about';
import FeaturesList from '../features-list/features-list';
import Footer from '../footer/footer';
import { TitleLevel } from '../title/title';

// Главная страница сайта
function MainPage({
  features, // список преимучеств фермерских продуктов
}) {
  return (
    <>
      <Header />
      <About />
      <FeaturesList features={features} level={TitleLevel.H2} />
      <Footer />
    </>
  );
}

export default MainPage;
