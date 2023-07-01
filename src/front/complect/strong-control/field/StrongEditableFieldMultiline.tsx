import Markdown from "markdown-to-jsx";
import { useState } from "react";
import style from "./Multiline.module.scss";

const isNIs = (is: boolean) => !is;
const onImageClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    const src = event.currentTarget.getAttribute('prop-src');
    if (src) window.open(src);
};

const refReg = /!\[[^\]]+] *\[[^\]]+\]/g;

const ImgContainer = (props: { src: string, alt: string }) => {

    if (!props.src) return null;
    return <span
        className={style.imgContainer}
        onClick={onImageClick}
        prop-src={props.src}
        style={{
            backgroundImage: `url(${props.src})`,
        }}
    />;
};

const options = {
    overrides: {
        img: ImgContainer,
    }
};

export default function StrongEditableFieldMultiline({ value }: { value: string }) {
    const lines = value.split(/\n/, 6);
    const shortValue = lines.slice(0, 4).join('\n').slice(0, 150);
    const isExpandable = lines.length > 4 || shortValue !== value;
    const [isExpand, setisExpand] = useState(false);
    const expandMessage = isExpandable ? isExpand || <span className="color--3">Часть текста скрыта</span> : null;
    const content = isExpand ? value : shortValue;

    return <div
        className={style.markdownFieldContent + ' white-pre-wrap break-word' + (isExpandable ? ' pointer' : '')}
        onClick={isExpandable
            ? () => setisExpand(isNIs)
            : undefined}
    >
        {expandMessage}
        <Markdown options={options}>
            {content.includes('![')
                ? content.replace(refReg, '*[Ссылки не работают]*')
                : content}
        </Markdown>
        {expandMessage}
    </div>;
}
