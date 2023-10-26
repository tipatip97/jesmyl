import { ScheduleWidgetRightTexts, ScheduleWidgetRightsCtrl } from "../../../../back/apps/index/complect";
import { StrongControlProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import styles from "./Control.module.scss";

export default function ScheduleWidgetRightControlList({
    R,
    scope,
    rightCtrl,
    fieldName,
    fieldKey,
    className,
    isCantEdit,
    isDescriptionsCollect,
    onUpdate,
    isHidden,
    isReverse,
    isDisabled,
}: StrongControlProps<{
    R?: number,
    className?: string,
    isCantEdit?: boolean,
    rightCtrl: ScheduleWidgetRightsCtrl,
    isDescriptionsCollect?: boolean,
    onUpdate?: (newR: number) => void,
    isHidden?: (type: ScheduleWidgetRightTexts<number>, typei: number) => boolean,
    isReverse?: boolean,
    isDisabled?: (type: ScheduleWidgetRightTexts<number>, typei: number) => boolean,
}>) {
    let isCan = true;

    return <>
        {isDescriptionsCollect && <div className="color--7 margin-gap-v  margin-gap-l">Справедливы утверждения мелким шрифтом</div>}
        {rightCtrl.texts.map((type, typei) => {
            if (type.hidden || isHidden?.(type, typei)) return null;
            const isHas = (type.always || isCan) && rightCtrl.checkIsHasRights(R, type.id);

            const node = <div key={type.id} className={'flex flex-gap between margin-gap-v over-hidden ' + className}>
                <div>
                    <div>{type.title}</div>
                    {type.description && (!isDescriptionsCollect || isCan)
                        && <div className={styles.description + ' color--4 margin-gap-l'}>{isHas ? type.description[0] : type.description[1] || type.description[0]}</div>}
                </div>

                <StrongEvaButton
                    scope={scope}
                    fieldName={fieldName}
                    fieldKey={fieldKey}
                    cud="U"
                    disabled={isCantEdit || !isCan || type.always || !!isDisabled?.(type, typei)}
                    className={(isReverse ? !isHas : isHas) ? 'color--ok' : 'color--3'}
                    name={(isReverse ? !isHas : isHas) ? 'toggle-right-outline' : 'toggle-left-outline'}
                    mapExecArgs={(args) => {
                        if (onUpdate !== undefined) {
                            onUpdate(rightCtrl.switchRights(R, type.id));
                            return;
                        }
                        return {
                            ...args,
                            value: rightCtrl.switchRights(R, type.id),
                        };
                    }}
                />
            </div>;

            if (isCan) isCan = isHas;

            return node;
        })}</>;
}
