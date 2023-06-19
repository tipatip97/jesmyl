import { ReactNode } from "react";
import { useScheduleWidgetRolesContext } from "../useScheduleWidget";

export default function ScheduleWidgetTopicTitle<
    TitleBox extends { title?: string },
>({
    titleBox, topicBox, className, altTitle, prefix,
}: {
    titleBox: TitleBox,
    topicBox?: { topic?: string },
    className?: string,
    prefix?: ReactNode,
} & (TitleBox['title'] extends string ? { altTitle?: string } : { altTitle: string })) {
    const userRights = useScheduleWidgetRolesContext();

    return <div className={className}>
        {prefix}
        {userRights.isCanReadTitles && topicBox?.topic
            ? <>
                <span className="color--3">{titleBox.title ?? altTitle}: </span>
                {topicBox.topic}
            </>
            : <span className="color--3">{titleBox.title ?? altTitle}</span>}
    </div>;
}
