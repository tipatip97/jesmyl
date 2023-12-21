import { useEffect, useState } from 'react';
import Dropdown from '../../../../../../../complect/dropdown/Dropdown';
import EvaButton from '../../../../../../../complect/eva-icon/EvaButton';
import EvaCheckbox from '../../../../../../../complect/eva-icon/EvaCheckbox';
import useFullContent from '../../../../../../../complect/fullscreen-content/useFullContent';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useAliasPacks } from '../../hooks/packs';
import { useAliasRoomState } from '../../hooks/state';
import { useTokenSortedWordsNaked } from '../../hooks/token-sorted-words';
import { AliasRoomLessWordsCompute } from './LessWordsCompute';
import { AliasSelectedDictsTextInfo, levelGradationTitles } from './SelectedDictsTextInfo';

const dreamItems = [10, 30, 50, 70, 100].map(id => ({
  title: `${id} слов`,
  id,
}));

export interface AliasDictsPropsPart {
  dream: number;
  dicts: number[];
  isResortWords: boolean;
}

export const initialAliasDictsPropsPart: AliasDictsPropsPart = {
  dicts: [],
  dream: 50,
  isResortWords: false,
};

interface Props {
  setIsDictsRejToStart: (is: boolean) => void;
  stateRef: React.MutableRefObject<AliasDictsPropsPart>;
}

export const AliasRoomWordsConfigures = ({ setIsDictsRejToStart, stateRef }: Props) => {
  const state = useAliasRoomState();
  const packs = useAliasPacks();
  const infos = useTokenSortedWordsNaked();

  const [isResortWordsState, setIsResortWords] = useState(initialAliasDictsPropsPart.isResortWords);

  const [dicts, setDicts] = useState(state?.dicts || initialAliasDictsPropsPart.dicts);
  stateRef.current.dicts = dicts;

  const [dream, setDream] = useState(state?.dream || initialAliasDictsPropsPart.dream);
  stateRef.current.dream = dream;

  const isForceResortWords = !mylib.isEq(dicts, state?.dicts);
  const isResortWords = (stateRef.current.isResortWords = isResortWordsState || isForceResortWords);

  useEffect(() => {
    setIsDictsRejToStart(
      (!state && !dicts.length) || !!(state && !(infos.length - (state.wordsi || 0)) && !isResortWords),
    );
  }, [dicts.length, infos.length, isResortWords, setIsDictsRejToStart, state]);

  const [dictsSelectorNode, openSelectorDicts] = useFullContent(() => {
    return (
      <>
        {packs.map((pack, packi) => {
          let selectNode = null;
          const onSelect = (id: number) => {
            const newDicts: number[] = [...dicts];
            newDicts[packi] = id;

            while (newDicts[newDicts.length - 1] === 0) newDicts.pop();

            setDicts(newDicts);
          };

          if (mylib.isNum(pack.words)) {
            if (pack.variants)
              selectNode = (
                <Dropdown
                  id={dicts[packi]}
                  items={pack.variants.map(count => ({
                    title: `${count} слов`,
                    id: count,
                  }))}
                  onSelectId={onSelect}
                />
              );
          } else {
            const levels: number[] = [0];
            Object.values(pack.words).forEach(num => (levels[num] = (levels[num] || 0) + 1));

            selectNode = (
              <Dropdown
                id={dicts[packi]}
                items={levels.map((_, leveli) => ({
                  title: `${levelGradationTitles[leveli]}${leveli ? ` (${levels[leveli]} сл.)` : ''}`,
                  id: leveli,
                }))}
                onSelectId={onSelect}
              />
            );
          }

          return (
            <div
              key={pack.title}
              className="flex flex-gap margin-gap-v dropdown-ancestor"
            >
              {pack.title}
              {selectNode}
            </div>
          );
        })}
      </>
    );
  });

  return (
    <>
      {dictsSelectorNode}
      {state && (
        <EvaCheckbox
          checked={isResortWords}
          onChange={setIsResortWords}
          disabled={isForceResortWords}
          postfix="Перемешать слова"
        />
      )}
      <EvaButton
        name="book-outline"
        className="color--3 margin-gap-t"
        postfix={<AliasSelectedDictsTextInfo dicts={dicts} />}
        onClick={() => openSelectorDicts()}
      />
      {state && !isResortWords && (
        <EvaButton
          name="book-open-outline"
          className={'margin-gap-t ' + (infos.length - 1 === state.wordsi ? ' color--ko ' : '')}
          postfix={<AliasRoomLessWordsCompute />}
        />
      )}
      <div className="flex flex-gap margin-gap-v dropdown-ancestor">
        <EvaButton
          name="award-outline"
          className="nowrap"
          postfix="Цель раунда"
        />
        <Dropdown
          id={dream}
          items={dreamItems}
          onSelectId={setDream}
        />
      </div>
    </>
  );
};
