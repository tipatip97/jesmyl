import React, { useMemo, useState } from "react";
import Dropdown from "../../dropdown/Dropdown";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon, { EvaIconName } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import StrongDiv from "../../strong-control/StrongDiv";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget } from "../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../atts/ScheduleWidgetBindAtts";
import ScheduleWidgetCleans from "../complect/ScheduleWidgetCleans";
import { AttTranslatorType, attTranslatorTypes } from "../complect/attTranslatorType";
import { MyLib } from "../../my-lib/MyLib";

const singleTitleSymbols = '- ().,';
const incorrectsTitleReg = new RegExp(`[^${singleTitleSymbols}а-яё]`, 'ig');
const singlesTitleReg = new RegExp(`([${singleTitleSymbols}])(\\1+)`, 'g');

const titleNormalize = (title: string) => title.replace(incorrectsTitleReg, '').replace(singlesTitleReg, (_, __, letters) => letters[0]).trim();
const altArr: [] = [];




export default function ScheduleWidgetEventList({
    scope,
    selectScope,
    scheduleScope,
    buttonTitle,
    schedule,
    icon,
    selectFieldName,
    usedCounts,
}: {
    scope: string,
    selectScope: string,
    scheduleScope: string,
    selectFieldName: string,
    buttonTitle: string,
    schedule: IScheduleWidget,
    icon: EvaIconName,
    usedCounts?: Record<number, number>,
}) {
    const { editIcon, isRedact, setIsSelfRedact } = useIsRedactArea(true, null, true, true);
    const [typesError, seTypesError] = useState<(string | nil)[]>([]);
    const [attTranslatorType, setAttTranslatorType] = useState(AttTranslatorType.Today);
    const types = schedule.types || altArr;
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

    const { modalNode, screen } = useModal(({ actionButton, footer, header, body }, closeModal) => {
        const attTranslatorTypeDropdown = <Dropdown
            id={attTranslatorType}
            items={attTranslatorTypes}
            onSelect={({ id }) => setAttTranslatorType(id)}
        />;

        return <>
            {header(<>
                <div className="flex flex-gap between">
                    <div>Шаблоны событий</div>
                    {editIcon}
                </div>
            </>)}
            {body(<>
                {sortedTypes.map((type) => {
                    const typei = types.indexOf(type);
                    const typeScope = takeStrongScopeMaker(scope, ' typei/', typei);
                    const attEntries = (type.atts ? MyLib.keys(type.atts) : []).length;

                    return <React.Fragment key={typei}>
                        <StrongDiv
                            scope={selectScope}
                            fieldName={selectFieldName}
                            className={
                                'schedule-event-type-select-item'
                                + (selectScope ? isRedact ? '' : type.title ? ' pointer ' : ' disabled ' : '')
                            }
                            mapExecArgs={(args) => {
                                if (isRedact || !type.title) return;
                                closeModal();
                                return {
                                    ...args,
                                    eventType: typei,
                                };
                            }}
                        >
                            <StrongEditableField
                                scope={typeScope}
                                fieldName="field"
                                value={type.title}
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
                                scope={typeScope}
                                fieldName="field"
                                type="number"
                                value={'' + (type.tm ?? '')}
                                postfix=" мин"
                                isRedact={isRedact}
                                title="Продолжительность, мин"
                                icon="clock-outline"
                                mapExecArgs={(args) => ({ ...args, key: 'tm' })}
                            />
                            {isRedact
                                ? <ScheduleWidgetBindAtts
                                    scope={typeScope}
                                    schedule={schedule}
                                    scheduleScope={scheduleScope}
                                    atts={type.atts}
                                    forTitle={'Шаблона: ' + type.title}
                                    cantBindLinks
                                    topContent={attTranslatorTypeDropdown}
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
                        {usedCounts
                            ? <div className={'text-right' + (usedCounts[typei] ? '' : ' error-message')}>{
                                usedCounts[typei]
                                    ? `Исп. ${ScheduleWidgetCleans.termsToText(usedCounts[typei])}`
                                    : 'Не используется'
                            }</div>
                            : null
                        }
                    </React.Fragment>;
                })}
            </>)}
            {footer(
                <>{
                    isRedact && !schedule.types?.some((type) => !type.title) && actionButton(
                        <div className="flex flex-gap ">
                            Новый шаблон
                            <StrongEvaButton
                                scope={scope}
                                fieldName="types"
                                name="plus-circle-outline"
                                confirm="Добавить новый шаблон?"
                            /></div>)
                }</>
            )}</>;
    });

    return <div className="flex flex-gap">
        {modalNode}
        {buttonTitle}
        <EvaButton
            name={icon}
            onClick={() => screen(null, { onClose: () => setIsSelfRedact(false) })}
        />
    </div>;
}
