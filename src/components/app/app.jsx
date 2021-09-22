import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from 'src/components/pages/main-page/main-page';
import ScrollTop from 'src/components/ui/scroll-top/scroll-top';
import PageWrapper from 'src/components/layout/page-wrapper/page-wrapper';
import Order from 'src/components/pages/order/order';
import { AppRoute } from 'src/const';
import features from 'src/mocks/features';
import products from 'src/mocks/products';
import { GlobalStyle } from './styles';

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage features={features} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.ORDER}>
            <PageWrapper pageUrl={AppRoute.ORDER}>
              <Order products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
