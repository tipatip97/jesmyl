import { mylib } from 'front/utils';
import React from 'react';
import FontSizeContain from '../../../../cm/base/font-size-contain/FontSizeContain';
import PrintableTemplate from '../../templates/PrintableTemplate';
import useGames from '../useGames';
import './GameTemplates.scss';

export default function GameTeamPassports({ selectedTimers }: { selectedTimers?: number[] }) {
  const { cgame } = useGames();
  const gameTimers = cgame?.timers;
  const joins = cgame?.timerFields?.joins;
  const timers =
    (selectedTimers?.length &&
      gameTimers &&
      selectedTimers
        .map(wid => gameTimers.find(timer => !timer.isInactive && timer.w === wid)?.name)
        .filter(timer => timer)) ||
    cgame?.timerNames;

  let carouselTimers = timers || [];

  return (
    <PrintableTemplate
      noder={page => (
        <>
          {timers?.map((timer, timeri) => {
            return (
              <React.Fragment key={timeri}>
                {page(
                  <div className="full-width full-height flex center">
                    <FontSizeContain
                      className="rotate-90"
                      content={timer}
                    />
                  </div>,
                )}
              </React.Fragment>
            );
          })}
          {cgame?.teams?.map((team, teami) => {
            if (teami && (!joins || !(teami % joins))) {
              carouselTimers = [...carouselTimers];
              carouselTimers.push(carouselTimers.splice(0, 1)[0]);
            }

            const pointsNet = mylib.netFromLine(carouselTimers, 2, item => item);

            return (
              <>
                <React.Fragment key={teami}>
                  {page(
                    <>
                      <div className="tpl-title">{cgame?.name}</div>
                      <div className="tpl-subtitle margin-gap">Паспорт команды "{team.name}"</div>
                      <div className="table-wrapper">
                        <div className="table">
                          {pointsNet?.map((row, rowi) => {
                            return (
                              <div
                                key={rowi}
                                className="row"
                              >
                                {row.map((timer, timeri) => {
                                  return (
                                    <div
                                      key={timeri}
                                      className="cell"
                                    >
                                      {timer}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>,
                  )}
                </React.Fragment>
              </>
            );
          })}
        </>
      )}
    />
  );
}
