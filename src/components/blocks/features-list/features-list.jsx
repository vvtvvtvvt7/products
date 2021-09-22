import React from 'react';
import FeatureCard from '../../ui/feature-card/feature-card';
import { Ul, Li } from 'src/components/styled';
import { AppRoute } from '/src/const';
import { Features, StyledButton, StyledTitle } from './styles';

// список преимуществ
function FeaturesList({
  features, // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>),
        )}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
