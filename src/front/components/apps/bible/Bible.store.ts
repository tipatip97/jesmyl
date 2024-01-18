import { createSlice } from '@reduxjs/toolkit';
import { JStorage } from '../../../complect/JStorage';
import { NavigationStorage } from '../../../complect/nav-configurer/Navigation.model';
import { BibleStorage } from './model';

export const strongStorage = new JStorage<NavigationStorage<BibleStorage>, BibleStorage>('bible');

const initialState: BibleStorage = {
  currentTranslationVersei: 0,
  currentTranslationBooki: 0,
  currentTranslationChapteri: 0,
  translationScreenConfigs: [],
};

export const slice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    ...strongStorage.initializators([
      'rules',
      'currentTranslationVersei',
      'currentTranslationBooki',
      'currentTranslationChapteri',
      'translationScreenConfigs',
    ]),
  },
});

export const bibleStoreActions = slice.actions;
export const bibleReducer = slice.reducer;
