import React from 'react';
import Title, { TitleSize, TitleLevel } from '../title/title';
import  './feature-card.css';

// Карточка кота
function FeatureCard({
  title, // название особенности
  owner, // владелец особенности (обычный магин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательнай
  image, // иконка
}) {
  return (
    <article className={`feature ${isNegative ? 'feature_negative' : ''}`}>
      <img width={56} height={56} src={image} className="feature__image" alt={title} />
      <span className="feature__owner">{owner}</span>
      <span className="feature__title">
        <Title level={TitleLevel.H3} size={TitleSize.SMALL}>{title}</Title>
      </span>
      <p className="feature__about">{about}</p>
    </article>
  );
}

export default FeatureCard;
