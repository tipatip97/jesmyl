import { useState } from "react";
import Dropdown from "../../dropdown/Dropdown";
import EvaIcon from "../../eva-icon/EvaIcon";
import { MyLib } from "../../my-lib/MyLib";
import StrongDiv from "../../strong-control/StrongDiv";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, ScheduleWidgetDayListItemTypeBox } from "../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../atts/ScheduleWidgetBindAtts";
import { AttTranslatorType, attTranslatorTypes } from "../complect/attTranslatorType";

const singleTitleSymbols = '- ().,';
const incorrectsTitleReg = new RegExp(`[^${singleTitleSymbols}а-яё]`, 'ig');
const singlesTitleReg = new RegExp(`([${singleTitleSymbols}])(\\1+)`, 'g');

const titleNormalize = (title: string) => title.replace(incorrectsTitleReg, '').replace(singlesTitleReg, (_, __, letters) => letters[0]).trim();

export default function ScheduleWidgetEventType({
    scope,
    selectScope,
    scheduleScope,
    schedule,
    selectFieldName,
    redact,
    typei,
    typeBox,
    onSelect,
}: {
    scope: string,
    selectScope: string,
    scheduleScope: string,
    selectFieldName: string,
    redact: boolean,
    schedule: IScheduleWidget,
    typei: number,
    typeBox: ScheduleWidgetDayListItemTypeBox,
    onSelect: () => void,
}) {
    const { editIcon, isRedact } = useIsRedactArea(true, redact || null, true, true);
    const [typesError, seTypesError] = useState<(string | nil)[]>([]);
    const [attTranslatorType, setAttTranslatorType] = useState(AttTranslatorType.Today);

    const selfScope = takeStrongScopeMaker(scope, ' typei/', typei);
    const attEntries = (typeBox.atts ? MyLib.keys(typeBox.atts) : []).length;

    return <>
        <StrongDiv
            scope={selectScope}
            fieldName={selectFieldName}
            className={
                'schedule-event-type-select-item'
                + (selectScope ? isRedact ? '' : typeBox.title ? ' pointer ' : ' disabled ' : '')
            }
            mapExecArgs={(args) => {
                if (isRedact || !typeBox.title) return;
                onSelect();
                return {
                    ...args,
                    eventType: typei,
                };
            }}
        >
            <div className="flex flex-end">{editIcon}</div>
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                value={typeBox.title}
                isRedact={isRedact}
                icon="credit-card-outline"
                title="Название"
                isImpossibleEmptyValue
                onChange={(value) => {
                    const errors = [...typesError];
                    const lowerValue = titleNormalize(value.toLowerCase());
                    if (!lowerValue) {
                        if (value) {
                            errors[typei] = 'Нет существенных символов!';
                        } else errors[typei] = 'Не должно быть пустым!';
                    } else {
                        const prevTitle = schedule.types?.find((schType, schTypei) => schTypei !== typei && schType.title.toLowerCase() === lowerValue);
                        if (prevTitle)
                            errors[typei] = `"${prevTitle.title}" уже есть!`;
                        else errors[typei] = null;
                    }

                    seTypesError(errors);
                }}
                mapExecArgs={(args, val) => {
                    if (typesError[typei]) return;
                    return {
                        ...args,
                        value: titleNormalize(val),
                        key: 'title',
                    };
                }}
            />
            {typesError[typei] && <div className="flex flex-gap center error-message"><EvaIcon name="alert-circle-outline" />{typesError[typei]}</div>}
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                type="number"
                value={'' + (typeBox.tm ?? '')}
                postfix=" мин"
                isRedact={isRedact}
                title="Продолжительность, мин"
                icon="clock-outline"
                mapExecArgs={(args) => ({ ...args, key: 'tm' })}
            />
            {isRedact
                ? <ScheduleWidgetBindAtts
                    scope={selfScope}
                    schedule={schedule}
                    scheduleScope={scheduleScope}
                    atts={typeBox.atts}
                    forTitle={'Шаблона: ' + typeBox.title}
                    cantBindLinks
                    topContent={<Dropdown
                        id={attTranslatorType}
                        items={attTranslatorTypes}
                        onSelect={({ id }) => setAttTranslatorType(id)}
                    />}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            value: attTranslatorType,
                        }
                    }}
                />
                : !attEntries || <div>
                    <div className="flex flex-gap">
                        <EvaIcon name="attach-2-outline" />
                        Вложения
                    </div>
                </div>}
        </StrongDiv>
    </>;
}
