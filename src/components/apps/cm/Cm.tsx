import { ReactNode, useEffect } from "react";
import { cmStorage } from "../../../shared/jstorages";
import useCmNav, { translationNavPoint } from "./base/useCmNav";
import useSelectedComs from "./base/useSelectedComs";
import "./Cm.scss";
import { useCols } from "./cols/useCols";
import { useEditableCols } from "./editor/col/useEditableCols";
import useTranslation from "./translation/useTranslation";

export default function CmApplication({ content }: { content: ReactNode }) {
  const [, setCols] = useCols();
  const [, setEditableCols] = useEditableCols();
  const { watchTranslation } = useTranslation();
  const { jumpTo, nav } = useCmNav();
  const { selectedComws } = useSelectedComs();

  cmStorage.listen("cols", "cols-update", (val) => {
    setCols(val);
    setEditableCols(val);
  });

  useEffect(() => nav.setData({ selectedComws }), [nav, selectedComws]);

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "F5") {
        event.preventDefault();
        jumpTo(translationNavPoint, true);
        watchTranslation(200, 200, true);
      }
    };

    window.addEventListener("keydown", onKeyUp);
    return () => window.removeEventListener("keydown", onKeyUp);
  }, [jumpTo, watchTranslation]);

  return <>{content}</>;
}
