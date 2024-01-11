import { useState } from 'react';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import { useCheckIsAccessed } from '../../../../../complect/exer/hooks/check-is-accessed';
import useIsExpand from '../../../../../complect/expand/useIsExpand';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import useAuth from '../../../../index/useAuth';
import { gamerExer } from '../../Gamer.store';
import { useSpyLocations } from './hooks/locations';

const incorrectNameReg = /[^а-яё -]+|[- ]{2,}|^[ -]|[ -]$/i;

export default function SpyLocations() {
  const [isOpenAdder, setIsOpenAdder] = useState(false);
  const [newName, setNewName] = useState('');
  const [title, isExpand] = useIsExpand(false, <h2>Все локации</h2>);

  const locations = useSpyLocations();
  const auth = useAuth();
  const checkIsAccessed = useCheckIsAccessed(auth);

  const isShortNewName = newName.length < 3;
  const incorrectsInNewName = newName.match(incorrectNameReg);
  const upperName = newName.toUpperCase();
  const isInclusiveNewName = locations?.some(loc => loc === upperName);

  return (
    <>
      {title}
      {isExpand && (
        <>
          <div>{locations?.map(location => <div key={location}>{location}</div>)}</div>
          {!isOpenAdder && checkIsAccessed(50) && (
            <EvaButton
              className="margin-gap color--ok"
              name="plus-circle-outline"
              onClick={() => setIsOpenAdder(is => !is)}
            />
          )}
          {isOpenAdder && (
            <div className="margin-big-gap-v">
              <div className="full-width">
                Новая локация
                <KeyboardInput
                  value={newName}
                  onChange={value => setNewName(value)}
                />
              </div>
              {isInclusiveNewName && <div className="error-message text-center">Такая локация уже существует</div>}
              {incorrectsInNewName && (
                <div className="error-message text-center">Некорректное название ({incorrectsInNewName})</div>
              )}
              {isShortNewName && <div className="error-message text-center">Минимум 3 символа для названия</div>}

              <div className="flex center margin-big-gap">
                <SendButton
                  title="Отправить локацию"
                  onSuccess={() => setNewName('')}
                  disabled={isInclusiveNewName || !!incorrectsInNewName || isShortNewName}
                  onSend={() => {
                    return gamerExer.send({
                      action: 'addNewLocation',
                      method: 'push',
                      args: {
                        location: upperName,
                      },
                    });
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
