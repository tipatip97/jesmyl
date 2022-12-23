import { HtmlHTMLAttributes, ReactNode } from "react";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import "./BrutalItem.scss";

export default function BrutalItem({
  onClick,
  icon,
  title,
  box,
  description,
}: {
  icon: EvaIconName;
  title: string;
  box?: ReactNode;
  description?: ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="brutal-item flex between relative" onClick={onClick}>
      <div className="nowrap over-hidden">
        <EvaIcon name={icon} className="margin-big-gap vertical-middle" />
        <div className="ellipsis inline-block vertical-middle">{title}</div>
      </div>
      {box && <div className="margin-big-gap flex">{box}</div>}
      {description && (
        <div className="item-description">
          <div className="item-description-inner">
            <span className="item-description-title">
              <span className="item-description-title-inner">
                {description}
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
