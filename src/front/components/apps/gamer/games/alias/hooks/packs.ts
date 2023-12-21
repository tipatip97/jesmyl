import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../shared/store';

const selector = (state: RootState) => state.gamer.aliasWordPacks;

export const useAliasPacks = () => useSelector(selector);
