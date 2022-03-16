import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import Typography from '../components/Typography/Typography';
import Button from '../Button/Button';
import AddCustomDish from '../components/AddCustomDish/AddCustomDish';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [activeModal, setActiveModal] = useState<boolean>(false);

  const navigateTo = (link: string) => navigate(link);

  const handleModal = useCallback((state: boolean) => setActiveModal(state), [activeModal]);

  return (
    <>
      <HeaderContainer>
        <ByColumn>
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
        </ByColumn>
        <div>
          <Button
            height={45}
            width={190}
            borderColor={theme.colors.gray}
            bgColor={theme.colors.gray}
            labelColor={theme.colors.black}
            label={<div>Add custom dish</div>}
            onClick={() => handleModal(true)}
          />
        </div>
      </HeaderContainer>
      <AddCustomDish active={activeModal} handler={handleModal} />
    </>
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

const ByColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 0;
`;

const NavButton = styled.div`
  cursor: pointer;
`;

const HeaderItem = styled(Typography)<{ active: boolean }>`
  margin: 0 25px;
  border-bottom: 2px solid ${(props) => (props.active ? 'black' : 'transparent')};
`;

export default Header;
