import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../shared/store';

const fileAssociationsSelector = (state: RootState) => state.index.fileAssociations;

export const useMyFilesAssociates = () => useSelector(fileAssociationsSelector);
