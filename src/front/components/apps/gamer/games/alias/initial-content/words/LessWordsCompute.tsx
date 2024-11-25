import { mylib } from 'front/utils';
import { useAliasRoomState } from '../../hooks/state';

export const AliasRoomLessWordsCompute = () => {
  const state = useAliasRoomState();

  if (!state) return null;

  return (
    <span className={state.arsenal < 30 ? 'color--ko' : ''}>
      В игре осталось {state.arsenal}
      {mylib.declension(state.arsenal, ' слово', ' слова', ' слов')}
    </span>
  );
};
