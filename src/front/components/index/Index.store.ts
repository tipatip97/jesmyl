import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exer } from '../../complect/exer/Exer';
import { IndexState, IndexStateError } from './Index.model';
import indexStorage from './indexStorage';

export const indexExer = new Exer('index', indexStorage);
export const defaultAppName = 'cm';

const initialState: IndexState = {
  currentApp: defaultAppName,
  appVersion: 0,
  auth: { level: 0 },
  schedules: { list: [] },
  errors: {},
  statistic: null,
  deviceId: '',
  liveData: {},
};

export const slice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    ...indexStorage.initializators([
      'appVersion',
      'auth',
      'currentApp',
      'errors',
      'registeredApps',
      'rejectedComponents',
      'rules',
      'schedules',
      'statistic',
      'theme',
      'updateRequisites',
      'updateOnRefresher',
      'deviceId',
      'nounPronsWords',
      'fileAssociations',
      'appFontFamily',
    ]),
    setError: (state, action: PayloadAction<IndexStateError>) => {
      if (action.payload.scope) {
        if (action.payload.message == null) delete state.errors[action.payload.scope];
        else state.errors[action.payload.scope] = action.payload.message;
      }
    },
  },
});

const indexStoreActions = slice.actions;

export default indexStoreActions;

export const indexReducer = slice.reducer;
