import React from 'react';
import styled from 'styled-components';

import logo from 'logo.svg';

import theme from 'theme/theme';
import Typography from '../Typography/Typography';
import Spacer from '../Spacer/Spacer';

type CardRecipeProps = {
  photo?: string;
  title: string;
  description: string;
};

const CardRecipe = ({ title, photo, description }: CardRecipeProps) => {
  return (
    <CardContainer>
      <Image src={photo || logo} />
      <Content>
        <SliceTypography
          text={title}
          fontWeight="bold"
          fontSize="fz36"
          fontColor="black"
          line={1}
        />
        <Spacer height={30} />
        <SliceTypography text={description} fontSize="fz18" fontColor="black" line={5} />
      </Content>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${theme.colors.lightGray};
  max-width: 390px;
  min-height: 495px;
  margin: 0 15px;
`;

const Image = styled.img`
  max-width: 390px;
`;

const SliceTypography = styled(Typography)<{ line: number }>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line};
  -webkit-box-orient: vertical;
`;

const Content = styled.div`
  padding: 35px 30px 35px 30px;
`;

export default CardRecipe;
