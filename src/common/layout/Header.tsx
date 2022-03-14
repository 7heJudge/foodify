import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import theme from 'theme/theme';
import Typography from '../components/Typography/Typography';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateTo = (link: string) => navigate(link);

  return (
    <HeaderContainer>
      <NavButton onClick={() => navigateTo('/')}>
        <HeaderItem
          text="Random dish"
          fontWeight="bold"
          fontSize="fz28"
          fontColor="black"
          active={pathname === '/'}
        />
      </NavButton>
      <NavButton onClick={() => navigateTo('/favourites')}>
        <HeaderItem
          text="Favourites"
          fontWeight="bold"
          fontSize="fz28"
          fontColor="black"
          active={pathname === '/favourites'}
        />
      </NavButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightGray};
  height: 60px;
  width: 100%;
`;

const NavButton = styled.div`
  cursor: pointer;
`;

const HeaderItem = styled(Typography)<{ active: boolean }>`
  margin: 0 25px;
  border-bottom: 2px solid ${(props) => (props.active ? 'black' : 'transparent')};
`;

export default Header;
