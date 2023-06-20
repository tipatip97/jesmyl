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
}: StrongControlProps<{
    R?: number,
    className?: string,
    isCantEdit?: boolean,
    rights: ScheduleWidgetRights,
}>) {
    let isCan = true;

    return <>{rights.texts.map((type) => {
        if (type.hidden) return null;
        const isHas = (type.always || isCan) && (isCantEdit || rights.checkIsHasRights(R, type.id));

        const node = <div key={type.id} className={'flex between margin-gap-v over-hidden ' + className}>
            <div>
                <div>{type.title}</div>
                {type.description
                    && <div className={styles.description + ' color--4 margin-gap-l'}>{type.description}</div>}
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
