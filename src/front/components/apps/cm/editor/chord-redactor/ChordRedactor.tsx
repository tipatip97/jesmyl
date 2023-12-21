import { useEffect, useMemo, useState } from 'react';
import TheButton from '../../../../../complect/Button';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import useExer from '../../../../../complect/exer/useExer';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import mylib, { MyLib } from '../../../../../complect/my-lib/MyLib';
import { cmExer } from '../../Cm.store';
import ChordCard from '../../col/com/chord-card/ChordCard';
import { ChordPack, ChordTrack } from '../../col/com/chord-card/ChordCard.model';
import { useChords } from '../../col/com/chord-card/useChords';
import { correctChordNameReg } from '../Editor.complect';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import ChordRedactableTrack from './ChordRedactableTrack';
import './ChordRedactor.scss';

export default function ChordRedactor() {
  const chords = useChords();
  const [currentChord, setCurrentChord] = useState('');
  const [newChordName, setNewChordName] = useState('');
  const [isNewChord, setIsNewChord] = useState(false);
  const [redactableChords, updateRedactableChords] = useState<ChordPack>({});
  const redactableChord: ChordTrack = redactableChords[currentChord];
  const isExists = chords[currentChord];
  const [newNameError, setNewNameError] = useState('');
  const { exec } = useExer(cmExer);

  const setExecution = (pack = redactableChords) => {
    const value: ChordPack = {};
    MyLib.entries(pack).forEach(([chordName, track]) => {
      const realTrack = [...track];
      while (realTrack.at(-1) === 0) realTrack.pop();
      if (!mylib.isEq(chords[chordName], realTrack)) value[chordName] = realTrack as ChordTrack;
    });
    cmExer.set({
      action: 'updateChordTracksDict',
      method: 'set',
      value,
      prev: {},
      args: {
        value,
      },
    });
    exec();
  };

  useEffect(() => {
    setNewNameError(
      isNewChord
        ? correctChordNameReg.exec(newChordName)
          ? chords[newChordName] || redactableChords[newChordName]
            ? 'Такой аккорд существует'
            : ''
          : 'Не правильное написание аккорда'
        : '',
    );
  }, [newChordName, redactableChords, chords, isNewChord]);

  const chordNodes = useMemo(() => {
    const chordBoxes: Record<string, string[]> = {};
    let box: [string, number][] = [];
    const sorted = Object.entries({ ...redactableChords, ...chords }).sort();
    const pushBox = () => {
      const names = box
        .map(([name, lad]) => [name, Math.trunc(lad)] as [string, number])
        .sort(([aChord, aLad], [bChord, bLad]) => {
          return aLad - bLad ? aLad - bLad : aChord > bChord ? 1 : -1;
        })
        .map(([name]) => name);
      chordBoxes[names[0][0]] = names;
    };

    sorted.forEach(([chordName, [lad]]) => {
      const chordBase = box[0]?.[0]?.[0];
      if (chordBase === undefined || chordName.startsWith(chordBase)) {
        box.push([chordName, lad as number]);
      } else {
        pushBox();
        box = [[chordName, lad as number]];
      }
    });
    pushBox();

    return MyLib.entries(chordBoxes).map(([chordBase, names]) => {
      return (
        <div key={chordBase}>
          <div className={`sticky chord-base-title ${currentChord[0] === chordBase ? 'text-bold' : ''}`}>
            {chordBase}
          </div>
          {names.map((chordName) => {
            return (
              <div
                key={chordName}
                onClick={() => setCurrentChord(chordName)}
                className={`flex center margin-gap pointer ${currentChord === chordName ? 'text-underline' : ''} ${
                  redactableChords[chordName] ? 'color--3' : ''
                }`}
              >
                {chordName}
              </div>
            );
          })}
        </div>
      );
    });
  }, [chords, currentChord, redactableChords]);

  const modifyTrack = (map: (track: ChordTrack) => ChordTrack | void) => {
    let track: ChordTrack = mylib.clone(redactableChord);
    const newTrack = map(track);

    if (mylib.isArr(newTrack)) track = newTrack;

    const newRedactableChords = {
      ...redactableChords,
      [currentChord]: JSON.parse(JSON.stringify(track)).map((point: number) => point || 0),
    } as ChordPack;

    updateRedactableChords(newRedactableChords);

    setExecution(newRedactableChords);
  };

  return (
    <PhaseCmEditorContainer
      className="chord-redactor"
      contentClass={`chord-redactor-content ${isNewChord ? 'chord-addition' : ''}`}
      headTitle="Редактор аккордов"
      content={
        <>
          <div className="chord-list">
            <div className="chords-scroll">{chordNodes}</div>
            <div className="add-chord-button flex center">
              <EvaButton name="plus-circle" onClick={() => setIsNewChord(true)} />
            </div>
          </div>
          <div className="flex column center old-chord">
            {isNewChord ? (
              <>
                <KeyboardInput onInput={(value) => setNewChordName(value)} />
                {newNameError && <div className="error-message margin-gap">{newNameError}</div>}
                <div className="padding-giant-gap pointer" onClick={() => setIsNewChord(false)}>
                  Вернуться к редактированию
                </div>
              </>
            ) : currentChord ? (
              <>
                <h2 className="text-center">{currentChord}</h2>
                <ChordCard chordName={currentChord} />
              </>
            ) : (
              <div>Выбери аккорд для редактирования</div>
            )}
          </div>
          <div className="flex flex-gap column center new-chord">
            {currentChord || isNewChord ? (
              <>
                {redactableChord && !isNewChord && (
                  <ChordRedactableTrack modifyTrack={modifyTrack} redactableChord={redactableChord} />
                )}
                <TheButton
                  className="margin-big-gap"
                  confirm={!!redactableChord}
                  disabled={!!newNameError}
                  onClick={() => {
                    const newRedacts = { ...redactableChords };

                    if (isNewChord) {
                      setIsNewChord(false);
                      setNewNameError('');
                      setCurrentChord(newChordName);
                      newRedacts[newChordName] = [0];
                      updateRedactableChords(newRedacts);
                    } else if (redactableChord) {
                      setIsNewChord(false);
                      setNewNameError('');
                      if (!isExists) setCurrentChord('');
                      setNewChordName('');
                      delete newRedacts[currentChord];
                      updateRedactableChords(newRedacts);
                    } else {
                      newRedacts[currentChord] = chords[currentChord];
                      updateRedactableChords(newRedacts);
                    }
                    setExecution(newRedacts);
                  }}
                >
                  {isNewChord
                    ? 'Создать'
                    : redactableChord
                      ? isExists
                        ? 'Вернуть аккорд'
                        : 'Удалить аккорд'
                      : 'Редактировать'}
                </TheButton>
              </>
            ) : (
              <div>Выбери аккорд для редактирования</div>
            )}
          </div>
        </>
      }
    />
  );
}
