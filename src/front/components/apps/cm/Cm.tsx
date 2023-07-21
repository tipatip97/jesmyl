import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Cm.scss";
import di from "./Cm.store";
import useCmNav, { translationNavPoint } from "./base/useCmNav";
import cmStorage from "./cmStorage";
import useTranslation from "./translation/useTranslation";

export default function CmApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const { watchTranslation } = useTranslation();
  const { jumpTo } = useCmNav();

  cmStorage.initDispatches(dispatch, di);

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
