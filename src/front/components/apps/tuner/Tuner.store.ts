import { createSlice } from '@reduxjs/toolkit';
import { TunerState } from './Tuner.model';

const initialState: TunerState = {};

export const slice = createSlice({
  name: 'tuner',
  initialState,
  reducers: {},
});

export default slice.actions;

export const tunerReducer = slice.reducer;
