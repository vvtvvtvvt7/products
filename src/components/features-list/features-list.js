import React from 'react';
import Button from '../button/button';
import Title from '../title/title';
import FeatureCard from '../feature-card/feature-card';
import './features-list.css';

// список преимучеств
function FeaturesList({
  features, // преимучества
  level, // уровень заголовка списка.
}) {
  return (
    <section className="features">
      <Title level={level}>Почему фермерские продукты лучше?</Title>
      <ul className="features__list">
        {features.map((feature) => (
          <li className="features_item" key={feature.id}>
            <FeatureCard {...feature} />
          </li>),
        )}
      </ul>
      <Button width={260}>Купить</Button>
    </section>
  );
}

export default FeaturesList;
