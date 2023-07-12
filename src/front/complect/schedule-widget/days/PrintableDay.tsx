import { useEffect, useRef, useState } from "react";
import ScheduleWidgetDay, { ScheduleWidgetDayProps } from "./Day";
import { useScheduleWidgetRights } from "../useScheduleWidget";
import ScheduleWidgetContextWrapper from "../general/ContextWrapper";

export default function ScheduleWidgetPrintableDay(props: ScheduleWidgetDayProps & { win: typeof window }) {
    const [fontSize, setFontSize] = useState(40);
    const page = useRef<HTMLDivElement>(null);

    useEffect(() => {
        props.win.onclick = (event) => {
            setFontSize(fontSize + (event.clientX > props.win.innerWidth / 2 ? 1 : -1));
            if (page.current) props.win.navigator.clipboard.writeText(page.current.innerText);
        };
        props.win.onkeyup = (event) => {
            if (event.code === 'Equal') setFontSize(fontSize + 1);
            else if (event.code === 'Minus') setFontSize(fontSize - 1);
        };
    });

    const html = props.win.document.querySelector('html');
    if (html) html.style.fontSize = `${fontSize}px`;
    const rights = useScheduleWidgetRights(props.schedule);

    return <ScheduleWidgetContextWrapper schedule={props.schedule} rights={{
        ...rights,
        isCanRead: true,
        isCanTotalRedact: false,
        isCanReadSpecials: false,
        isCanReadTitles: false,
        isCanRedact: false,
    }}>
        <div className="for-print canvas" ref={page}>
            <ScheduleWidgetDay {...props} />
        </div>
    </ScheduleWidgetContextWrapper>;
}
