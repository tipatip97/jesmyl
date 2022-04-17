import { DOMElement, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export { default } from './PhaseContainer';

export interface PhaseContainerProps extends HtmlHTMLAttributes<HTMLDivElement>, Partial<DOMElement<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    topClass: string;
    headClass?: string;
    contentClass?: string;
    withoutBackButton?: boolean;
    noHead?: boolean;
    head?: ReactNode | ((backButton: JSX.Element) => ReactNode);
    content: ReactNode;
    contentRef?: React.LegacyRef<HTMLDivElement>;
}