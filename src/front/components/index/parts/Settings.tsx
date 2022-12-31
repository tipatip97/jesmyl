import React from "react";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import { soki } from "../../../soki";
import PhaseIndexContainer from "../complect/PhaseIndexContainer";
import useAuth from "../useAuth";

export default function IndexSettings() {
  const { auth } = useAuth();

  const settingsList = [
    (auth?.level || 0) >= 50 && <BrutalItem
      icon="sync"
      title="Перечитать файлы"
      onClick={() => soki.send({ systemTrigger: 'reloadFiles' })}
    />,
    (auth?.level || 0) >= 80 && <BrutalItem
      icon="sync"
      title="Перезапустить сокет"
      onClick={() => soki.send({ systemTrigger: 'restartWS' })}
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
