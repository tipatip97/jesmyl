import Markdown from "markdown-to-jsx";
import { useState } from "react";

const isNIs = (is: boolean) => !is;

export default function StrongEditableFieldMultiline({
    value,
}: {
    value: string,
}) {
    const lines = value.split(/\n+/, 6);
    const shortValue = lines.slice(0, 4).join('\n').slice(0, 150);
    const isExpandable = lines.length > 4 || shortValue !== value;
    const [isExpand, setisExpand] = useState(false);
    const expandMessage = isExpandable ? isExpand || <span className="color--3">Часть текста скрыта</span> : null;

    return <div
        className={isExpandable ? 'pointer' : ''}
        onClick={isExpandable
            ? () => setisExpand(isNIs)
            : undefined}
    >
        {expandMessage}
        <Markdown>{isExpand ? value : shortValue}</Markdown>
        {expandMessage}
    </div>;
}
