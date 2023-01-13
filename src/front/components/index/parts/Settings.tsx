import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import modalService from "../../../complect/modal/Modal.service";
import { RootState } from "../../../shared/store";
import { soki } from "../../../soki";
import PhaseIndexContainer from "../complect/PhaseIndexContainer";
import { switchIsUseNativeKeyboard } from "../Index.store";
import useAuth from "../useAuth";

const isUseNativeKeyboardSelector = (state: RootState) => state.index.isUseNativeKeyboard;

export default function IndexSettings() {
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const isUseNativeKeyboard = useSelector(isUseNativeKeyboardSelector);

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
      box={<input type="checkbox" checked={isUseNativeKeyboard} onChange={() => { }} />}
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
      </>}
    />
  );
}
