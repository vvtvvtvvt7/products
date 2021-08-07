import React from 'react';
import Title, { TitleLevel, TitleSize } from '../title/title';
import './about.css';

// Раздел о котокафе
function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title level={TitleLevel.H1} size={TitleSize.BIG}> Первое в России котокафе</Title>
        <p className="about__text">Крупнейшее котокафе России, в отором живёт 50 кошек и котов,
                и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.
        </p>
        <p className="about__time">Рабочее время с 8:00 до 23:00</p>
        <p className="about__address">Санкт-Петербург, Большая Конюшенная улица, 27</p>
      </div>
    </section>
  );
}

export default About;
