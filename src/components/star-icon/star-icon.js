import React from 'react';
import { CatFeature } from '../../const';
import './star-icon.css';

function StarIcon({feature}) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: 'New',
        class: 'icon_new',
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: 'Ласковый',
        class: 'icon_soft',
      };
      break;
  }

  return (options
    ? (<span className={`icon ${options.class}`}>{options.text}</span>)
    : null);
}

export default StarIcon;
