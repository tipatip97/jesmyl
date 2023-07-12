import { useState } from "react";
import Dropdown from "../../dropdown/Dropdown";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { MyLib } from "../../my-lib/MyLib";
import StrongDiv from "../../strong-control/StrongDiv";
import StrongDropdown from "../../strong-control/StrongDropdown";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import { IScheduleWidget, ScheduleWidgetDayListItemTypeBox } from "../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../atts/BindAtts";
import { AttTranslatorType, attTranslatorTypes } from "../complect/attTranslatorType";
import { takeStrongScopeMaker } from "../useScheduleWidget";
import StrongClipboardPicker from "../../strong-control/field/clipboard/Picker";

const singleTitleSymbols = '- ().,/';
const incorrectsTitleReg = new RegExp(`[^${singleTitleSymbols}а-яё]`, 'ig');
const singlesTitleReg = new RegExp(`([${singleTitleSymbols}])(\\1+)`, 'g');

const titleNormalize = (title: string) => title.replace(incorrectsTitleReg, '').replace(singlesTitleReg, (_, __, letters) => letters[0]).trim();

export default function ScheduleWidgetEventType(props: {
    selectScope: string,
    scheduleScope: string,
    selectFieldName: string,
    schedule: IScheduleWidget,
    typei: number,
    typeBox: ScheduleWidgetDayListItemTypeBox,
    onSelect?: () => void,
    isRedact?: boolean,
}) {
    const [typesError, seTypesError] = useState<(string | nil)[]>([]);
    const [attTranslatorType, setAttTranslatorType] = useState(AttTranslatorType.Today);

    const selfScope = takeStrongScopeMaker(props.scheduleScope, ' typei/', props.typei);
    const attEntries = (props.typeBox.atts ? MyLib.keys(props.typeBox.atts) : []).length;

    const [modalNode, screen] = useModal(({ header, body }) => {
        return <>
            {header(<span className="flex flex-gap full-width between">
                <span>
                    <span className="color--7">{props.typeBox.title} </span>
                    - Редактирование шаблона
                </span>
                <StrongClipboardPicker />
            </span>)}
            {body(<>
                <ScheduleWidgetEventType
                    {...props}
                    isRedact
                />
            </>)}
        </>;
    });

    return <div className="relative">
        {modalNode}
        {props.isRedact
            || <div className="flex flex-end full-width absolute pos-top pos-right margin-sm-gap z-index:5">
                <EvaButton name="edit-outline" onClick={() => screen()} />
            </div>}
        <StrongDiv
            scope={props.selectScope}
            fieldName={props.selectFieldName}
            className={
                'schedule-event-type-select-item'
                + (props.selectScope ? props.isRedact ? '' : props.typeBox.title ? ' pointer ' : ' disabled ' : '')
                + (props.isRedact ? '' : ' bgcolor--5 padding-gap margin-gap-v')
            }
            mapExecArgs={(args) => {
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
                icon="credit-card-outline"
                title="Название"
                isImpossibleEmptyValue
                onChange={(value) => {
                    const errors = [...typesError];
                    const lowerValue = titleNormalize(value.toLowerCase());
                    if (!lowerValue) {
                        if (value) {
                            errors[props.typei] = 'Нет существенных символов!';
                        } else errors[props.typei] = 'Не должно быть пустым!';
                    } else {
                        const prevTitle = props.schedule.types?.find((schType, schTypei) => schTypei !== props.typei && schType.title.toLowerCase() === lowerValue);
                        if (prevTitle)
                            errors[props.typei] = `"${prevTitle.title}" уже есть!`;
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
            {typesError[props.typei] && <div className="flex flex-gap center error-message"><EvaIcon name="alert-circle-outline" />{typesError[props.typei]}</div>}
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                fieldKey="tm"
                type="number"
                value={'' + (props.typeBox.tm ?? '')}
                postfix=" мин"
                isRedact={props.isRedact}
                title="Продолжительность, мин"
                icon="clock-outline"
            />
            {props.isRedact
                ? <ScheduleWidgetBindAtts
                    scope={selfScope}
                    schedule={props.schedule}
                    scheduleScope={props.scheduleScope}
                    atts={props.typeBox.atts}
                    forTitle={<>Шаблон <span className="color--7">{props.typeBox.title}</span></>}
                    cantBindLinks
                    topContent={<Dropdown
                        id={attTranslatorType}
                        items={attTranslatorTypes}
                        onSelect={({ id }) => setAttTranslatorType(id)}
                    />}
                    customAttTopContent={(scope, attKey) => <StrongDropdown
                        id={props.typeBox.atts?.[attKey]?.[0] as AttTranslatorType}
                        scope={scope}
                        fieldName="period"
                        cud="U"
                        items={attTranslatorTypes}
                        className="margin-gap-b"
                    />}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            value: attTranslatorType,
                        };
                    }}
                />
                : !attEntries || <div>
                    <div className="flex flex-gap">
                        <EvaIcon name="attach-2-outline" />
                        Вложения
                    </div>
                </div>}
        </StrongDiv>
    </div>;
}
