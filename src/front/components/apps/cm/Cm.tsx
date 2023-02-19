import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cmStorage } from "../../../shared/jstorages";
import useCmNav, { translationNavPoint } from "./base/useCmNav";
import useSelectedComs from "./base/useSelectedComs";
import "./Cm.scss";
import { updateCmChordTracks, updateEditorExecList, updateMeetingList, updateMp3Rules } from "./Cm.store";
import { useCols } from "./cols/useCols";
import { useEditableCols } from "./editor/col/useEditableCols";
import useTranslation from "./translation/useTranslation";

export default function CmApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const [, setCols] = useCols();
  const [, setEditableCols] = useEditableCols();
  const { watchTranslation } = useTranslation();
  const { jumpTo, nav } = useCmNav();
  const { selectedComws } = useSelectedComs();

  cmStorage.listen("cols", "cols-update", (val) => {
    setCols(val);
    setEditableCols(val);
  });

  cmStorage.dispatch(dispatch)
    .it('chordTracks', updateCmChordTracks)
    .it('meetings', updateMeetingList)
    .it('mp3Rules', updateMp3Rules)
    .it('execs', updateEditorExecList);

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
