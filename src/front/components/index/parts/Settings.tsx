import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppName } from "../../../app/App.model";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import EvaButton from "../../../complect/eva-icon/EvaButton";
import modalService from "../../../complect/modal/Modal.service";
import mylib from "../../../complect/my-lib/MyLib";
import { RootState } from "../../../shared/store";
import { soki } from "../../../soki";
import PhaseIndexContainer from "../complect/PhaseIndexContainer";
import { switchIsUseNativeKeyboard } from "../Index.store";
import useAuth from "../useAuth";

const isUseNativeKeyboardSelector = (state: RootState) => state.index.isUseNativeKeyboard;
const statisticSelector = (state: RootState) => state.index.statistic;
const appsSelector = (state: RootState) => state.index.apps;

const visitorsDeclension = (num: number) => `${num} ${mylib.declension(num, 'челикс', 'челикса', 'челиксов')}`;

export default function IndexSettings() {
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const isUseNativeKeyboard = useSelector(isUseNativeKeyboardSelector);
  const statistic = useSelector(statisticSelector);
  const apps = useSelector(appsSelector);
  const [expands, setExpands] = useState<AppName[]>([]);

  useEffect(() => {
    soki.send({ subscribe: 'statistic' });
    return () => {
      soki.send({ unsubscribe: 'statistic' });
    };
  }, []);

  const settingsList = [
    (auth?.level || 0) >= 50 && <BrutalItem
      icon="sync"
      title="Перечитать файлы"
      onClick={async () => {
        const passphrase = await modalService.prompt('пароль');
        passphrase && soki.send({ system: { name: 'reloadFiles', passphrase } });
      }}
    />,
    (auth?.level || 0) >= 80 && <BrutalItem
      icon="sync"
      title="Перезапустить сокет"
      onClick={async () => {
        const passphrase = await modalService.prompt('пароль');
        passphrase && soki.send({ system: { name: 'restartWS', passphrase } });
      }}
    />,
    <BrutalItem
      icon="keypad-outline"
      title="Фирменная клавиатура"
      onClick={async () => { dispatch(switchIsUseNativeKeyboard()) }}
      box={<input type="checkbox" checked={!isUseNativeKeyboard} onChange={() => { }} />}
    />,
  ].filter((isShow) => isShow);

  return (
    <PhaseIndexContainer
      topClass="index-settings"
      head="Настройки"
      content={<>
        {
          settingsList.length
            ? settingsList.map((button, buttoni) => {
              return <React.Fragment key={`k-${buttoni}`}>{button}</React.Fragment>
            })
            : <div className="text-center">Раздел пуст</div>
        }
        {auth && <>
          <h2>Статистика:</h2>
          {statistic ? <>
            <div className="margin-gap-v">
              <div><span className="color--7">В сети</span> {visitorsDeclension(statistic.online)}</div>
              <div><span className="color--7">Авторизованых </span>{statistic.authed ? visitorsDeclension(statistic.authed) : ' нет'}</div>
            </div>
            {apps.map((app) => {
              const visitorCount = statistic.usages[app.name]?.length || 0;

              return <div key={app.name}>
                <div className="flex flex-gap">В "{app.title}"
                  {visitorCount
                    ? <span className="color--7">{visitorsDeclension(visitorCount)}</span>
                    : <span className="color--3">Никого</span>}
                  {((!!visitorCount && auth.level >= 80) || expands.includes(app.name)) && <EvaButton
                    name={expands.includes(app.name) ? "chevron-up" : "chevron-down"}
                    onClick={() => setExpands(expands.includes(app.name) ? expands.filter(name => name !== app.name) : [...expands, app.name])}
                  />}
                </div>
                {expands.includes(app.name) && statistic.usages[app.name]?.map((fio, fioi) => {
                  return <div key={`${fioi}`} className="margin-gap-h">
                    {fio
                      ? <span className="color--3">{fio}</span>
                      : <span className="color--ko">Неизвестный</span>}
                  </div>;
                })}
              </div>
            })}
          </> : 'Нет данных'}
        </>}
      </>}
    />
  );
}
