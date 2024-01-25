import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { JStorage } from '../../../complect/JStorage';
import { NavigationStorage } from '../../../complect/nav-configurer/Navigation.model';
import { BibleStorage } from './model';

export const strongStorage = new JStorage<NavigationStorage<BibleStorage>, BibleStorage>('bible');

const initialState: BibleStorage = {
  translationVersei: 0,
  translationBooki: 0,
  translationChapteri: 0,
  translationScreenConfigs: [],
  translationSearchZone: 'global',
  translationSearchTerm: '',
  translationAddressTerm: '',
  translationSearchResultSelected: null,
  translationSearchResultList: [],
  translationSlideSyncContentUpdatesNum: 0,
  translationTranslationJoinAddress: null,
  translationHistory: [],
  translationPlan: [],
};

export const slice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    ...strongStorage.initializators([
      'rules',
      'translationVersei',
      'translationBooki',
      'translationChapteri',
      'translationScreenConfigs',
      'translationSearchZone',
      'translationAddressTerm',
      'translationSearchTerm',
      'translationSearchResultList',
      'translationTranslationJoinAddress',
      'translationHistory',
      'translationPlan',
    ]),
    translationSlideSyncContentUpdatesNum: state => {
      state.translationSlideSyncContentUpdatesNum++;
    },
    translationSearchResultSelected: (state, action: PayloadAction<number | null>) => {
      state.translationSearchResultSelected = action.payload;
    },
  },
});

export const bibleStoreActions = slice.actions;
export const bibleReducer = slice.reducer;
