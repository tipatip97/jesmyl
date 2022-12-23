
export type SwipeablerListeners = (event: TouchEvent) => void;
export type SwipeablerPropsCallback = (event: SwipeablerEvent) => void;
export type SwipeablerPropsArg = SwipeablerPropsCallback | SwipeablerProps;


export type SwipeablerEventDirection = 'u' | 'ur' | 'r' | 'dr' | 'd' | 'dl' | 'l' | 'ul';
export type SwipeablerEventName = 'start' | 'change' | 'stop' | 'moving';
export interface SwipeablerEvent {
    name: SwipeablerEventName;
    direction?: SwipeablerEventDirection;
    touches?: number;
}

export interface SwipeablerProps {
    diapasonMoveKf?: number;
    diapasonMoveVKf?: number;
    diapasonMoveHKf?: number;

    movingStep?: number;
};
