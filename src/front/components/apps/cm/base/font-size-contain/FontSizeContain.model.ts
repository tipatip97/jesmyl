
export type FontSizeContainPropsFixOnly = null | 'width' | 'height';
export type FontSizeContainPropsPosition = null | 'center' | 'top center';

export type FontSizeContainResizer = (
    child: HTMLDivElement,
    fixOnly?: FontSizeContainPropsFixOnly,
    position?: FontSizeContainPropsPosition
) => void;

export interface FontSizeContainProps {
    containerId?: string;
    fixOnly?: FontSizeContainPropsFixOnly;
    position?: FontSizeContainPropsPosition;
    updater?: (resizer: (containerId?: string) => void) => void;
    delay?: number;
}


