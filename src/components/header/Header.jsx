import React, { useState } from 'react';
import PopUser from '../PopUser/PopUser'; // Импортируем PopUser
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser
} from './Header.styled';

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className={`light ${theme === 'light' ? '_show' : ''}`} theme={theme}>
            <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderLogo className="dark" theme={theme}>
            <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>
            <HeaderUser
              href="#" 
              className="_hover02" 
              onClick={(e) => {
                e.preventDefault();
                toggleUserPopup();
              }}
            >
              Ivan Ivanov
            </HeaderUser>
            {isUserPopupOpen && (
              <PopUser />
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderContainer>
  );
}

export default Header;