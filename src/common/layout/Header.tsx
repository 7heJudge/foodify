import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import { Link, useLocation } from 'react-router-dom';
import theme from 'theme/theme';
import Typography from '../components/Typography/Typography';
import Button from '../Button/Button';
import AddCustomDish from '../components/AddCustomDish/AddCustomDish';
import { sm } from 'utils/constants';
import HamburgerIcon from '../icons/Hamburger.icon';

const Header = () => {
  const { pathname } = useLocation();

  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

  const handleModal = useCallback((state: boolean) => setActiveModal(state), [activeModal]);

  const handleHamburger = () => setHamburgerMenu(!hamburgerMenu);

  return (
    <>
      <HeaderContainer>
        <NavBar active={hamburgerMenu}>
          <ByColumn>
            <NavButton to="/" active={hamburgerMenu}>
              <HeaderItem
                text="Random dish"
                fontWeight="bold"
                fontSize="fz28"
                fontColor="black"
                active={pathname === '/'}
              />
            </NavButton>
            <NavButton to="/favourites" active={hamburgerMenu}>
              <HeaderItem
                text="Favourites"
                fontWeight="bold"
                fontSize="fz28"
                fontColor="black"
                active={pathname === '/favourites'}
              />
            </NavButton>
          </ByColumn>
          <AddCustomDishWrapper active={hamburgerMenu}>
            <Button
              height={45}
              width={190}
              borderColor={theme.colors.gray}
              bgColor={theme.colors.gray}
              labelColor={theme.colors.black}
              label={<div>Add custom dish</div>}
              onClick={() => handleModal(true)}
            />
          </AddCustomDishWrapper>
        </NavBar>
        <HamburgerMenu onClick={handleHamburger}>
          <HamburgerIcon />
        </HamburgerMenu>
      </HeaderContainer>
      <AddCustomDish active={activeModal} handler={handleModal} />
    </>
  );
};

const HeaderContainer = styled.header`
  background-color: ${theme.colors.lightGray};
  height: auto;
  padding: 10px 20px;
`;

const NavBar = styled.header<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: ${sm}px) {
    ${(props) =>
      props.active &&
      css`
        flex-direction: column;
        height: 200px;
      `}
  }
`;

const ByColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 0;
  @media (max-width: ${sm}px) {
    flex-direction: column;
  }
`;

const AddCustomDishWrapper = styled.div<{ active: boolean }>`
  @media (max-width: ${sm}px) {
    ${(props) => !props.active && 'display: none'};
  }
`;

const NavButton = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  cursor: pointer;
  @media (max-width: ${sm}px) {
    ${(props) => !props.active && 'display: none'};
  }
`;

const HeaderItem = styled(Typography)<{ active: boolean }>`
  margin: 0 25px;
  border-bottom: 2px solid ${(props) => (props.active ? 'black' : 'transparent')};
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: ${sm}px) {
    display: block;
  }
`;

export default Header;
