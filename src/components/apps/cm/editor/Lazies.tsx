import React from "react";
import { isCanRedact } from "../Cm.complect";

export const mainTopButtons = () =>
  isCanRedact ? React.lazy(() => import("./EditButton")) : null;

export function LazyEditorParts() {
  return <div style={{ display: "none" }}>{mainTopButtons()}</div>;
}
