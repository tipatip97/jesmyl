import React from "react";
import { isAccessed } from "../Cm.complect";

export const mainTopButtons = () => null;
  // isAccessed("canRedact") ? React.lazy(() => import("./EditButton")) : null;

export function LazyEditorParts() {
  return <div style={{ display: "none" }}>{mainTopButtons()}</div>;
}
