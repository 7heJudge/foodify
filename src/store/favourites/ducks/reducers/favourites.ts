import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Meal } from 'common/types/common.types';

type InitialState = {
  favourites: Meal[];
};

const initialState: InitialState = {
  favourites: [],
};

export const favourites = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<Meal[]>) => {
      state.favourites.push(...action.payload);
    },
  },
});

export const favouritesActions = favourites.actions;

export default favourites.reducer;
