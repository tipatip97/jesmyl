import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/store';
import { riseUpExerUpdates } from '../../Complect.store';
import '../Exec.scss';

const numExerUpdatesSelector = (state: RootState) => state.complect.numExerUpdates;

export const useExerExec = () => {
  const dispatch = useDispatch();
  useSelector(numExerUpdatesSelector);

  return useCallback(
    <Value>(value?: Value) => {
      dispatch(riseUpExerUpdates());
      return value;
    },
    [dispatch],
  );
};
