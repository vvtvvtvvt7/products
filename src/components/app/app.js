import React from 'react';
import MainPage from '../main-page/main-page';
import features from '../../mocks/features';
import './app.css';

// Корневой компонент всего приложения
function App() {
  return (
    <div className="app">
      <MainPage features={features} />
    </div>
  );
}

export default App;
