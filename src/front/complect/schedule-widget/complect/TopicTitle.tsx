import { ReactNode } from "react";

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
    return <div className={className}>
        {prefix}
        {titleBox.title ?? altTitle}
        {topicBox?.topic ? `: ${topicBox?.topic}` : ''}
    </div>;
}
