import React, { ReactNode, useMemo } from 'react';
import ScheduleWidgetCleans from '../../../../back/apps/index/schedules/utils/Cleans';
import useModal from '../../modal/useModal';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import IconButton from '../../the-icon/IconButton';
import { IconPlusSignStrokeRounded } from '@icons/plus-sign';
import { TheIconType } from '../../the-icon/model';
import { IScheduleWidget } from '../ScheduleWidget.model';
import ScheduleWidgetEventType from './EventType';

const emptyArr: [] = [];

export default function ScheduleWidgetEventList({
  selectScope,
  scheduleScope,
  postfix,
  schedule,
  Icon,
  selectFieldName,
  usedCounts,
}: {
  selectScope: string;
  scheduleScope: string;
  selectFieldName: string;
  postfix: ReactNode;
  schedule: IScheduleWidget;
  Icon: TheIconType;
  usedCounts?: Record<number, number>;
}) {
  const types = schedule.types || emptyArr;
  const sortedTypes = useMemo(() => {
    if (!usedCounts) return types;
    const sortedTypes = [...types];

    sortedTypes.sort((a, b) => {
      const ai = types.indexOf(a);
      const bi = types.indexOf(b);
      return (a.title ? usedCounts[ai] || 0 : -1) - (b.title ? usedCounts[bi] || 0 : -1);
    });

    return sortedTypes;
  }, [types, usedCounts]);

  const [modalNode, screen] = useModal(({ header, body }, closeModal) => {
    return (
      <>
        {header(
          <>
            <div className="flex flex-gap between">
              <div>Шаблоны событий</div>
              {!schedule.types.some(type => !type.title) && (
                <StrongEvaButton
                  scope={scheduleScope}
                  fieldName="types"
                  Icon={IconPlusSignStrokeRounded}
                  confirm="Добавить новый шаблон?"
                />
              )}
            </div>
          </>,
        )}
        {body(
          <>
            {sortedTypes.map(typeBox => {
              const typei = types.indexOf(typeBox);

              return (
                <React.Fragment key={typei}>
                  <ScheduleWidgetEventType
                    onSelect={closeModal}
                    schedule={schedule}
                    scheduleScope={scheduleScope}
                    selectFieldName={selectFieldName}
                    selectScope={selectScope}
                    typeBox={typeBox}
                    typei={typei}
                  />
                  {usedCounts ? (
                    <div className={'text-right' + (usedCounts[typei] ? '' : ' error-message')}>
                      {usedCounts[typei]
                        ? `Исп. ${ScheduleWidgetCleans.termsToText(usedCounts[typei])}`
                        : 'Не используется'}
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={Icon}
        postfix={postfix}
        onClick={screen}
      />
    </>
  );
}
