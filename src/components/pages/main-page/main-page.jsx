import React from 'react';
import About from '../../blocks/about/about';
import FeaturesList from '../../blocks/features-list/features-list';

// Главная страница сайта
function MainPage({
  features, // список преимучеств фермерских продуктов
}) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
