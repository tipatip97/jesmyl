import { HtmlHTMLAttributes } from "react";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import "./BrutalItem.scss";

export default function BrutalItem({
  onClick,
  icon,
  title,
}: { icon: EvaIconName; title: string } & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="brutal-item flex" onClick={onClick}>
      <EvaIcon name={icon} className="margin-big-gap" />
      <div>{title}</div>
    </div>
  );
}
