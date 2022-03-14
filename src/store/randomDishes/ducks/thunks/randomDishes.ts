import { createAsyncThunk } from '@reduxjs/toolkit';

import RandomDish from 'api/randomDish/randomDish';

export const fetchRandomRecipe = createAsyncThunk('randomDish', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await RandomDish.getRandomDish();
    return response;
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});
