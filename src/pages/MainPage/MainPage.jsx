import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Main from '../../components/Main/Main';
import PopNewCard from '../../components/modals/PopNewCard/PopNewCard';
import PopBrowse from '../../components/modals/PopBrowse/PopBrowse';
import PopExit from '../../components/modals/PopExit/PopExit';

const MainPage = () => {
  const location = useLocation();
  const showModal = location.pathname !== '/';

  return (
    <div className="wrapper">
      <Header />
      <Main />
      
      {/* Рендерим модальные окна в зависимости от маршрута */}
      {showModal && location.pathname === '/new' && <PopNewCard />}
      {showModal && location.pathname.startsWith('/card/') && <PopBrowse />}
      {showModal && location.pathname === '/exit' && <PopExit />}
    </div>
  );
};

export default MainPage;