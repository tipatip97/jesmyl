import { HtmlHTMLAttributes, ReactNode } from "react";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import "./BrutalItem.scss";

export default function BrutalItem({
  onClick,
  icon,
  title,
  description,
}: { icon: EvaIconName; title: string; description?: ReactNode } & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="brutal-item flex between" onClick={onClick}>
      <div className="flex">
        <EvaIcon name={icon} className="margin-big-gap" />
        <div>{title}</div>
      </div>
      {description && <div className="margin-big-gap flex">{description}</div>}
    </div>
  );
}
