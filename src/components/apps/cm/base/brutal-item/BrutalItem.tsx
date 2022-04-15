import { HtmlHTMLAttributes } from "react";
import EvaIcon from "../../../../../complect/eva-icon";
import { EvaIconName } from "../../../../../complect/eva-icon";
import './BrutalItem.scss';

export default function BrutalItem({
  onClick,
  icon,
  title,
}: { icon: EvaIconName; title: string } & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="brutal-item flex" onClick={onClick}>
      <EvaIcon name={icon} className="main-big-gap" />
      <div>{title}</div>
    </div>
  );
}
