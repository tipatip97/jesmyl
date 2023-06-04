import React, { useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon, { EvaIconName } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import mylib from "../../my-lib/MyLib";
import StrongDiv from "../../strong-control/StrongDiv";
import StrongEditableField from "../../strong-control/StrongEditableField";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import { IScheduleWidget } from "../ScheduleWidget.model";

const singleTitleSymbols = '- ().,';
const incorrectsTitleReg = new RegExp(`[^${singleTitleSymbols}а-яё]`, 'ig');
const singlesTitleReg = new RegExp(`([${singleTitleSymbols}])(\\1+)`, 'g');

const titleNormalize = (title: string) => title.replace(incorrectsTitleReg, '').replace(singlesTitleReg, (_, __, letters) => letters[0]).trim();
const altArr: [] = [];


export default function ScheduleWidgetEventList({
    buttonTitle,
    schedule,
    scope,
    icon,
    selectScope,
    selectFieldName,
    usedCounts,
}: {
    selectScope: string,
    selectFieldName: string,
    buttonTitle: string,
    schedule: IScheduleWidget,
    scope: string,
    icon: EvaIconName,
    usedCounts?: Record<number, number>,
}) {
    const [isRedact, setIsRedact] = useState(false);
    const [typesError, seTypesError] = useState<(string | nil)[]>([]);
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
        return <>
            {header(<>
                <div className="flex flex-gap between">
                    <div>Типы событий</div>
                    <EvaButton
                        name={isRedact ? 'checkmark-circle-2-outline' : 'edit-outline'}
                        onClick={() => setIsRedact(is => !is)}
                    />
                </div>
            </>)}
            {body(<>
                {sortedTypes.map((type) => {
                    const typei = types.indexOf(type);
                    const typeScope = takeStrongScopeMaker(scope, ' typei/', typei);

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
                        </StrongDiv>
                        {usedCounts
                            ? <div className={'text-right' + (usedCounts[typei] ? '' : ' error-message')}>{
                                usedCounts[typei]
                                    ? `Исп. ${usedCounts[typei]} ${mylib.declension(usedCounts[typei], 'раз', 'раза', 'раз')}`
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
                            Новый тип
                            <StrongEvaButton
                                scope={scope}
                                fieldName="types"
                                name="plus-circle-outline"
                                confirm="Добавить новый тип?"
                            /></div>)
                }</>
            )}</>;
    });

    return <div className="flex flex-gap">
        {modalNode}
        {buttonTitle}
        <EvaButton
            name={icon}
            onClick={() => screen(null, { onClose: () => setIsRedact(false) })}
        />
    </div>;
}
