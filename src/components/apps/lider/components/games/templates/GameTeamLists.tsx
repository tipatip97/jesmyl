import React from "react";
import mylib from "../../../../../../complect/my-lib/MyLib";
import FontSizeContain from "../../../../cm/base/font-size-contain/FontSizeContain";
import PrintableTemplate from "../../templates/PrintableTemplate";
import useGames from "../useGames";
import "./GameTemplates.scss";

export default function GameTeamLists() {
  const { cgame } = useGames();
  const joins = cgame?.timerFields?.joins || 1;
  const teams = cgame?.teams || [];

  const pointsNet = mylib.netFromLine(teams, joins, (item) => item);

  return (
    <PrintableTemplate
      noder={() => (
        <>
          <div className="full-min-height padding-giant-gap">
            <h2 className="flex center">{cgame?.name}</h2>
            <table className="color--1">
              {pointsNet.map((row, rowi) => {
                return (
                  <>
                    <tr
                      key={`rowi-${rowi}`}
                      className=" flex-gap full-width between for-print break-inside-avoid"
                    >
                      {row?.map((team, teami) => {
                        return (
                          <td
                            key={`teami${teami}`}
                            className="cell padding-gap text-center column full-height"
                            style={{
                              width: `calc(${(100 / joins).toFixed(
                                0
                              )}vw - 30px)`,
                            }}
                          >
                            <h3>{team.name}</h3>
                            {team.activeMembers.map((member, memberi) => {
                              return (
                                <div key={`member${memberi}`}>
                                  {member.name}
                                </div>
                              );
                            })}
                          </td>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </>
      )}
    />
  );
}
