import React from 'react';
import About from '/src/components/blocks/about/about';
import FeaturesList from '/src/components/blocks/features-list/features-list';

// Главная страница сайта
function MainPage({
  features, // список преимуществ фермерских продуктов
}) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
