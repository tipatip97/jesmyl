import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import di from './Gamer.store';
import gamerStorage from './gamerStorage';

export default function GamerApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  gamerStorage.initDispatches(dispatch, di);

  return <>{content}</>;
}
