import { useState } from "react";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import SendButton from "../../../../../complect/SendButton";
import { gamerExer } from "../../Gamer.store";
import useSpyLocations from "./useSpyLocations";
import useAuth from "../../../../index/useAuth";

export default function SpyLocations() {
  const { locations } = useSpyLocations();
  const auth = useAuth();

  const [newName, setNewName] = useState('');
  const isShortNewName = newName.length < 3;
  const incorrectsInNewName = newName.match(/[^а-яё -]+|[- ]{2,}|^[ -]|[ -]$/i);
  const upperName = newName.toUpperCase();
  const isInclusiveNewName = locations?.some((loc) => loc === upperName);
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [isOpenAdder, setIsOpenAdder] = useState(false);

  return <>
    <h2
      className="flex flex-gap pointer"
      onClick={() => setIsOpenLocations(!isOpenLocations)}
    >
      Все локации
      <EvaButton
        name={
          isOpenLocations
            ? "arrow-ios-upward-outline"
            : "arrow-ios-downward-outline"
        }
      />
    </h2>
    {isOpenLocations &&
      <>
        <div>
          {locations?.map((location, locationi) => {
            return <div key={`l ${locationi}`}>{location}</div>;
          })}
        </div>
        {!isOpenAdder && gamerExer.actionAccessedOrNull("addNewLocation", auth) &&
          <EvaButton
            className="margin-gap color--ok"
            name="plus-circle-outline"
            onClick={() => setIsOpenAdder(is => !is)}
          />}
        {isOpenAdder && (
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
      </>}
  </>;
}
