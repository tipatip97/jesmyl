import mylib from "../my-lib/MyLib";
import { SwipeablerEvent, SwipeablerEventDirection, SwipeablerEventName, SwipeablerListeners, SwipeablerProps, SwipeablerPropsArg } from "./Swipeabler.model";



export class Swipeabler {
    element: HTMLElement;
    private onTouchStart?: SwipeablerListeners;
    private onTouchMove?: SwipeablerListeners;
    private onTouchEnd?: SwipeablerListeners;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    onSwipe(properties: SwipeablerPropsArg = {} as SwipeablerPropsArg) {
        const props: SwipeablerProps = (mylib.isFunc(properties) ? { cb: properties } : properties) as SwipeablerProps;

        const defProps: SwipeablerProps = {
            cb: () => { },
            startMoveKf: 10,
            dirDiapasonH: 50,
            dirDiapasonV: 50,
            isMovingPhase: false,
            movingStep: 5,
        };
        const nprops = Object.assign({}, defProps, props, {
            startMoveVKf: props.startMoveVKf == null
                ? props.startMoveKf == null
                    ? defProps.startMoveKf
                    : props.startMoveKf
                : props.startMoveVKf,

            startMoveHKf: props.startMoveHKf == null
                ? props.startMoveKf == null
                    ? defProps.startMoveKf
                    : props.startMoveKf
                : props.startMoveHKf,
        });

        const start = { x: 0, y: 0 };
        const move = { x: 0, y: 0 };

        this.onTouchStart = (event: TouchEvent) => {
            event.preventDefault = () => event.preventDefault();
            //event.stopPropagation();

            const { clientX: x, clientY: y } = event.targetTouches[0];
            start.x = x;
            start.y = y;
            nprops.prevPoint = null;
        };

        this.onTouchMove = (event: TouchEvent) => {
            const { clientX: x, clientY: y } = event.targetTouches[0];
            move.x = x;
            move.y = y;

            const dx = x - start.x;
            const dy = y - start.y;
            const toRight = dx >= (nprops.startMoveHKf ?? 0);
            const toLeft = dx <= -(nprops.startMoveHKf ?? 0);
            const toUp = dy <= -(nprops.startMoveVKf ?? 0);
            const toDown = dy >= (nprops.startMoveVKf ?? 0);
            const cardinalPoints = [toUp, toUp && toRight, toRight, toDown && toRight, toDown, toDown && toLeft, toLeft, toUp && toLeft];
            const cardinalPointsLabels: SwipeablerEventDirection[] = ['u', 'ur', 'r', 'dr', 'd', 'dl', 'l', 'ul'];
            const toAny = cardinalPoints.some(cardinalPoint => cardinalPoint);
            const allPointLabels = cardinalPointsLabels.filter((pointl, pointli) => cardinalPoints[pointli]);
            const toLabel = allPointLabels.find(pointl => pointl.length === 2) || allPointLabels[0];

            if (toAny) {
                const isStart = !nprops.isMovingPhase;
                const isChange = nprops.prevPoint != null && nprops.prevPoint !== toLabel;
                const eventn: SwipeablerEventName = isStart ? 'start' : isChange ? 'change' : 'moving';
                const eventProp: SwipeablerEvent = {
                    name: eventn,
                    direction: toLabel,
                    touches: event.touches.length
                };

                if (isStart) {
                    nprops.isMovingPhase = true;
                } else if (isChange || nprops.prevPoint == null) {
                    nprops.prevPoint = toLabel;
                }

                nprops.cb(eventProp);
            }
        };

        this.onTouchEnd = () => {
            nprops.isMovingPhase = false;
            nprops.cb({ name: 'stop' });
        };

        this.element.addEventListener('touchstart', this.onTouchStart);
        this.element.addEventListener('touchmove', this.onTouchMove);
        this.element.addEventListener('touchend', this.onTouchEnd);

        return this;
    }

    mute() {
        if (this.onTouchStart) this.element.addEventListener('touchstart', this.onTouchStart);
        if (this.onTouchMove) this.element.addEventListener('touchmove', this.onTouchMove);
        if (this.onTouchEnd) this.element.addEventListener('touchend', this.onTouchEnd);
    }
}
