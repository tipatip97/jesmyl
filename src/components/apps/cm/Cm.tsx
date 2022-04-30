import { ReactNode } from "react";
import { cmStorage } from "../../../shared/jstorages";
import { putCmCompositionsStyles } from "./Cm.complect";
import "./Cm.scss";
import { useCols } from "./cols/useCols";

export default function CmApplication({ content }: { content: ReactNode }) {
  const [, setCols] = useCols();

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));
  return <>{content}</>;
}

putCmCompositionsStyles();
