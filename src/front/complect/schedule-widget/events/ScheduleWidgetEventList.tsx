import React, { useMemo } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import { EvaIconName } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget } from "../ScheduleWidget.model";
import ScheduleWidgetCleans from "../complect/ScheduleWidgetCleans";
import ScheduleWidgetEventType from "./ScheduleWidgetEventType";

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
                    <div>Шаблоны событий</div>
                    {editIcon}
                </div>
            </>)}
            {body(<>
                {sortedTypes.map((typeBox) => {
                    const typei = types.indexOf(typeBox);

                    return <React.Fragment key={typei}>
                        <ScheduleWidgetEventType
                            onSelect={closeModal}
                            redact={isRedact}
                            schedule={schedule}
                            scheduleScope={scheduleScope}
                            scope={scope}
                            selectFieldName={selectFieldName}
                            selectScope={selectScope}
                            typeBox={typeBox}
                            typei={typei}
                        />
                        {usedCounts
                            ? <div className={'text-right' + (usedCounts[typei] ? '' : ' error-message')}>{
                                usedCounts[typei]
                                    ? `Исп. ${ScheduleWidgetCleans.termsToText(usedCounts[typei])}`
                                    : 'Не используется'
                            }</div>
                            : null}
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
