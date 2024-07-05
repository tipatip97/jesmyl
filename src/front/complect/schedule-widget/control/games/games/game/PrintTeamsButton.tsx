import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FullContent } from '../../../../../fullscreen-content/FullContent';
import IconButton from '../../../../../the-icon/IconButton';
import { IconDashboardSquareAddStrokeRounded } from '../../../../../the-icon/icons/dashboard-square-add';
import { IconDashboardSquareRemoveStrokeRounded } from '../../../../../the-icon/icons/dashboard-square-remove';
import { IconPrinterStrokeRounded } from '../../../../../the-icon/icons/printer';
import { useScheduleWidgetRightsContext } from '../../../../useScheduleWidget';
import { useSchWGameContext } from '../Games';

export const ScheduleWidgetTeamGamePrintTeamsButton = function PrintTeamsButton() {
  const rights = useScheduleWidgetRightsContext();

  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const game = useSchWGameContext();
  const [cols, setCols] = useState(Math.floor(game.teams.length / 2));

  return (
    <>
      {isOpenPrint && (
        <StyledFull onClose={setIsOpenPrint}>
          <StyledButtons className="flex full-width around">
            <IconButton
              Icon={IconDashboardSquareRemoveStrokeRounded}
              disabled={cols < 2}
              onClick={() => setCols(cols - 1)}
            />
            <IconButton
              Icon={IconDashboardSquareAddStrokeRounded}
              disabled={game.teams.length <= cols}
              onClick={() => setCols(cols + 1)}
            />
          </StyledButtons>
          {game.teams.map((team, teami) => {
            return (
              <React.Fragment key={team.mi}>
                <div className="inline-block margin-big-gap-r vertical-top">
                  <h2>{team.title}</h2>
                  {team.users.map(({ mi }) => {
                    const user = rights.schedule.ctrl.users.find(user => user.mi === mi);

                    return user && <div key={mi}>{user.fio}</div>;
                  })}
                </div>
                {(teami + 1) % cols ? null : <br />}
              </React.Fragment>
            );
          })}
        </StyledFull>
      )}
      <IconPrinterStrokeRounded
        onClick={event => {
          event.stopPropagation();
          setIsOpenPrint(true);
        }}
      />
    </>
  );
};

const hideOnPrintCss = css`
  @media print {
    & {
      display: none !important;
    }
  }
`;

const StyledButtons = styled.div`
  ${hideOnPrintCss}
`;

const StyledFull = styled(FullContent)`
  --current-bg: white;

  color: black;
`;
