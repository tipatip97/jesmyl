import { ReactNode } from "react";
import { cmStorage } from "../../../shared/jstorages";
import { putCmCompositionsStyles } from "./Cm.complect";
import "./Cm.scss";
import { useCols } from "./cols/useCols";
import { useEditableCols } from "./editor/col/useEditableCols";

export default function CmApplication({ content }: { content: ReactNode }) {
  const [, setCols] = useCols();
  const [, setEditableCols] = useEditableCols();

  cmStorage.listen("cols", "cols-update", (val) => {
    setCols(val);
    setEditableCols(val);
  });
  return <>{content}</>;
}

putCmCompositionsStyles();
