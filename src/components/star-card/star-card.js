import React from 'react';
import Title, { TitleSize, TitleLevel } from '../title/title';
import StarIcon from '../star-icon/star-icon';
import './star-card.css';

// Карточка кота
function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image, // url c фото кота
}) {
  return (
    <article className="star">
      <figure className="star_wrapper">
        <img src={image} className="star_image" alt="изображение кота" />
        <div className={'star_icon'}>
          <StarIcon feature={feature} />
        </div>
      </figure>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>{name}</Title>
      <p className="star__about">{about}</p>
    </article>
  );
}

export default StarCard;
