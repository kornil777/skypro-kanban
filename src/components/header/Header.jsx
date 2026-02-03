import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';
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
  const { user, openExitModal } = useAuth();
  const { openNewCardModal } = useModal();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoutClick = () => {
    setShowMenu(false);
    openExitModal();
  };

  const handleNewCardClick = () => {
    openNewCardModal();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderContainer>
      <HeaderBlock>
        <HeaderLogo>
          <img src="/images/logo.png" alt="logo" />
        </HeaderLogo>
        
        <HeaderNav>
          <HeaderButton 
            className="_hover01" 
            id="btnMainNew"
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
              <UserMenuItem onClick={handleLogoutClick}>Выйти</UserMenuItem>
            </UserMenu>
          )}
        </HeaderNav>
      </HeaderBlock>
    </HeaderContainer>
  );
}

export default Header;