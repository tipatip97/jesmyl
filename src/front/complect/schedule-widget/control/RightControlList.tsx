import { ScheduleWidgetRights } from "../../../../back/apps/index/complect";
import { StrongControlProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import styles from "./Control.module.scss";

export default function ScheduleWidgetRightControlList({
    R,
    scope,
    rights,
    fieldName,
    className,
    isCantEdit,
    isDescriptionsCollect,
}: StrongControlProps<{
    R?: number,
    className?: string,
    isCantEdit?: boolean,
    rights: ScheduleWidgetRights,
    isDescriptionsCollect?: boolean,
}>) {
    let isCan = true;

    return <>
        {isDescriptionsCollect && <div className="color--7 margin-gap-v  margin-gap-l">Справедливы утверждения мелким шрифтом</div>}
        {rights.texts.map((type) => {
            if (type.hidden) return null;
            const isHas = (type.always || isCan) && (isCantEdit || rights.checkIsHasRights(R, type.id));

            const node = <div key={type.id} className={'flex flex-gap between margin-gap-v over-hidden ' + className}>
                <div>
                    <div>{type.title}</div>
                    {type.description && (!isDescriptionsCollect || isCan)
                        && <div className={styles.description + ' color--4 margin-gap-l'}>{isHas ? type.description[0] : type.description[1] || type.description[0]}</div>}
                </div>

                <StrongEvaButton
                    scope={scope}
                    fieldName={fieldName}
                    cud="U"
                    disabled={isCantEdit || !isCan || type.always}
                    className={isHas ? 'color--ok' : 'color--3'}
                    name={isHas ? 'toggle-right-outline' : 'toggle-left-outline'}
                    mapExecArgs={(args) => {
                        return {
                            ...args,
                            value: rights.switchRights(R, type.id),
                        };
                    }}
                />
            </div>;

            if (isCan) isCan = isHas;

            return node;
        })}</>;
}
