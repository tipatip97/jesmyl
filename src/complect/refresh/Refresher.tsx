import { useState } from "react";
import { EvaIcon } from "../Eva";
import { Refresh } from "./Refresh";
import { RefreshState } from "./Refresh.model";
import "./Refresher.scss";

const refresh = new Refresh();

refresh.check();

export function Refresher() {
  const [state, setState] = useState<RefreshState>('inactive');

  refresh.onStateChange((state: RefreshState) => setState(state));

  return (
    <div
      className={`refresher ${state}`}
      onClick={() => refresh.pull()}
    >
      <EvaIcon name="sync-outline" scale={0.6} />
    </div>
  );
}
