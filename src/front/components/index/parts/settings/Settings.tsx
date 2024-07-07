import React, { useEffect, useState } from 'react';
import { AppName, appNames } from '../../../../app/App.model';
import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import useToast from '../../../../complect/modal/useToast';
import mylib from '../../../../complect/my-lib/MyLib';
import Noty from '../../../../complect/notifications/Noti';
import IconButton from '../../../../complect/the-icon/IconButton';
import IconCheckbox from '../../../../complect/the-icon/IconCheckbox';
import { IconArrowDownDoubleStrokeRounded } from '../../../../complect/the-icon/icons/arrow-down-double';
import { IconArrowUpDoubleStrokeRounded } from '../../../../complect/the-icon/icons/arrow-up-double';
import { IconKeyboardStrokeRounded } from '../../../../complect/the-icon/icons/keyboard';
import { IconMessage01StrokeRounded } from '../../../../complect/the-icon/icons/message-01';
import { IconPaintBoardStrokeRounded } from '../../../../complect/the-icon/icons/paint-board';
import { IconSourceCodeCircleStrokeRounded } from '../../../../complect/the-icon/icons/source-code-circle';
import { IconTextStrokeRounded } from '../../../../complect/the-icon/icons/text';
import useApps from '../../../../complect/useApps';
import { soki } from '../../../../soki';
import PhaseIndexContainer from '../../complect/PhaseIndexContainer';
import { indexSimpleValIsPlayAnimations, indexSimpleValIsUseNativeKeyboard } from '../../complect/index.simpleValues';
import useIndexNav from '../../complect/useIndexNav';
import { useAppFontFamilyAtom, useAuth, useIndexStatistic } from '../../molecules';
import useConnectionState from '../../useConnectionState';
import { FontFamilySelector } from '../actions/files/complect/FontFamilySelector';
import { Visitor } from './Visitor';
import { Visits } from './Visits';

const visitorsDeclension = (num: number) => `${num} ${mylib.declension(num, 'челикс', 'челикса', 'челиксов')}`;

export default function IndexSettings() {
  const auth = useAuth();
  const statistic = useIndexStatistic();
  const [expands, setExpands] = useState<(AppName | '')[]>([]);
  const [modalNode, toast] = useToast();
  const [errorToastNode, errorToast] = useToast({ mood: 'ko' });
  const { appConfigs } = useApps(errorToast);
  const { goTo } = useIndexNav();
  const [appFontFamily, setAppFontFamily] = useAppFontFamilyAtom();

  useEffect(() => {
    soki.send({ subscribe: 'statistic' }, 'index');
    return () => {
      soki.send({ unsubscribe: 'statistic' }, 'index');
    };
  }, []);

  const settingsList = [
    auth.level === 100 && (
      <BrutalItem
        icon={<IconSourceCodeCircleStrokeRounded />}
        title="Консоль"
        onClick={() => goTo('console')}
      />
    ),
    <BrutalItem
      icon={<IconKeyboardStrokeRounded />}
      title="Фирменная клавиатура"
      onClick={indexSimpleValIsUseNativeKeyboard.switch}
      box={
        <IconCheckbox
          simpleValuer={indexSimpleValIsUseNativeKeyboard}
          negativeValue
        />
      }
    />,
    <BrutalItem
      icon={<IconPaintBoardStrokeRounded />}
      title="Анимации"
      onClick={indexSimpleValIsPlayAnimations.switch}
      box={<IconCheckbox simpleValuer={indexSimpleValIsPlayAnimations} />}
    />,
    <BrutalItem
      icon={<IconMessage01StrokeRounded />}
      title="Проверить PUSH"
      onClick={() => {
        Noty.checkPermission()
          ?.then(res => toast(`PUSH состояние: ${res}`))
          .catch(() => toast('Ошибка при открытии PUSH', { mood: 'ko' }));
      }}
    />,
    <BrutalItem
      icon={<IconTextStrokeRounded />}
      title="Шрифт"
      box={
        <FontFamilySelector
          fontFamily={appFontFamily}
          onSelect={setAppFontFamily}
        />
      }
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
          {errorToastNode}
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
                        <IconButton
                          Icon={
                            expands.includes('') ? IconArrowUpDoubleStrokeRounded : IconArrowDownDoubleStrokeRounded
                          }
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
                            <IconButton
                              Icon={
                                expands.includes(appName)
                                  ? IconArrowUpDoubleStrokeRounded
                                  : IconArrowDownDoubleStrokeRounded
                              }
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
