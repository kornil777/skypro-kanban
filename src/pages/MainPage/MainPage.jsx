import React from 'react';
import Header from '../../components/header/Header';
import Main from '../../components/Main/Main';
import PopNewCard from '../../components/PopNewCard/PopNewCard';
import PopBrowse from '../../components/PopBrowse/PopBrowse';
import PopExit from '../../components/PopExit/PopExit';

const MainPage = () => {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
};

export default MainPage;