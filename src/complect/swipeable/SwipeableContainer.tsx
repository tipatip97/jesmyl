import { ReactNode, useMemo } from "react";
import {
  SwipeablerEvent,
  SwipeablerEventDirection,
  SwipeablerEventName,
  SwipeablerProps,
} from "./SwipeableContainer.model";

const defProps: SwipeablerProps = {
  cb: () => {},
  startMoveKf: 10,
  dirDiapasonH: 50,
  dirDiapasonV: 50,
  isMovingPhase: false,
  movingStep: 5,
};

export default function SwipeableContainer({
  onLeftSwipe,
  content,
  onDownSwipe,
  onRightSwipe,
  onUpSwipe,
  props,
  onSwipe,
  onHorizontalSwipe,
  onVerticalSwipe,
}: {
  content: ReactNode;
  onLeftSwipe?: (isClearDir: boolean) => void;
  onUpSwipe?: (isClearDir: boolean) => void;
  onDownSwipe?: (isClearDir: boolean) => void;
  onRightSwipe?: (isClearDir: boolean) => void;
  onSwipe?: (dir: SwipeablerEventDirection) => void;
  onVerticalSwipe?: (dir: SwipeablerEventDirection) => void;
  onHorizontalSwipe?: (dir: SwipeablerEventDirection) => void;
  props?: SwipeablerProps;
}) {
  const start = useMemo(() => ({ x: 0, y: 0 }), []);
  const move = useMemo(() => ({ x: 0, y: 0 }), []);
  const direction: { dir: SwipeablerEventDirection | nil; canceled: boolean } =
    useMemo(() => ({ dir: null, canceled: false }), []);

  const nprops = useMemo(
    () =>
      Object.assign(
        {},
        defProps,
        props,
        props
          ? {
              startMoveVKf:
                props.startMoveVKf == null
                  ? props.startMoveKf == null
                    ? defProps.startMoveKf
                    : props.startMoveKf
                  : props.startMoveVKf,

              startMoveHKf:
                props.startMoveHKf == null
                  ? props.startMoveKf == null
                    ? defProps.startMoveKf
                    : props.startMoveKf
                  : props.startMoveHKf,
            }
          : {}
      ),
    []
  );

  nprops.cb = (event) => {
    if (event.name === "moving") {
      if (!direction.dir) direction.dir = event.direction;
      else if (direction.dir !== event.direction) direction.canceled = true;
    }
    if (event.name === "stop") {
      if (!direction.canceled && direction.dir) {
        onSwipe?.(direction.dir);

        if (/l/.exec(direction.dir)) {
          onLeftSwipe?.(direction.dir === "l");
          onHorizontalSwipe?.(direction.dir);
        }
        if (/r/.exec(direction.dir)) {
          onRightSwipe?.(direction.dir === "r");
          onHorizontalSwipe?.(direction.dir);
        }
        if (/d/.exec(direction.dir)) {
          onDownSwipe?.(direction.dir === "d");
          onVerticalSwipe?.(direction.dir);
        }
        if (/u/.exec(direction.dir)) {
          onUpSwipe?.(direction.dir === "u");
          onVerticalSwipe?.(direction.dir);
        }
      }

      direction.dir = null;
      direction.canceled = false;
    }
  };

  return (
    <div
      className="swipeable-container"
      onTouchStart={(event) => {
        const { clientX: x, clientY: y } = event.targetTouches[0];
        start.x = x;
        start.y = y;
        nprops.prevPoint = null;
      }}
      onTouchMove={(event) => {
        const { clientX: x, clientY: y } = event.targetTouches[0];
        move.x = x;
        move.y = y;

        const dx = x - start.x;
        const dy = y - start.y;
        const toRight = dx >= (nprops.startMoveHKf ?? 0);
        const toLeft = dx <= -(nprops.startMoveHKf ?? 0);
        const toUp = dy <= -(nprops.startMoveVKf ?? 0);
        const toDown = dy >= (nprops.startMoveVKf ?? 0);
        const cardinalPoints = [
          toUp,
          toUp && toRight,
          toRight,
          toDown && toRight,
          toDown,
          toDown && toLeft,
          toLeft,
          toUp && toLeft,
        ];
        const cardinalPointsLabels: SwipeablerEventDirection[] = [
          "u",
          "ur",
          "r",
          "dr",
          "d",
          "dl",
          "l",
          "ul",
        ];
        const toAny = cardinalPoints.some((cardinalPoint) => cardinalPoint);
        const allPointLabels = cardinalPointsLabels.filter(
          (pointl, pointli) => cardinalPoints[pointli]
        );
        const toLabel =
          allPointLabels.find((pointl) => pointl.length === 2) ||
          allPointLabels[0];

        if (toAny) {
          const isStart = !nprops.isMovingPhase;
          const isChange =
            nprops.prevPoint != null && nprops.prevPoint !== toLabel;
          const eventn: SwipeablerEventName = isStart
            ? "start"
            : isChange
            ? "change"
            : "moving";
          const eventProp: SwipeablerEvent = {
            name: eventn,
            direction: toLabel,
            touches: event.touches.length,
          };

          if (isStart) {
            nprops.isMovingPhase = true;
          } else if (isChange || nprops.prevPoint == null) {
            nprops.prevPoint = toLabel;
          }

          nprops.cb(eventProp);
        }
      }}
      onTouchEnd={() => {
        nprops.isMovingPhase = false;
        nprops.cb({ name: "stop" });
      }}
    >
      {content}
    </div>
  );
}
