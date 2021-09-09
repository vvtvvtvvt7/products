import React, { useState } from 'react';

import Panel from 'src/components/ui/panel/panel';
import Title, { TitleSize } from 'src/components/ui/title/title';
import CheckboxList from 'src/components/ui/checkboxList/checkboxList';
import ProductCart from 'src/components/ui/product-cart/product-cart';
import Button from 'src/components/ui/button/button';
import {
  LeftColumn,
  StyledOrder,
  CheckboxLabel,
  ProductSwiper,
  AddressInput,
  PriceLabel,
  PriceValue
} from './styles';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Mousewheel
} from 'swiper';
import 'swiper/css';

SwiperCore.use([Mousewheel, Pagination]);

// Оформление заказа
function Order({
  products, // список продуктов
}) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [address, setAddress] = useState('');
  const [firstSelectIsCome, setFirstSelectIsCome] = useState(false);

  const buttonIsDisabled = !(selectProductIds.length && address);
  //id в продукты
  const selectProducts = selectProductIds
    .map((id) => products
      .find((product)=>product.id === id));
  //цена покупки
  const fullPrice = selectProducts.reduce((summ, product) =>  summ += product.price, 0);

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map((product) => `${product.name} - ${product.price} руб.\n`)}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  // при клике на чекбокс с названием продукта
  const handleOnClickProduct = (index) => {
    swiperRef.slideTo(index, 0);
  };

  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>Выберите продукты</Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={'select-products'}
            isGridList={false}
            options={products
              .map((product) => (
                {
                  value: product.id,
                  title: product.name,
                }))}
            selectValues={selectProductIds}
            onClickLabel={handleOnClickProduct}
            onChange={(productIds) => {
              if (!firstSelectIsCome) {
                setFirstSelectIsCome(true);
              }
              setSelectProductIds(productIds);
            }}
          />
        </Panel>
        <Panel>
          <Title as="h1" size={TitleSize.EXTRA_SMALL} marginBottom={24}>Сделать заказ</Title>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button maxWidth onClick={handleBuyClick} disabled={buttonIsDisabled}>Купить</Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        mousewheel
        loop
        centeredSlides={firstSelectIsCome}
        pagination={{
          type: 'fraction',
        }}
      >{products
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCart product={product}/>
            </SwiperSlide>),
          )}
      </ProductSwiper>
    </StyledOrder>
  ) : 'Продукты были слишком вкусные и их разобрали.';
}

export default Order;
