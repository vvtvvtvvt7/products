import React from 'react';
import MainPage from '../main-page/main-page';
import starList from '../../mocks/starList';
import './app.css';

// Корневой компонент всего приложения
function App() {
  return (
    <div className="app">
      <MainPage stars={starList} />
    </div>
  );
}

export default App;
