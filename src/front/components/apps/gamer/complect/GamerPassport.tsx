import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TheButton from '../../../../complect/Button';
import KeyboardInput from '../../../../complect/keyboard/KeyboardInput';
import mylib from '../../../../complect/my-lib/MyLib';
import useQRMaster from '../../../../complect/qr-code/useQRMaster';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconEdit02StrokeRounded } from '@icons/edit-02';
import { IconQrCodeStrokeRounded } from '@icons/qr-code';
import { LocalSokiAuth } from '../../../../models';
import useAuth from '../../../index/useAuth';
import { GamerPassport } from '../Gamer.model';
import di from '../Gamer.store';
import useGamerNav from '../useGamerNav';
import PhaseGamerContainer from './PhaseGamerContainer';
import { useGamerOfflineRoomsPassport, useGamerOfflineRoomsPassportData } from './rooms/offline-room/hooks/passport';

export default function TheGamerPassport() {
  const dispatch = useDispatch();
  const authData = useAuth();
  const passport = useGamerOfflineRoomsPassport();
  const passportData = useGamerOfflineRoomsPassportData();
  const [isEdit, setIsEdit] = useState(!passport);
  const [fio, setFio] = useState(passport?.fio || '');
  const { nav } = useGamerNav();
  const { shareQrData, qrNode } = useQRMaster();

  const back = (data: GamerPassport | LocalSokiAuth | nil) => {
    setFio(data?.fio || '');
    setIsEdit(!data);
  };

  return (
    <PhaseGamerContainer
      className="spy-passport"
      withoutBackButton
      headTitle="Паспорт"
      content={
        <>
          {qrNode}
          {isEdit && (
            <div className="flex center margin-big-gap">
              <KeyboardInput
                value={fio}
                placeholder="Твой ник-нейм"
                onChange={value => setFio(value)}
                maxLength={50}
              />
            </div>
          )}
          {isEdit ? (
            <div>
              <div className="flex center flex-wrap flex-gap">
                <TheButton
                  className="margin-gap"
                  disabled={!fio || fio === passport?.fio}
                  onClick={() => {
                    setIsEdit(false);
                    dispatch(
                      di.passport({
                        fio,
                        nick: passportData?.nick,
                        login: passportData?.login || 'G' + mylib.md5(`${fio} ${Date.now() + Math.random()}`).slice(1),
                      }),
                    );
                  }}
                >
                  {passport ? 'Обновить' : 'Создать'} паспорт
                </TheButton>
                {passportData && (
                  <TheButton
                    className="margin-gap"
                    disabled={!fio}
                    confirm
                    onClick={() => {
                      back(authData);
                      dispatch(di.passport(null));
                    }}
                  >
                    Сбросить данные
                  </TheButton>
                )}
              </div>
              <div
                className="flex center padding-giant-gap pointer"
                onClick={() => back(passport)}
              >
                Назад
              </div>
            </div>
          ) : (
            <>
              <h2 className="flex center passport-name">
                <div className="name ellipsis">{passport?.fio}</div>
                <IconButton
                  Icon={IconEdit02StrokeRounded}
                  onClick={() => setIsEdit(true)}
                />
              </h2>
              {passport && (
                <div className="flex center margin-big-gap">
                  <div
                    className="flex center flex-gap margin-big-gap pointer"
                    onClick={() => {
                      if (passport.login && passport.fio) shareQrData(nav, 'passport', [passport.login, passport.fio]);
                    }}
                  >
                    <IconQrCodeStrokeRounded />
                    Предъявить
                  </div>
                </div>
              )}
            </>
          )}
        </>
      }
    />
  );
}
