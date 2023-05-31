import { useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon, { EvaIconName } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import StrongDiv from "../../strong-control/StrongDiv";
import StrongEditableField from "../../strong-control/StrongEditableField";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import { IScheduleWidget } from "../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../atts/ScheduleWidgetBindAtts";

const singleTitleSymbols = '- (),';
const incorrectsTitleReg = new RegExp(`[^${singleTitleSymbols}а-яё]`, 'ig');
const singlesTitleReg = new RegExp(`([${singleTitleSymbols}])(\\1+)`, 'g');

const titleNormalize = (title: string) => title.replace(incorrectsTitleReg, '').replace(singlesTitleReg, (_, __, letters) => letters[0]).trim();

export default function ScheduleWidgetDayEventList({
    buttonTitle,
    schedule,
    scope,
    icon,
    selectScope,
    selectFieldName,
}: {
    selectScope: string,
    selectFieldName: string,
    buttonTitle: string,
    schedule: IScheduleWidget,
    scope: string,
    icon: EvaIconName,
}) {
    const [isRedact, setIsRedact] = useState(false);
    const [typesError, seTypesError] = useState<(string | nil)[]>([]);

    const { modalNode, screen } = useModal(({ actionButton, footer, header, body }, closeModal) => {
        return <>
            {header(<>
                <div className="flex flex-gap between">
                    <div>События</div>
                    <EvaButton
                        name={isRedact ? 'checkmark-circle-2-outline' : 'edit-outline'}
                        onClick={() => setIsRedact(is => !is)}
                    />
                </div>
            </>)}
            {body(<>
                {schedule.types?.map((type, typei) => {
                    const typeScope = takeStrongScopeMaker(scope, ' typei:', typei);

                    return <StrongDiv
                        key={typei}
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
                            title="Название пункта"
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
                        <ScheduleWidgetBindAtts
                            atts={type.atts}
                            scope={typeScope}
                            isRedact={isRedact}
                            typeTitle={type.title}
                        />
                    </StrongDiv>;
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
