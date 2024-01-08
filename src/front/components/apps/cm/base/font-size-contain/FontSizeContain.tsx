import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import { FontSizeContainProps } from './FontSizeContain.model';

const topShadowStyle: CSSProperties = {
  position: 'absolute',
  color: 'transparent',
  pointerEvents: 'none',
};

export default function FontSizeContain({
  className,
  content,
  html,
  subUpdate,
  childStyle,
  shadowStyle,
  style,
}: FontSizeContainProps) {
  const [scale, setScale] = useState(1);
  const [isInit, setIsInit] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const shadowChildRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (isInit) setTimeout(setIsInit, 500, false);
    if (containerRef.current !== null && shadowChildRef.current !== null) {
      const newScale = Math.min(
        containerRef.current.clientHeight / shadowChildRef.current.clientHeight,
        containerRef.current.clientWidth / shadowChildRef.current.clientWidth,
      );

      if (newScale !== scale && newScale > 0 && Number.isFinite(newScale) && !isNaN(newScale)) setScale(newScale);
    }
  }, [scale, content, html, subUpdate, isInit]);

  return (
    <div
      className={className + ' relative full-height full-width'}
      ref={containerRef}
      style={style}
    >
      {html !== undefined ? (
        <>
          <WithHtml
            __html={html}
            scale={scale}
            shadowChildRef={shadowChildRef}
            shadowStyle={{ ...topShadowStyle, ...shadowStyle }}
            childStyle={childStyle}
          />
        </>
      ) : (
        <>
          <div
            ref={shadowChildRef}
            style={{ ...topShadowStyle, ...shadowStyle }}
          >
            {content}
          </div>
          <div style={{ ...childStyle, transform: `scale(${scale})` }}>{content}</div>
        </>
      )}
    </div>
  );
}

const WithHtml = ({
  shadowChildRef,
  __html,
  scale,
  childStyle,
  shadowStyle,
}: {
  shadowChildRef: { current: HTMLDivElement | null };
  __html: string;
  scale: number;
  shadowStyle?: CSSProperties;
  childStyle?: CSSProperties;
}) => {
  return (
    <>
      <div
        ref={shadowChildRef}
        style={shadowStyle}
        dangerouslySetInnerHTML={{ __html }}
      />
      <div
        style={{ ...childStyle, transform: `scale(${scale})` }}
        dangerouslySetInnerHTML={{ __html }}
      />
    </>
  );
};
