import { PropsWithChildren, useState } from 'react';
import { FontSizeContainProps, FontSizeContainResizer } from './FontSizeContain.model';

export default function FontSizeContain({ delay, ...props }: PropsWithChildren<FontSizeContainProps>) {
  const [isFirst, setIsFirst] = useState(true);

  return (
    <div
      style={{ display: 'inline-block' }}
      ref={element => {
        if (element) {
          const compute = () => {
            const res = () => {
              if (!element.innerText) return;
              resize(element, props.fixOnly, props.position);
            };

            res();
            setTimeout(() => res());
            if (isFirst) {
              setIsFirst(false);
              props.updater?.(res);
            }
          };
          if (delay) setTimeout(compute, delay);
          else compute();
        }
      }}
    >
      {props.children}
    </div>
  );
}

const resize: FontSizeContainResizer = (child, fixOnly?, position?) => {
  const { clientWidth, clientHeight } = (child.parentElement as HTMLDivElement) || {};
  let max = 1000;
  const step = 5;
  let size = 50;
  let min = 0;

  const resize = () => {
    child.style.fontSize = `${size}%`;
    if (
      min < max &&
      (fixOnly === 'height' || clientWidth > child.clientWidth) &&
      (fixOnly === 'width' || clientHeight > child.clientHeight)
    ) {
      size += step;
      min++;
      resize();
    }
  };
  resize();
  child.style.fontSize = `${size - step}%`;
  if (position) {
    const [vert, hor] = position.split(' ');

    child.style.marginTop = vert === 'center' ? `${(clientHeight - child.clientHeight) / 2}px` : '0';
    child.style.marginLeft = (hor ? hor === 'center' : vert === 'center')
      ? `${(clientWidth - child.clientWidth) / 2}px`
      : '0';
  }
};
