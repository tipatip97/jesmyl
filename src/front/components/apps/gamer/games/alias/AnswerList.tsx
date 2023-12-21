import React from 'react';
import useToast from '../../../../../complect/modal/useToast';
import EvaSendButton from '../../../../../complect/sends/eva-send-button/EvaSendButton';
import useAuth from '../../../../index/useAuth';
import { AliasWordInfo } from './Alias.model';
import { useAliasRejectWord, useAliasSimpleExecs } from './hooks/execs';
import { useAliasIsMySpeech, useAliasIsMyTeamByAuth } from './hooks/is-my-speech';
import { useAliasRoomState } from './hooks/state';

export default function AliasGameRoundResultsAnswerList({
  answers,
  myIncorrects,
}: {
  answers: AliasWordInfo[];
  myIncorrects?: boolean;
}) {
  const state = useAliasRoomState();
  const { fixWord } = useAliasSimpleExecs();
  const rejectWord = useAliasRejectWord();
  const [toastNode, showToast] = useToast();
  const isItMySpeech = useAliasIsMySpeech();
  const auth = useAuth();
  const isMyTeam = useAliasIsMyTeamByAuth(auth);

  const showKo = (message: string) => showToast(message, { mood: 'ko' });
  const showOk = (message: string) => showToast(message, { mood: 'ok' });

  if (state?.fix === undefined) return null;
  const fix = state?.fix;

  return (
    <>
      {toastNode}
      {answers?.map(({ wordi, word, minus, plus }) => {
        const isStriked = fix.includes(wordi);
        const scoreNum = (isStriked ? !myIncorrects : myIncorrects) ? -minus : plus;
        const isInvert =
          state.invert?.[wordi] &&
          (isItMySpeech ? state.invert[wordi].length : auth.login && state.invert[wordi].includes(auth.login));

        return (
          <React.Fragment key={word}>
            <div className="flex glex-gap">
              <div
                className={
                  'flex flex-gap' + (myIncorrects ? ' color--ko' : ' color--ok') + (isStriked ? ' text-strike' : '')
                }
              >
                {word}
              </div>
              {isItMySpeech && !isInvert ? (
                <EvaSendButton
                  name={`${(isStriked ? myIncorrects : !myIncorrects) ? 'minus-circle' : 'plus-circle'}${
                    isStriked ? '-outline' : ''
                  }`}
                  onSend={() => fixWord(wordi)}
                  className="margin-gap-l"
                  onFailure={showKo}
                  onSuccess={
                    isItMySpeech && myIncorrects && !isStriked ? () => showKo('Необходимо согласие соперников') : null
                  }
                />
              ) : (
                (isItMySpeech || !isMyTeam) && (
                  <EvaSendButton
                    name={`${myIncorrects ? 'checkmark-square-2' : 'alert-triangle'}${isStriked ? '-outline' : ''}`}
                    className={'margin-sm-gap-l' + (isInvert ? (myIncorrects ? ' color--ok' : ' color--ko') : '')}
                    onSend={() => (isItMySpeech ? fixWord(wordi) : rejectWord(wordi))}
                    onFailure={showKo}
                    onSuccess={
                      isItMySpeech
                        ? !myIncorrects && isInvert
                          ? isStriked
                            ? () => showKo('У соперников есть возражение')
                            : () => showOk('Возражение соперников удовлетворено')
                          : null
                        : null
                    }
                  />
                )
              )}
              <span className={`${scoreNum > 0 ? 'color--ok' : 'color--ko'} margin-gap-l`}>
                {scoreNum > 0 ? '+' : ''}
                {scoreNum}
              </span>
            </div>

            {isItMySpeech && (
              <div className="margin-gap-l">
                {!myIncorrects && !isStriked && isInvert
                  ? `(есть возражение соперников ${state.invert?.[wordi].length})`
                  : myIncorrects && isStriked && !isInvert && '(нет согласных соперников)'}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
