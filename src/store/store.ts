import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import randomDishes from './randomDishes/ducks/reducers';
import favourites from './favourites/ducks/reducers';

export const store = configureStore({
  reducer: {
    randomDishes,
    favourites,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
