import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import CardRecipe from 'common/components/CardRecipe/CardRecipe';
import Spacer from 'common/components/Spacer/Spacer';
import { Meal } from 'common/types/common.types';
import { useAppSelector } from 'store/store';
import { fetchRandomRecipe } from 'store/randomDishes/ducks/thunks/randomDishes';
import Button from 'common/Button/Button';
import theme from 'theme/theme';
import { favouritesActions } from 'store/favourites/ducks/reducers/favourites';
import WithRouteAnimation from '../../../common/hoc/WithRouteAnimation';

const RandomDish = () => {
  const dispatch = useDispatch();
  const randomDish = useAppSelector((state) => state.randomDishes.reducers.randomDish);
  const loading = useAppSelector((state) => state.randomDishes.reducers.isLoading);

  useEffect(() => {
    dispatch(fetchRandomRecipe());
  }, []);

  const fetchRecipe = () => {
    dispatch(fetchRandomRecipe());
  };

  const addToFavourites = (meal: Meal) => {
    const favourites = JSON.parse(localStorage.getItem('favourites') as string) || [];
    favourites.push(meal);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    dispatch(favouritesActions.addToFavourites([meal]));
    dispatch(fetchRandomRecipe());
  };

  return (
    <>
      <Spacer height={147} />
      <CardsContainer>
        <CardRecipe
          title={randomDish.strMeal}
          description={randomDish.strInstructions}
          photo={randomDish.strMealThumb}
        />
        <Spacer height={10} />
        <ActionWrapper>
          <ActionButton
            height={45}
            width={190}
            isLoading={loading}
            borderColor={theme.colors.lightGray}
            bgColor={theme.colors.lightGray}
            labelColor={theme.colors.black}
            label={<div>Skip</div>}
            onClick={fetchRecipe}
          />
          <ActionButton
            height={45}
            width={190}
            isLoading={loading}
            borderColor={theme.colors.lightGray}
            bgColor={theme.colors.lightGray}
            labelColor={theme.colors.black}
            label={<div>Like</div>}
            onClick={() => addToFavourites(randomDish)}
          />
        </ActionWrapper>
      </CardsContainer>
      <Spacer height={200} />
    </>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ActionButton = styled(Button)`
  margin: 0 5px;
`;

export default WithRouteAnimation(RandomDish);
