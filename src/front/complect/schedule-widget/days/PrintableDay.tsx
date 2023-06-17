import { useEffect, useRef, useState } from "react";
import ScheduleWidgetDay, { ScheduleWidgetDayProps } from "./Day";

export default function ScheduleWidgetPrintableDay(props: ScheduleWidgetDayProps & { win: typeof window }) {
    const [fontSize, setFontSize] = useState(20);
    const page = useRef<HTMLDivElement>(null);

    useEffect(() => {
        props.win.onclick = (event) => {
            props.win.console.log(event);
            setFontSize(fontSize + (event.clientX > props.win.innerWidth / 2 ? 1 : -1));
            if (page.current) props.win.navigator.clipboard.writeText(page.current.innerText);
        };
        props.win.onkeyup = (event) => {
            props.win.console.log(event);
            if (event.code === 'Equal') setFontSize(fontSize + 1);
            else if (event.code === 'Minus') setFontSize(fontSize - 1);
        };
    });

    const html = props.win.document.querySelector('html');
    if (html) html.style.fontSize = `${fontSize}px`;

    return <div className="for-print canvas" ref={page}>
        <ScheduleWidgetDay {...props} />
    </div>;
}
