import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRandomRecipe } from '../thunks/randomDishes';

import { Meal } from 'common/types/common.types';

type InitialState = {
  randomDish: Meal;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  randomDish: {
    idMeal: '',
    strMeal: '',
    strMealThumb: '',
    strInstructions: '',
  },
  isLoading: false,
  error: '',
};

export const randomDishes = createSlice({
  name: 'randomDishes',
  initialState,
  reducers: {
    fetchDish: (state, action: PayloadAction<Meal>) => {
      state.randomDish = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomRecipe.fulfilled, (state, action) => {
      state.randomDish = action.payload.meals[0];
      state.isLoading = false;
    });
    builder.addCase(fetchRandomRecipe.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchRandomRecipe.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const randomDishesActions = randomDishes.actions;

export default randomDishes.reducer;
