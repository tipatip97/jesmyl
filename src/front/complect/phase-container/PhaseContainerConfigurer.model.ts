import { ReactNode } from "react";

export interface PhaseContainerConfigurerProps extends PhaseContainerProps {
    goBack: (isForceBack?: boolean) => void,
}

export interface PhaseContainerProps {
    className: string,
    headClass?: string,
    contentClass?: string,
    withoutBackButton?: boolean,
    headTitle?: string | number,
    head?: ReactNode,
    content: ReactNode,
    contentRef?: React.LegacyRef<HTMLDivElement>,
    onMoreClick?: (() => void),
    withoutBackSwipe?: boolean,
}
