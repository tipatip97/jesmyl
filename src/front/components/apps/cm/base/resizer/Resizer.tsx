import { CSSProperties } from 'react';
import { ResizerProps } from './Resizer.model';

const defProps: ResizerProps = {
  baseSize: 30,
  min: 10,
  max: 60,
  step: 1,
  perVal: 50,
  value: 35,
  view: 'value' || 'percents',
  onChange: () => {},
  onRange: () => {},
  onClick: () => {},
  icon: '',
};

export default function Resizer(props: Partial<ResizerProps>) {
  const prop = <Name extends keyof ResizerProps>(name: Name): ResizerProps[Name] => {
    return props == null || props[name] === undefined ? defProps[name] : (props[name] as ResizerProps[Name]);
  };

  const oreol = 20;
  const start = { x: 0, y: 0 };
  const move = { x: 0, y: 0 };
  const updateCurr = (ncurr: number) => {
    if (ncurr == null) return;
    ringText.innerText = blurText.innerText = '' + view();
    curr = ncurr;
  };

  const updateCurrPx = () => {
    const min = prop('min');
    const kf = (prop('max') - min) / (curr - min);
    currPx = (farvater.clientWidth - prop('baseSize')) / kf;
  };

  const view = () => (curr < 0 ? '<>' : Math.ceil(prop('view') === 'value' ? curr : percents));
  let panel: HTMLDivElement,
    blurRing: HTMLDivElement,
    blurText: HTMLSpanElement,
    farvater: HTMLDivElement,
    ring: HTMLDivElement,
    ringText: HTMLDivElement;

  let isRangeMode = false;
  let value: number;
  let currPx = oreol;
  let curr = prop('value');
  let percents = Math.ceil(((curr - prop('min')) * 100) / (prop('max') - prop('min')));

  return (
    <div
      ref={element => (panel = element || panel)}
      className="range-panel"
      onClick={() => prop('onClick')(value, percents)}
      style={
        {
          '--base-size': `${prop('baseSize')}px`,
        } as CSSProperties
      }
    >
      <div
        ref={element => (blurRing = element || blurRing)}
        className="blur-ring"
      >
        <span
          ref={element => (blurText = element || blurText)}
          className="text"
        >
          {view()}
        </span>
      </div>
      <div
        ref={element => {
          if (element) {
            farvater = element;
            updateCurrPx();
          }
        }}
        className="range-farvater"
      />
      <div
        ref={element => (ring = element || ring)}
        className={`ring ${props.icon || ''}`}
        onClick={() => {
          updateCurr(-curr);
          if (curr < 0) prop('onRange')(curr, percents);
          prop('onChange')(curr, percents);
        }}
        onTouchStart={event => {
          if (curr < 0) return;
          const { clientX: x, clientY: y } = event.targetTouches[0];
          start.x = x;
          start.y = y;
        }}
        onTouchMove={event => {
          event.stopPropagation();
          if (curr < 0) return;

          const step = prop('step');
          const max = prop('max');
          const min = prop('min');

          const { clientX: x, clientY: y } = event.targetTouches[0];
          move.x = x;
          move.y = y;

          const dr = 10;
          const dY = move.y - start.y;
          const dX = move.x - start.x;
          const absDY = Math.abs(dY);

          const isV = start.y != null && absDY > oreol;
          const isH = start.x != null && Math.abs(dX) > oreol;
          const firstly = start.x != null && start.y != null;
          const limit = farvater.clientWidth - prop('baseSize');

          const left = isRangeMode ? (limit > dX ? (dX < 0 ? 0 : dX) : limit) : isH ? (dX > 0 ? dr : -dr) : 0;

          ring.style.top = `${isV ? (dY > 0 ? dr : -dr) : 0}px`;
          ring.style.left = `${left}px`;

          const pxPer = (left * 100) / (limit || oreol);
          const nval = (pxPer * (max - min)) / 100 + min;
          const newValue = isRangeMode
            ? nval
            : isV
              ? absDY > oreol
                ? dY > 0
                  ? curr - step <= min
                    ? min
                    : curr - step
                  : curr - -step >= max
                    ? max
                    : curr - -step
                : curr
              : curr;

          const oreolBlurLeft = oreol * 3;

          const blurLeft = currPx < oreolBlurLeft ? oreolBlurLeft : currPx.toFixed(0);

          if (firstly) {
            if (isV) start.x = null as never;
            if (isH) {
              start.y = null as never;

              blurRing.style.left = `${blurLeft}px`;
              blurRing.style.opacity = '.7';
            }
          }
          if (!isRangeMode && !isV && isH && dX > 0 && dX > blurLeft) {
            isRangeMode = true;
            panel.classList.add('ranged');
          }

          if (value !== newValue) {
            value = newValue;

            if (isRangeMode && !isNaN(pxPer)) {
              percents = pxPer;
              ringText.innerText = '' + Math.ceil(Math.ceil(prop('view') === 'value' ? value : percents));
            }
            prop('onRange')(value, percents);
          }
        }}
        onTouchEnd={() => {
          if (curr < 0) return;
          if (start.x != null && start.y != null) {
            return;
          }

          ring.style.top = '0';
          ring.style.left = '0';
          blurRing.style.left = '0';
          blurRing.style.opacity = '0';
          panel.classList.remove('ranged');
          isRangeMode = false;

          if (value !== curr) {
            prop('onChange')(value, percents);
            updateCurr(value);
          } else {
            updateCurr(value);
          }
        }}
      >
        <div
          ref={element => (ringText = element || ringText)}
          className="text"
        >
          {view()}
        </div>
      </div>
    </div>
  );
}
