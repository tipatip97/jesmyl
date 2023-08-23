import { useState } from "react";
import { CustomAttUseTaleId } from "../../../../back/apps/index/rights";
import useAuth from "../../../components/index/useAuth";
import EvaButton from "../../eva-icon/EvaButton";
import useModal from "../../modal/useModal";
import mylib, { MyLib } from "../../my-lib/MyLib";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { IScheduleWidget, ScheduleWidgetDayEventAttValues } from "../ScheduleWidget.model";
import ScheduleWidgetCleans from "../complect/Cleans";
import ScheduleWidgetTopicTitle from "../complect/TopicTitle";
import { takeScheduleStrongScopeMaker, useSchedules } from "../useScheduleWidget";

const itNNull = (it: unknown) => it !== null;

export function ScheduleWidgetCopy(props: { schw: number }) {
    const [schw, setSchw] = useState(0);
    const schedules = useSchedules();
    const schedule = schw === 0 ? undefined : schedules.list.find(sch => sch.w === schw);
    const auth = useAuth();

    const [modalNode, openModal] = useModal(({ header, body }, closeModal) => {
        if (schedule === undefined)
            return <>
                {header(<>Какое расписание копировать?</>)}
                {body(<>{
                    schedules.list.map((schedule) => {
                        if (props.schw === schedule.w) return null;

                        return <div
                            key={schedule.w}
                            className="pointer margin-gap-v"
                            onClick={() => setSchw(schedule.w)}
                        >
                            <ScheduleWidgetTopicTitle
                                titleBox={schedule}
                                topicBox={schedule}
                            />
                        </div>;
                    })
                }</>)}
            </>
        else {
            const scope = takeScheduleStrongScopeMaker(props.schw);
            return <>
                {header(<>Копируем {schedule.title}</>)}
                {body(<>
                    <StrongEvaButton
                        scope={scope}
                        fieldName="copy"
                        name="copy"
                        postfix="Скопировать"
                        onSuccess={closeModal}
                        mapExecArgs={(args) => {
                            const myUser = schedule.ctrl.users.find((user) => user.login === auth.login);
                            if (auth == null || myUser == null) return;

                            const value: IScheduleWidget = {
                                ...schedule,
                                w: props.schw,
                                ctrl: {
                                    ...schedule.ctrl,
                                    users: [myUser],
                                    roles: schedule.ctrl.roles.map(role => {
                                        return {
                                            ...role,
                                            user: undefined,
                                        };
                                    }),
                                },
                                days: schedule.days.map(day => {
                                    return {
                                        ...day,
                                        list: day.list.map(event => {
                                            const atts: ScheduleWidgetDayEventAttValues = {};

                                            if (event.atts)
                                                MyLib.entries(event.atts)
                                                    .forEach(([attKey, attValue]) => {
                                                        if (mylib.isArr(attValue) || !mylib.isArr(attValue.values)) {
                                                            if (attKey === '[leader]:game')
                                                                atts[attKey] = {};
                                                            else if (attKey === '[SCH]:chlist' && !mylib.isArr(attValue) && mylib.isArr(attValue.list))
                                                                atts[attKey] = {
                                                                    ...attValue,
                                                                    list: attValue.list.map(att => {
                                                                        return att[0] === 1
                                                                            ? [0, ...att.slice(1)]
                                                                            : att;
                                                                    })
                                                                };
                                                            else
                                                                atts[attKey] = attValue;
                                                        } else {
                                                            atts[attKey] = {
                                                                ...attValue,
                                                                values: attValue.values.map((val) => {
                                                                    return typeof val[1] === 'number' && ScheduleWidgetCleans.checkIsTaleIdUnit(val[1], CustomAttUseTaleId.Users)
                                                                        ? null
                                                                        : val[0] === true
                                                                            ? [false, ...val.slice(1)]
                                                                            : val;
                                                                }).filter(itNNull),
                                                            };
                                                        }
                                                    });

                                            return {
                                                ...event,
                                                rate: undefined,
                                                atts,
                                            };
                                        }),
                                    };
                                }),
                            };

                            return {
                                ...args,
                                value,
                            };
                        }}
                    />
                </>)}
            </>;
        }
    });

    return <>
        {modalNode}
        <EvaButton
            name="copy"
            postfix="Скопировать расписание"
            onClick={openModal}
        />
    </>;
}
