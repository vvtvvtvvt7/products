import React from 'react';
import { Ul } from 'src/components/styled';
import Checkbox from 'src/components/ui/checkbox/checkbox';

// Радиокнопка
function CheckboxList({
  selectValues, // массив выбранных значений
  labelComponent, // Компонент для отображения label
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  isGridList,
  onClickLabel,
}) {

  return (
    <Ul $isGridList={isGridList}>
      {options.map((option, index) => (
        <Checkbox
          key={option.value}
          labelComponent={labelComponent}
          selectValues={selectValues}
          name={name}
          value={option.value}
          text={option.title}
          onClick={() => onClickLabel(index)}
          onChange={(value)=> {
            const newValue = [...selectValues];
            const indexValue = newValue.indexOf(value);
            if (indexValue !== -1) {
              newValue.splice(indexValue, 1);
            } else {
              newValue.push(value);
            }
            onChange && onChange(newValue);
          }}
        />
      ))}
    </Ul>
  );

}

export default CheckboxList;
