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
  UserMenuItem
} from './Header.styled';

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleNewCardClick = () => {
    navigate('/new');
  };

  const handleExitClick = () => {
    navigate('/exit');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderContainer>
      <HeaderBlock>
        <HeaderLogo>
          <img src="/vite.svg" alt="logo" />
        </HeaderLogo>
        
        <HeaderNav>
          <HeaderButton 
            className="_hover01" 
            onClick={handleNewCardClick}
          >
            Создать новую задачу
          </HeaderButton>
          
          <HeaderUser onClick={toggleMenu} className="_hover02">
            {user?.name || 'Пользователь'}
          </HeaderUser>
          
          {showMenu && (
            <UserMenu>
              <UserMenuItem>{user?.email}</UserMenuItem>
              <UserMenuItem onClick={handleExitClick}>Выйти</UserMenuItem>
            </UserMenu>
          )}
        </HeaderNav>
      </HeaderBlock>
    </HeaderContainer>
  );
}

export default Header;