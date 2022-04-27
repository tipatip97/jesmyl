import React from "react";

export const mainTopButtons = () => null;
  // cmExer.isActionAccessed("canRedact") ? React.lazy(() => import("./EditButton")) : null;

export default function LazyEditorParts() {
  return <div style={{ display: "none" }}>{mainTopButtons()}</div>;
}
