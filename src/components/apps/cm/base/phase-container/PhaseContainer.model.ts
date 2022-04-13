import { DOMElement, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";



export interface PhaseContainerProps extends HtmlHTMLAttributes<HTMLDivElement>, Partial<DOMElement<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    topClass: string;
    headClass?: string;
    contentClass?: string;
    withoutBackButton?: boolean;
    head?: ReactNode | ((backButton: JSX.Element) => ReactNode);
    content: ReactNode;
    reference?: React.LegacyRef<HTMLDivElement>;
}