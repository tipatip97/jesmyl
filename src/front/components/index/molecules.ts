import { useParams } from 'react-router-dom';
import { AppName } from '../../app/App.model';
import { atomValueSetter, getAtomValue, Molecule, useAtom, useAtomSet, useAtomValue } from '../../complect/atoms';
import { LocalSokiAuth } from '../../models';
import { IndexState } from './Index.model';

export const indexMolecule = new Molecule<IndexState>(
  {
    auth: { level: 0 },
    currentApp: 'cm',
    appVersion: 0,
    schedules: { list: [] },
    statistic: null,
    liveData: {},
    rules: [],
    appFontFamily: null,
    fileAssociations: {} as never,
    nounPronsWords: { nouns: {}, pronouns: {} },
    updateRequisites: {},
  },
  'index',
);
const schedulesAtom = indexMolecule.select(s => s.schedules);

export const useIndexSchedules = () => useAtomValue(schedulesAtom);
export const useIndexFileAssociations = () => useAtomValue(indexMolecule.take('fileAssociations'));
export const useIndexNounPronsWords = () => useAtomValue(indexMolecule.take('nounPronsWords'));
export const useIndexLiveData = () => useAtomValue(indexMolecule.take('liveData'));

const authAtom = indexMolecule.select(s => s.auth);

export const useAuth = () => useAtomValue(authAtom);
export const useAuthState = () => useAtom(authAtom);
export const useSetAuth = () => useAtomSet(authAtom);

export const useAppFontFamilyAtom = () => useAtom(indexMolecule.take('appFontFamily'));

export const getAuthValue = async () => await getAtomValue(authAtom);
export const setAuthValue = (value: LocalSokiAuth) => atomValueSetter<LocalSokiAuth>(authAtom)(value);

export const getUpdateRequisitesValue = async () => await getAtomValue(indexMolecule.take('updateRequisites'));

export const setUpdateRequisitesValue = atomValueSetter(indexMolecule.take('updateRequisites'));
export const removePullRequisites = () => setUpdateRequisitesValue(null);

export const useCurrentApp = () => useParams().appName as AppName | und;
