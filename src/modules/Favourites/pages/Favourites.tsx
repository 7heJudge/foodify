import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useAppSelector } from 'store/store';
import { favouritesActions } from 'store/favourites/ducks/reducers/favourites';

import CardRecipe from 'common/components/CardRecipe/CardRecipe';
import Spacer from 'common/components/Spacer/Spacer';
import Typography from 'common/components/Typography/Typography';

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useAppSelector((state) => state.favourites.reducers.favourites);

  useEffect(() => {
    if (favourites.length) return;
    const localFavourites = JSON.parse(localStorage.getItem('favourites') as string) || [];
    dispatch(favouritesActions.addToFavourites(localFavourites));
  }, []);

  const renderContentCard = () => {
    return (
      <>
        {favourites.length ? (
          favourites.map((favourite, index) => (
            <CardWrapper key={`Favourite meal: ${index} + ${favourite.idMeal}`}>
              <CardRecipe
                title={favourite.strMeal}
                description={favourite.strInstructions}
                photo={favourite.strMealThumb}
              />
            </CardWrapper>
          ))
        ) : (
          <Typography text="No favorite Dish!" fontSize="fz48" fontColor="gray" />
        )}
      </>
    );
  };

  return (
    <>
      <Spacer height={147} />
      <CardsContainer>{renderContentCard()}</CardsContainer>
      <Spacer height={100} />
    </>
  );
};

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  margin-bottom: 50px;
`;

export default Favourites;
