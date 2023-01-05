import { HTMLAttributes, ReactNode } from "react";
import "./Templates.scss";

export default function PrintableTemplate({
  noder,
  pager,
}: {
  noder?:
    | ReactNode
    | ((
        node: (node: ReactNode) => ReactNode,
        props?: HTMLAttributes<HTMLDivElement>
      ) => ReactNode);
  pager?:
    | ReactNode
    | ((
        node: (node: ReactNode) => ReactNode,
        props?: HTMLAttributes<HTMLDivElement>
      ) => ReactNode);
}) {
  const pageNoder = (
    page: ReactNode,
    props?: HTMLAttributes<HTMLDivElement>
  ) => (
    <div
      {...props}
      className={`${
        props?.className || ""
      } for-print break-inside-avoid padding-giant-gap full-width full-height text-center`}
    >
      {page}
    </div>
  );
  return (
    (typeof pager === "function" ? pager(pageNoder) : pager) ?? (
      <div className="printable-template print-template-page full-container for-print break-inside-avoid">
        {typeof noder === "function" ? noder(pageNoder) : noder}
      </div>
    )
  );
}
