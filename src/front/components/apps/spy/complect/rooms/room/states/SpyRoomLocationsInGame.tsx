import { useLayoutEffect, useState } from "react";
import EvaButton from "../../../../../../../complect/eva-icon/EvaButton";
import useEditableRooms from "../useEditableRooms";


export default function SpyRoomLocationsInGame({
  onToggleLocation,
  amIManager,
}: {
  amIManager?: boolean,
  onToggleLocation: ((location: string) => 'del' | 'add'),
}) {
  const [isOpenLocations, setIsOpenLocations] = useState(false);
  const [loactionsOnLoad, updateLoactionsOnLoad] = useState<
    ["add" | "del", string][]
  >([]);

  const { currentRoom, cleanLocations, locations } = useEditableRooms();

  useLayoutEffect(() => {
    const newLocationList =
      cleanLocations &&
      loactionsOnLoad.filter(([action, location]) => {
        return cleanLocations
          ? !cleanLocations.some(([loc]) => loc === location)
            ? action === "add"
            : action === "del"
          : false;
      });
    updateLoactionsOnLoad(newLocationList || []);
  }, [currentRoom?.locations]);


  return <>
    {!locations?.length ? <div className="margin-big-gap text-center">Локаций нет</div> : <>
      <h2
        className="flex flex-gap pointer"
        onClick={() => setIsOpenLocations(!isOpenLocations)}
      >
        Локации
        <EvaButton
          name={
            isOpenLocations
              ? "arrow-ios-upward-outline"
              : "arrow-ios-downward-outline"
          }
        />
      </h2>
      {isOpenLocations &&
        locations.map((location, locationi) => {
          const [strikedLoc, secretLoc] = cleanLocations?.find(([loc]) => loc === location) ?? [];
          const isOnLoading = loactionsOnLoad.some(([, loc]) => loc === location);

          return (
            <div
              key={`l ${locationi}`}
              className={`flex flex-gap margin-gap-v ${amIManager ? "pointer" : ""
                } ${isOnLoading ? "disabled" : ""} ${strikedLoc ? "error-message" : ""
                }`}
              onClick={() =>
                amIManager &&
                updateLoactionsOnLoad([
                  ...loactionsOnLoad,
                  [onToggleLocation(secretLoc ?? location), location],
                ])
              }
            >
              <EvaButton
                name={
                  isOnLoading
                    ? "loader-outline"
                    : strikedLoc
                      ? "close-circle-outline"
                      : "checkmark-circle-2-outline"
                }
                className={isOnLoading ? "rotate" : ""}
              />
              <span className={strikedLoc ? "text-strike" : ""}>
                {location}
              </span>
            </div>
          );
        })}

    </>}
  </>
}
