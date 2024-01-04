import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontSizeContainProps } from './FontSizeContain.model';

const shadowStyle: CSSProperties = {
  position: 'absolute',
  color: 'transparent',
  pointerEvents: 'none',
};

export default function FontSizeContain({ className, content, html, subUpdate }: FontSizeContainProps) {
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const shadowChildRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current !== null && shadowChildRef.current !== null) {
      const newScale = Math.min(
        containerRef.current.clientHeight / shadowChildRef.current.clientHeight,
        containerRef.current.clientWidth / shadowChildRef.current.clientWidth,
      );

      if (newScale !== scale && newScale > 0 && Number.isFinite(newScale) && !isNaN(newScale)) setScale(newScale);
    }
  }, [scale, content, html, subUpdate]);

  return (
    <Container
      className={className}
      ref={containerRef}
    >
      {html !== undefined ? (
        <>
          <WithHtml
            __html={html}
            scale={scale}
            shadowChildRef={shadowChildRef}
          />
        </>
      ) : (
        <>
          <div
            ref={shadowChildRef}
            className="fsc-children fsc-shadow-child"
            style={shadowStyle}
          >
            {content}
          </div>
          <Child
            $scale={scale}
            className="fsc-children fsc-child"
          >
            {content}
          </Child>
        </>
      )}
    </Container>
  );
}

const WithHtml = ({
  shadowChildRef,
  __html,
  scale,
}: {
  shadowChildRef: { current: HTMLDivElement | null };
  __html: string;
  scale: number;
}) => {
  return (
    <>
      <div
        ref={shadowChildRef}
        dangerouslySetInnerHTML={{ __html }}
        className="fsc-children fsc-shadow-child"
        style={shadowStyle}
      />
      <Child
        $scale={scale}
        dangerouslySetInnerHTML={{ __html }}
        className="fsc-children fsc-child"
      />
    </>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Child = styled.div<{ $scale: number }>`
  ${props =>
    props.$scale &&
    css`
      scale: ${props.$scale};
    `}
`;
