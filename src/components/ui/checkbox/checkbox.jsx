import React from 'react';
import { Label, VisuallyHiddenInput } from 'src/components/styled';

// чекбокс
function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  selectValues, // выбранное значения
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = selectValues.includes(value);

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick()} $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );

}

export default Checkbox;
