import React from 'react';
import Button from '../button/button';
import Title from '../title/title';
import StarCard from '../star-card/star-card';
import './stars-list.css';

// список известных в котокафе котов
function StarsList({
  stars, // коты
  level, // уровень заголовка списка.
}) {
  return (
    <section className="stars">
      <Title level={level} >Наши звёзды</Title>
      <ul className="stars__list">
        {stars.map((star) => (
          <li className="stars_item" key={star.id}>
            <StarCard {...star} />
          </li>),
        )}
      </ul>
      <Button width={353}>Купить билет</Button>
    </section>
  );
}

export default StarsList;
