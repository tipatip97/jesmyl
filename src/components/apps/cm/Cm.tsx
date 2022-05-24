import { ReactNode, useEffect } from "react";
import { cmStorage } from "../../../shared/jstorages";
import useCmNav, { translationNavPoint } from "./base/useCmNav";
import "./Cm.scss";
import { useCols } from "./cols/useCols";
import { useEditableCols } from "./editor/col/useEditableCols";
import useTranslation from "./translation/useTranslation";

export default function CmApplication({ content }: { content: ReactNode }) {
  const [, setCols] = useCols();
  const [, setEditableCols] = useEditableCols();
  const { newTranslation } = useTranslation();
  const { jumpTo } = useCmNav();

  cmStorage.listen("cols", "cols-update", (val) => {
    setCols(val);
    setEditableCols(val);
  });
  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "F5") {
        event.preventDefault();
        jumpTo(translationNavPoint, true);
        newTranslation(200, 200, true);
      }
    };
    window.addEventListener("keydown", onKeyUp);
    return () => window.removeEventListener("keydown", onKeyUp);
  }, [jumpTo, newTranslation]);
  return <>{content}</>;
}
