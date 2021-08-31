import React from 'react';
import Button from 'src/components/ui/button/button';
import { AppRoute } from 'src/const';
import { StyledButton } from './styles';

const buttons = [
  {to: AppRoute.MAIN, button: (<StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN}>Главная</StyledButton>)},
  {to: AppRoute.ORDER, button: (<Button key={AppRoute.ORDER} link={AppRoute.ORDER}>Купить</Button>)},
];

// навигация
function Nav({
  pageUrl,
}) {
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button )}
    </nav>
  );
}

export default Nav;
