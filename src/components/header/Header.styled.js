import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
  
  &.light {
    display: ${props => props.$theme === 'light' ? 'none' : 'block'};
  }
  
  &.dark {
    display: ${props => props.$theme === 'dark' ? 'block' : 'none'};
  }
  
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-right: 20px;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animations.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  a {
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
    margin-right: 0;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: none;
  transition: color ${({ theme }) => theme.animations.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    
    &:after {
      border-left-color: ${({ theme }) => theme.colors.primaryHover};
      border-bottom-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 1.9px solid ${({ theme }) => theme.colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    transition: border-color ${({ theme }) => theme.animations.transition};
  }
`;