import { ReactNode, useMemo } from "react";
import {
  SwipeablerEvent,
  SwipeablerEventDirection,
  SwipeablerEventName,
  SwipeablerProps,
  SwipeablerPropsCallback,
} from "./SwipeableContainer.model";

const defProps: SwipeablerProps = {
  diapasonMoveKf: 10,
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
  const nprops: {
    dir: SwipeablerEventDirection | nil;
    canceled: boolean;
    isMovingPhase: boolean;
    prevPoint: string | null;
  } = useMemo(
    () => ({
      dir: null,
      canceled: false,
      isMovingPhase: false,
      prevPoint: null,
    }),
    []
  );

  const cb: SwipeablerPropsCallback = (event) => {
    if (event.name === "moving") {
      if (!nprops.dir) nprops.dir = event.direction;
      else if (nprops.dir !== event.direction) nprops.canceled = true;
    }
    if (event.name === "stop") {
      if (!nprops.canceled && nprops.dir) {
        onSwipe?.(nprops.dir);

        if (/l/.exec(nprops.dir)) {
          onLeftSwipe?.(nprops.dir === "l");
          onHorizontalSwipe?.(nprops.dir);
        }
        if (/r/.exec(nprops.dir)) {
          onRightSwipe?.(nprops.dir === "r");
          onHorizontalSwipe?.(nprops.dir);
        }
        if (/d/.exec(nprops.dir)) {
          onDownSwipe?.(nprops.dir === "d");
          onVerticalSwipe?.(nprops.dir);
        }
        if (/u/.exec(nprops.dir)) {
          onUpSwipe?.(nprops.dir === "u");
          onVerticalSwipe?.(nprops.dir);
        }
      }

      nprops.dir = null;
      nprops.canceled = false;
    }
  };

  return (
    <div
      className="swipeable-container full-min-height full-min-width"
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
        const diapasonMoveVKf =
          props?.diapasonMoveVKf ??
          props?.diapasonMoveKf ??
          defProps.diapasonMoveKf;

        const diapasonMoveHKf =
          props?.diapasonMoveHKf ??
          props?.diapasonMoveKf ??
          defProps.diapasonMoveKf;

        const toRight = dx >= (diapasonMoveHKf || 0);
        const toLeft = dx <= -(diapasonMoveHKf || 0);
        const toUp = dy <= -(diapasonMoveVKf || 0);
        const toDown = dy >= (diapasonMoveVKf || 0);
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
          (_, pointli) => cardinalPoints[pointli]
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

          cb(eventProp);
        }
      }}
      onTouchEnd={() => {
        nprops.isMovingPhase = false;
        cb({ name: "stop" });
      }}
    >
      {content}
    </div>
  );
}
