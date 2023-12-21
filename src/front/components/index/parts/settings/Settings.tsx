import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppName, appNames } from '../../../../app/App.model';
import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import EvaButton from '../../../../complect/eva-icon/EvaButton';
import EvaIcon from '../../../../complect/eva-icon/EvaIcon';
import modalService from '../../../../complect/modal/Modal.service';
import useToast from '../../../../complect/modal/useToast';
import mylib from '../../../../complect/my-lib/MyLib';
import Noty from '../../../../complect/notifications/Noti';
import useApps from '../../../../complect/useApps';
import { RootState } from '../../../../shared/store';
import { soki } from '../../../../soki';
import di from '../../Index.store';
import PhaseIndexContainer from '../../complect/PhaseIndexContainer';
import useAuth from '../../useAuth';
import useConnectionState from '../../useConnectionState';
import { Visitor } from './Visitor';
import { Visits } from './Visits';

const isUseNativeKeyboardSelector = (state: RootState) => state.index.isUseNativeKeyboard;
const statisticSelector = (state: RootState) => state.index.statistic;

const visitorsDeclension = (num: number) => `${num} ${mylib.declension(num, 'челикс', 'челикса', 'челиксов')}`;

let pushTimestampDir = 0;

export default function IndexSettings() {
  const auth = useAuth();
  const dispatch = useDispatch();
  const isUseNativeKeyboard = useSelector(isUseNativeKeyboardSelector);
  const statistic = useSelector(statisticSelector);
  const [expands, setExpands] = useState<(AppName | '')[]>([]);
  const [modalNode, toast] = useToast();
  const { appConfigs } = useApps();

  useEffect(() => {
    soki.send({ subscribe: 'statistic' }, 'index');
    return () => {
      soki.send({ unsubscribe: 'statistic' }, 'index');
    };
  }, []);

  const settingsList = [
    (auth.level || 0) >= 50 && (
      <BrutalItem
        icon="sync"
        title="Перечитать файлы"
        onClick={async () => {
          const passphrase = await modalService.prompt('пароль');
          passphrase && soki.send({ system: { name: 'reloadFiles', passphrase } }, 'index');
        }}
      />
    ),
    (auth.level || 0) >= 80 && (
      <BrutalItem
        icon="sync"
        title="Перезапустить сокет"
        onClick={async () => {
          const passphrase = await modalService.prompt('пароль');
          passphrase && soki.send({ system: { name: 'restartWS', passphrase } }, 'index');
        }}
      />
    ),
    <BrutalItem
      icon="keypad-outline"
      title="Фирменная клавиатура"
      onClick={async () => {
        dispatch(di.isUseNativeKeyboard());
      }}
      box={<EvaIcon name={isUseNativeKeyboard ? 'square-outline' : 'checkmark-square-2-outline'} />}
    />,
    <BrutalItem
      icon="message-square-outline"
      title="Проверить PUSH"
      onClick={() => {
        Noty.checkPermission()
          ?.then(res => toast(`PUSH состояние: ${res}`))
          .catch(() => toast('Ошибка при открытии PUSH', { mood: 'ko' }));

        Noty.simpleNotify('Проверка PUSH', 'Успех!! ', {
          data: { key: 'evennnt' },
          timestamp: Date.now() + 300000 * (pushTimestampDir = +!pushTimestampDir),
        });
      }}
    />,
  ].filter(isShow => isShow);
  const connectionNode = useConnectionState('margin-gap');

  return (
    <PhaseIndexContainer
      className="index-settings"
      headTitle="Настройки"
      head={connectionNode}
      content={
        <>
          {modalNode}
          {settingsList.length ? (
            settingsList.map((button, buttoni) => {
              return <React.Fragment key={buttoni}>{button}</React.Fragment>;
            })
          ) : (
            <div className="text-center">Раздел пуст</div>
          )}
          {auth && (
            <>
              <h2>Статистика:</h2>
              {statistic ? (
                <>
                  <div className="margin-gap-v">
                    <div>
                      <span className="color--7">В сети</span> {visitorsDeclension(statistic.online)}
                    </div>
                    <div>
                      <span className="color--7">Авторизованых </span>
                      {statistic.authed ? visitorsDeclension(statistic.authed) : ' нет'}
                    </div>
                    <div className="flex flex-gap">
                      <span className="color--7">Посещений за день </span>
                      {statistic.visits.length ? statistic.visits.length : ' нет'}
                      {(auth.level >= 80 || expands.includes('')) && (
                        <EvaButton
                          name={expands.includes('') ? 'chevron-up' : 'chevron-down'}
                          onClick={() =>
                            setExpands(expands.includes('') ? expands.filter(name => name !== '') : [...expands, ''])
                          }
                        />
                      )}
                    </div>
                  </div>
                  {expands.includes('') && <Visits statistic={statistic} />}
                  {appNames.map(appName => {
                    const app = appConfigs[appName];
                    if (appName === 'index' || (app.nav.nav.level !== undefined && app.nav.nav.level > auth.level))
                      return null;
                    const visitorCount = statistic.usages[appName]?.length || 0;

                    return (
                      <div key={appName}>
                        <div className="flex flex-gap">
                          В "{app.nav.nav.title}"
                          {visitorCount ? (
                            <span className="color--7">{visitorsDeclension(visitorCount)}</span>
                          ) : (
                            <span className="color--3">Никого</span>
                          )}
                          {((!!visitorCount && auth.level >= 80) || expands.includes(appName)) && (
                            <EvaButton
                              name={expands.includes(appName) ? 'chevron-up' : 'chevron-down'}
                              onClick={() =>
                                setExpands(
                                  expands.includes(appName)
                                    ? expands.filter(name => name !== appName)
                                    : [...expands, appName],
                                )
                              }
                            />
                          )}
                        </div>
                        <div className="margin-big-gap-l">
                          {expands.includes(appName) &&
                            statistic.usages[appName]?.map((usage, usagei) => (
                              <Visitor
                                key={usagei}
                                visitor={usage}
                              />
                            ))}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                'Нет данных'
              )}
            </>
          )}
        </>
      }
    />
  );
}
