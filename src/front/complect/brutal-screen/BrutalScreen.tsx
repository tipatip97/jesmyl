import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import "./BrutalScreen.scss";

export default function BrutalScreen(
  props: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>
) {
  return (
    <div className="brutal-screen flex column custom-align-items" {...props}>
      {props.children}
    </div>
  );
}
