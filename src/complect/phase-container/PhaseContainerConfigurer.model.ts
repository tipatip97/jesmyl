import { DOMElement, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export interface PhaseContainerConfigurerProps extends PhaseContainerProps {
    goBack: (isForceBack?: boolean) => void;
}

export interface PhaseContainerProps extends HtmlHTMLAttributes<HTMLDivElement>, Partial<DOMElement<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    topClass: string;
    headClass?: string;
    contentClass?: string;
    withoutBackButton?: boolean;
    noHead?: boolean;
    headTitle?: string | number;
    head?: ReactNode | ((backButton: ReactNode, titleNode: ReactNode) => ReactNode);
    content: ReactNode;
    contentRef?: React.LegacyRef<HTMLDivElement>;
}

export interface EditablePhaseContainerProps extends PhaseContainerProps {
    onMoreClick?: () => void;
}