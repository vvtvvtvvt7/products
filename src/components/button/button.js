import React from 'react';
import './button.css';

// Компонент кнопки, может превращаться в ссылку,
// если передать link
function Button({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  width, // ширина кнопки
}) {
  const generalProps = {
    className: 'button',
    style: {
      width: width ? width : '100%',
    },
  };
  // если передана сылка, то отисовываем как ссылку, иначе как кнопку.
  return link
    ? (<a href={link} {...generalProps}>{children}</a>)
    : (<button {...generalProps} >{children}</button> );
}

export default Button;
