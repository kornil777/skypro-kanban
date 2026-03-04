import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  UserMenu,
  UserMenuName,
  UserMenuEmail,
  UserMenuTheme,
  UserMenuThemeCheckbox,
  UserMenuLogoutButton
} from './Header.styled';

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleNewCardClick = () => {
    navigate('/new');
  };

  const handleExitClick = () => {
    navigate('/exit');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleThemeToggle = (e) => {
    setIsDarkTheme(e.target.checked);
    // здесь будет логика переключения темы
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="/" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" onClick={handleNewCardClick}>
              Создать новую задачу
            </HeaderButton>
            <HeaderUser onClick={toggleMenu} className="_hover02">
              {user?.name || 'Пользователь'}
            </HeaderUser>
            {showMenu && (
              <UserMenu>
                <UserMenuName>{user?.name || 'Имя пользователя'}</UserMenuName>
                <UserMenuEmail>{user?.login || 'email@example.com'}</UserMenuEmail>
                <UserMenuTheme>
                  <p>Темная тема</p>
                  <UserMenuThemeCheckbox
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={handleThemeToggle}
                  />
                </UserMenuTheme>
                <UserMenuLogoutButton className="_btn-bor _hover03" onClick={handleExitClick}>
                  Выйти
                </UserMenuLogoutButton>
              </UserMenu>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderContainer>
  );
}

export default Header;