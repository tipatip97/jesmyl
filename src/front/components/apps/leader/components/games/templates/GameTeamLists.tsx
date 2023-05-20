import mylib from "../../../../../../complect/my-lib/MyLib";
import PrintableTemplate from "../../templates/PrintableTemplate";
import useGames from "../useGames";
import "./GameTemplates.scss";

export default function GameTeamLists() {
  const { cgame, ctx } = useGames();
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
                      key={rowi}
                      className=" flex-gap full-width between for-print break-inside-avoid"
                    >
                      {row?.map((team, teami) => {
                        return (
                          <td
                            key={teami}
                            className="cell padding-gap text-center column full-height"
                            style={{
                              width: `calc(${(100 / joins).toFixed(0)}vw - 30px)`,
                            }}
                          >
                            <h3>{team.name}</h3>
                            {ctx.extractWidable(ctx.contextMembers, team.members)
                              .filter((member) => !member.isInactive)
                              .map((member, memberi) => <div key={memberi}>{member.name}</div>)}
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
