import { ReactNode } from 'react';
import styled from 'styled-components';
import { scheduleWidgetUserRights } from '../../../models';
import { IconHelpCircleStrokeRounded } from '@icons/help-circle';
import { IconLink02StrokeRounded } from '@icons/link-02';
import useModal from '../../modal/useModal';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import TheIcon from '../../the-icon/TheIcon';
import { IconCancel01StrokeRounded } from '@icons/cancel-01';
import { ScheduleWidgetAppAtt, ScheduleWidgetAttKey } from '../ScheduleWidget.model';
import { useScheduleWidgetRightsContext } from '../useScheduleWidget';
import ScheduleWidgetCustomAtt from './custom/CustomAtt';

export default function ScheduleWidgetAttFace({
  tatt,
  typeTitle,
  attKey,
  scope,
  isRedact,
  scheduleScope,
  isLink,
  customAttTopContent,
}: StrongComponentProps<{
  isRedact?: boolean;
  tatt?: ScheduleWidgetAppAtt;
  attKey: ScheduleWidgetAttKey;
  typeTitle: ReactNode;
  customAttTopContent?: (scope: string, attKey: ScheduleWidgetAttKey) => ReactNode;
  scheduleScope: string;
  isLink?: boolean;
}>) {
  const rights = useScheduleWidgetRightsContext();
  const myUserR = rights.myUser?.R ?? rights.schedule.ctrl.defu;
  const [modalNode, screen] = useModal(
    tatt &&
      (({ header, body }) => {
        return (
          <>
            {header(
              <>
                Вложение <span className="color--7">{tatt.title}</span>
              </>,
            )}
            {body(
              <ScheduleWidgetCustomAtt
                tatt={tatt as never}
                isRedact
                scope={scheduleScope}
                topContent={customAttTopContent?.(scope, attKey)}
              />,
            )}
          </>
        );
      }),
  );
  if (!scheduleWidgetUserRights.checkIsCan(myUserR, tatt?.R)) return null;
  const isCanRedact = scheduleWidgetUserRights.checkIsCan(myUserR, tatt?.U);

  return (
    <>
      {modalNode}
      <Tatt
        className={'relative flex center column' + (isCanRedact && tatt?.isCustomize ? ' color--7 pointer' : '')}
        onClick={isCanRedact && tatt?.isCustomize ? screen : undefined}
      >
        {isLink && <IconLink02StrokeRounded className="absolute pos-left pos-top color--3 fade-05" />}
        {isRedact && isCanRedact && (
          <StrongEvaButton
            scope={scope}
            fieldName=""
            cud="D"
            Icon={IconCancel01StrokeRounded}
            className="close-button"
            confirm={
              <>
                Убрать {isLink ? 'ссылку вложения' : 'вложение'} <span className="color--7">{tatt?.title || '??'}</span>{' '}
                из события {typeTitle}?
              </>
            }
          />
        )}
        {tatt ? (
          <>
            <TheIcon name={tatt.icon} />
            <div className="ellipsis full-max-width">{tatt.title}</div>
          </>
        ) : (
          <>
            <IconHelpCircleStrokeRounded className="color--ko" />
            <div className="color--ko">Не изв.</div>
          </>
        )}
      </Tatt>
    </>
  );
}

const Tatt = styled.div`
  --att-size: 90px;

  position: relative;
  border-radius: 3px;
  background-color: var(--color--5);
  width: var(--att-size);
  min-width: var(--att-size);
  max-width: var(--att-size);
  height: var(--att-size);
  min-height: var(--att-size);
  max-height: var(--att-size);

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
