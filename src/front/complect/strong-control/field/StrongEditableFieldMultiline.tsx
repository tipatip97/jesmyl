import Markdown from "markdown-to-jsx";
import { useRef, useState } from "react";
import style from "./Multiline.module.scss";

const isNIs = (is: boolean) => !is;
const onImageClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        event.currentTarget.requestFullscreen();
    }
};

const ImgContainer = ({ src, alt }: { src: string, alt: string }) => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    return <span className={style.imgContainer}>
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            onClick={onImageClick}
        />
    </span>;
};

const options = {
    overrides: {
        img: ImgContainer
    }
};

export default function StrongEditableFieldMultiline({
    value,
}: {
    value: string,
}) {
    const lines = value.split(/\n/, 6);
    const shortValue = lines.slice(0, 4).join('\n').slice(0, 150);
    const isExpandable = lines.length > 4 || shortValue !== value;
    const [isExpand, setisExpand] = useState(false);
    const expandMessage = isExpandable ? isExpand || <span className="color--3">Часть текста скрыта</span> : null;

    return <div
        className={style.markdownFieldContent + ' white-pre-wrap break-word' + (isExpandable ? ' pointer' : '')}
        onClick={isExpandable
            ? () => setisExpand(isNIs)
            : undefined}
    >
        {expandMessage}
        <Markdown options={options}>{isExpand ? value : shortValue}</Markdown>
        {expandMessage}
    </div>;
}
