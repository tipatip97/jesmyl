import { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../dropdown/Dropdown';
import useModal from '../../modal/useModal';
import { MyLib } from '../../my-lib/MyLib';
import StrongDiv from '../../strong-control/StrongDiv';
import StrongDropdown from '../../strong-control/StrongDropdown';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import StrongClipboardPicker from '../../strong-control/field/clipboard/Picker';
import { IconAlert02StrokeRounded } from '@icons/alert-02';
import { IconAttachmentStrokeRounded } from '@icons/attachment';
import { IconClock01StrokeRounded } from '@icons/clock-01';
import { IconEdit02StrokeRounded } from '@icons/edit-02';
import { IconSchoolReportCardStrokeRounded } from '@icons/school-report-card';
import { IScheduleWidget, ScheduleWidgetDayListItemTypeBox } from '../ScheduleWidget.model';
import ScheduleWidgetBindAtts from '../atts/BindAtts';
import { AttTranslatorType, attTranslatorTypes } from '../complect/attTranslatorType';
import { takeStrongScopeMaker } from '../useScheduleWidget';

const singleTitleSymbols = '- ().,/';
const incorrectsTitleReg = new RegExp(`[^${singleTitleSymbols}а-яё]`, 'ig');
const singlesTitleReg = new RegExp(`([${singleTitleSymbols}])(\\1+)`, 'g');
const titleLettersNormalizer = (_: string, __: string, letters: string) => letters[0];

const titleNormalize = (title: string) =>
  title.replace(incorrectsTitleReg, '').replace(singlesTitleReg, titleLettersNormalizer).trim();

export default function ScheduleWidgetEventType(props: {
  selectScope: string;
  scheduleScope: string;
  selectFieldName: string;
  schedule: IScheduleWidget;
  typei: number;
  typeBox: ScheduleWidgetDayListItemTypeBox;
  onSelect?: () => void;
  isRedact?: boolean;
}) {
  const [typesError, seTypesError] = useState<(string | nil)[]>([]);
  const [attTranslatorType, setAttTranslatorType] = useState(AttTranslatorType.Today);

  const selfScope = takeStrongScopeMaker(props.scheduleScope, ' typei/', props.typei);
  const attEntries = (props.typeBox.atts ? MyLib.keys(props.typeBox.atts) : []).length;

  const [modalNode, screen] = useModal(({ header, body }) => {
    return (
      <>
        {header(
          <span className="flex flex-gap full-width between">
            <span>
              <span className="color--7">{props.typeBox.title} </span>- Редактирование шаблона
            </span>
            <StrongClipboardPicker />
          </span>,
        )}
        {body(
          <>
            <ScheduleWidgetEventType
              {...props}
              isRedact
            />
          </>,
        )}
      </>
    );
  });

  return (
    <div className="relative">
      {modalNode}
      {props.isRedact || (
        <div className="flex flex-end full-width absolute pos-top pos-right margin-sm-gap z-index:5">
          <IconEdit02StrokeRounded onClick={screen} />
        </div>
      )}
      <SelectItem
        scope={props.selectScope}
        fieldName={props.selectFieldName}
        className={
          'schedule-event-type-select-item' +
          (props.selectScope ? (props.isRedact ? '' : props.typeBox.title ? ' pointer ' : ' disabled ') : '') +
          (props.isRedact ? '' : ' bgcolor--5 padding-gap margin-gap-v')
        }
        mapExecArgs={args => {
          if (props.isRedact || !props.typeBox.title) return;
          props.onSelect?.();
          return {
            ...args,
            eventType: props.typei,
          };
        }}
      >
        <StrongEditableField
          scope={selfScope}
          fieldName="field"
          value={props.typeBox.title}
          isRedact={props.isRedact}
          Icon={IconSchoolReportCardStrokeRounded}
          title="Название"
          isImpossibleEmptyValue
          onChange={value => {
            const errors = [...typesError];
            const lowerValue = titleNormalize(value.toLowerCase());
            if (!lowerValue) {
              if (value) {
                errors[props.typei] = 'Нет существенных символов!';
              } else errors[props.typei] = 'Не должно быть пустым!';
            } else {
              const prevTitle = props.schedule.types.find(
                (schType, schTypei) => schTypei !== props.typei && schType.title.toLowerCase() === lowerValue,
              );
              if (prevTitle) errors[props.typei] = `"${prevTitle.title}" уже есть!`;
              else errors[props.typei] = null;
            }

            seTypesError(errors);
          }}
          mapExecArgs={(args, val) => {
            if (typesError[props.typei]) return;
            return {
              ...args,
              value: titleNormalize(val),
              key: 'title',
            };
          }}
        />
        {typesError[props.typei] && (
          <div className="flex flex-gap center error-message">
            <IconAlert02StrokeRounded />
            {typesError[props.typei]}
          </div>
        )}
        <StrongEditableField
          scope={selfScope}
          fieldName="tm"
          type="number"
          value={'' + (props.typeBox.tm ?? '')}
          postfix=" мин"
          isRedact={props.isRedact}
          title="Продолжительность, мин"
          Icon={IconClock01StrokeRounded}
        />
        {props.isRedact ? (
          <ScheduleWidgetBindAtts
            scope={selfScope}
            schedule={props.schedule}
            scheduleScope={props.scheduleScope}
            atts={props.typeBox.atts}
            forTitle={
              <>
                Шаблон <span className="color--7">{props.typeBox.title}</span>
              </>
            }
            cantBindLinks
            topContent={
              <Dropdown
                id={attTranslatorType}
                items={attTranslatorTypes}
                onSelect={({ id }) => setAttTranslatorType(id)}
              />
            }
            customAttTopContent={(scope, attKey) => (
              <StrongDropdown
                id={props.typeBox.atts?.[attKey]?.[0] as AttTranslatorType}
                scope={scope}
                fieldName="period"
                cud="U"
                items={attTranslatorTypes}
                className="margin-gap-b"
              />
            )}
            mapExecArgs={args => {
              return {
                ...args,
                value: attTranslatorType,
              };
            }}
          />
        ) : (
          !attEntries || (
            <div>
              <div className="flex flex-gap">
                <IconAttachmentStrokeRounded />
                Вложения
              </div>
            </div>
          )
        )}
      </SelectItem>
    </div>
  );
}

const SelectItem = styled(StrongDiv)`
  border-radius: 3px;
`;
