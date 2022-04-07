import React from "react";

export const mainTopButtons = () => null;
  // isAccessed("canRedact") ? React.lazy(() => import("./EditButton")) : null;

export default function LazyEditorParts() {
  return <div style={{ display: "none" }}>{mainTopButtons()}</div>;
}
