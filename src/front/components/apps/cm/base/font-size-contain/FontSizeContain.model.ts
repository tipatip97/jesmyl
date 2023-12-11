
export type FontSizeContainPropsFixOnly = null | 'width' | 'height';
export type FontSizeContainPropsPosition = null | 'center' | 'top center';

export type FontSizeContainResizer = (
    child: HTMLDivElement,
    fixOnly?: FontSizeContainPropsFixOnly,
    position?: FontSizeContainPropsPosition
) => void;

export interface FontSizeContainProps {
    fixOnly?: FontSizeContainPropsFixOnly;
    position?: FontSizeContainPropsPosition;
    updater?: (resizer: () => void) => void;
    delay?: number;
}


