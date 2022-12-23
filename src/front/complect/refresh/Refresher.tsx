import { useState } from "react";
import { Refresh } from "./Refresh";
import { RefreshState } from "./Refresh.model";
import "./Refresher.scss";

export const refresh = new Refresh();

// refresh.pull();

export default function Refresher() {
  const [, setState] = useState<RefreshState>("inactive");

  refresh.onStateChange((state: RefreshState) => setState(state));

  // return (
  //   <div className={`refresher ${state}`} onClick={() => refresh.pull()}>
  //     <EvaIcon name="sync-outline" />
  //   </div>
  // );
}
