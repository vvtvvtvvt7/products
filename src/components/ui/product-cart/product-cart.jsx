import React from 'react';
import Tabs from 'src/components/ui/tabs/tabs';
import { TitleSize } from 'src/components/ui/title/title';
import OptionsList from 'src/components/ui/options-list/options-list';
import {ProductImage, ProductPanel, ProductTitle, Price, ContentWrapper } from './styled';

function ProductCart({product}) {
  const tabsList = [
    {
      title: 'Oписание',
      content: product.description,
    },
    {
      title: 'Характеристики',
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: 'Свойства',
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <ProductPanel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>{product.name}</ProductTitle>
        <Tabs
          maxContentHeiht="105px"
          tabsList={tabsList}
        />
        <Price>{product.price} руб. / {product.weight} гр.</Price>
      </ContentWrapper>

    </ProductPanel>
  );
}

export default ProductCart;