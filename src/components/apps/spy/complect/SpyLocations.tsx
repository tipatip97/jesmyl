import { useState } from "react";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import SendButton from "../../lider/complect/SendButton";
import { spyExer } from "../Spy.store";
import PhaseSpyContainer from "./PhaseSpyContainer";
import useRooms from "./useRooms";

export default function SpyLocations() {
  const { cache } = useRooms();
  const inputGenerator = useKeyboard();

  const [newName, setNewName] = useState('');
  const newLocationInput = inputGenerator("SpyLocations - new location", {
    onChange: (value) => setNewName(value.toUpperCase())
  });
  const isShortNewName = newName.length < 3;
  const incorrectsInNewName = newName.match(/[^а-яё -]+|[- ]{2,}|^[ -]|[ -]$/i);
  const isInclusiveNewName = cache?.locations?.some((loc) => loc === newName);

  return (
    <PhaseSpyContainer
      topClass="spy-room"
      headTitle="Локации"
      headClass="flex between"
      content={
        <>
          <div>
            {cache?.locations?.map((location, locationi) => {
              return <div key={`l ${locationi}`}>{location}</div>;
            })}
          </div>
          {spyExer.actionAccessedOrNull("addNewLocation") && (
            <div className="margin-big-gap-v">
              <div className="full-width">
                Новая локация{newLocationInput.node}
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
                  onSuccess={() => newLocationInput.value("")}
                  disabled={
                    isInclusiveNewName ||
                    !!incorrectsInNewName ||
                    isShortNewName
                  }
                  onSend={() => {
                    return spyExer.send({
                      action: "addNewLocation",
                      method: "other",
                      args: {
                        location: newName,
                      },
                    });
                  }}
                />
              </div>
            </div>
          )}
        </>
      }
    />
  );
}
