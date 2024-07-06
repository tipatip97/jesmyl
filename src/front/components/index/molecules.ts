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
    deviceId: '',
    liveData: {},
    rules: [],
  },
  'index',
);

export const useIndexAppVersion = () => useAtomValue(indexMolecule.take('appVersion'));
export const useIndexStatistic = () => useAtomValue(indexMolecule.take('statistic'));
export const useIndexSchedules = () => useAtomValue(indexMolecule.take('schedules'));
export const useIndexFileAssociations = () => useAtomValue(indexMolecule.take('fileAssociations'));
export const useIndexNounPronsWords = () => useAtomValue(indexMolecule.take('nounPronsWords'));
export const useIndexLiveData = () => useAtomValue(indexMolecule.take('liveData'));

export const deviceIdAtom = indexMolecule.take('deviceId');
const authAtom = indexMolecule.take('auth');

export const useDeviceId = () => useAtomValue(deviceIdAtom);

export const useAuth = () => useAtomValue(authAtom);
export const useAuthState = () => useAtom(authAtom);
export const useSetAuth = () => useAtomSet(authAtom);

export const useAppFontFamilyAtom = () => useAtom(indexMolecule.take('appFontFamily'));

export const getAuthValue = async () => await getAtomValue(authAtom);
export const setAuthValue = (value: LocalSokiAuth) => atomValueSetter<LocalSokiAuth>(authAtom)(value);

export const getUpdateRequisitesValue = async () => await getAtomValue(indexMolecule.take('updateRequisites'));

export const setUpdateRequisitesValue = atomValueSetter(indexMolecule.take('updateRequisites'));
export const removePullRequisites = () => setUpdateRequisitesValue(null);

export const useCurrentApp = () => useAtom(indexMolecule.take('currentApp'));
export const getCurrentAppValue = async () => await getAtomValue(indexMolecule.take('currentApp'));
