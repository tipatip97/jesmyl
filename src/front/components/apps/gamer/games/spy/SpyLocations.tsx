import { useState } from "react";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import SendButton from "../../../../../complect/SendButton";
import { gamerExer } from "../../Gamer.store";
import useSpyLocations from "./useSpyLocations";

export default function SpyLocations() {
  const { locations } = useSpyLocations();

  const [newName, setNewName] = useState('');
  const isShortNewName = newName.length < 3;
  const incorrectsInNewName = newName.match(/[^а-яё -]+|[- ]{2,}|^[ -]|[ -]$/i);
  const upperName = newName.toUpperCase();
  const isInclusiveNewName = locations?.some((loc) => loc === upperName);

  return <>
    <div>
      {locations?.map((location, locationi) => {
        return <div key={`l ${locationi}`}>{location}</div>;
      })}
    </div>
    {gamerExer.actionAccessedOrNull("addNewLocation") && (
      <div className="margin-big-gap-v">
        <div className="full-width">
          Новая локация
          <KeyboardInput
            value={newName}
            onChange={(value) => setNewName(value)}
          />
        </div>
        {isInclusiveNewName && (
          <div className="error-message text-center">
            Такая локация уже существует
          </div>
        )}
        {incorrectsInNewName && (
          <div className="error-message text-center">
            Некорректное название ({incorrectsInNewName})
          </div>
        )}
        {isShortNewName && (
          <div className="error-message text-center">
            Минимум 3 символа для названия
          </div>
        )}

        <div className="flex center margin-big-gap">
          <SendButton
            title="Отправить локацию"
            onSuccess={() => setNewName('')}
            disabled={
              isInclusiveNewName ||
              !!incorrectsInNewName ||
              isShortNewName
            }
            onSend={() => {
              return gamerExer.send({
                action: "addNewLocation",
                method: "push",
                args: {
                  location: upperName,
                },
              });
            }}
          />
        </div>
      </div>
    )}
  </>;
}
