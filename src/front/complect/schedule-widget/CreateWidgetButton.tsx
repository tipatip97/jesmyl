import { useState } from "react";
import { AppName } from "../../app/App.model";
import EvaButton from "../eva-icon/EvaButton";
import KeyboardInput from "../keyboard/KeyboardInput";
import useModal from "../modal/useModal";
import StrongButton from "../strong-control/StrongButton";
import StrongEvaButton from "../strong-control/StrongEvaButton";
import './ScheduleWidget.scss';
import { initialScheduleScope } from "./useScheduleWidget";

export default function ScheduleCreateWidgetButton({
    title: topTitle,
    schw,
    appName,
}: {
    title: string,
    schw: number,
    appName: AppName,
}) {
    const [title, setTitle] = useState(topTitle);
    const [tosterNode, toast] = useModal();
    const [modalNode, screen] = useModal(({ header, body, footer }, closeModal) => {
        return <>
            {header(<>Новое расписание</>)}
            {body(<>
                <div>Создать расписание с названием</div>
                <div>
                    <KeyboardInput
                        value={title}
                        onChange={setTitle}
                    />
                </div>
            </>)}
            {footer(<div className="flex flex-gap">
                <StrongEvaButton
                    name="plus"
                    scope={initialScheduleScope}
                    fieldName="list"
                    cud="C"
                    className="color--ok"
                    postfix="Создать"
                    onSuccess={() => {
                        closeModal();
                        setTitle('');
                    }}
                    mapExecArgs={(args) => {
                        if (!title) {
                            toast('Нужно дать название!');
                            return;
                        }

                        return {
                            ...args,
                            schw,
                            title,
                            app: appName,
                        };
                    }}
                />
                <EvaButton
                    name="close"
                    postfix="Отменить"
                    className="color--ko"
                    onClick={() => {
                        setTitle('');
                        closeModal();
                    }}
                />
            </div>)}
        </>;
    });

    return <>
        {modalNode}
        {tosterNode}
        <StrongButton
            title="Создать расписание"
            scope={initialScheduleScope}
            fieldName="list"
            cud="C"
            mapExecArgs={(args) => {
                if (!title) {
                    screen();
                    return;
                }
                setTitle('');

                return {
                    ...args,
                    schw,
                    title,
                    app: appName,
                };
            }}
        />
    </>;
}