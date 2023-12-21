import { createSlice } from '@reduxjs/toolkit';
import { JStorage } from '../JStorage';
import { NavigationStorage } from '../nav-configurer/Navigation.model';
import { StrongState } from './Strong.model';

export const strongStorage = new JStorage<NavigationStorage<StrongState>, StrongState>('strong');

const initialState: StrongState = {
  clipboard: { items: {} },
};

export const slice = createSlice({
  name: 'strong',
  initialState,
  reducers: {
    ...strongStorage.initializators(['clipboard']),
  },
});

export default slice.actions;
export const strongReducer = slice.reducer;
