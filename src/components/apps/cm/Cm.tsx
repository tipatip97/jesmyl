import { useEffect } from "react";
import onBackButton from "../../../complect/back-button-listener";
import { cmStorage } from "../../../shared/jstorages";
import useCmNav from "./base/useCmNav";
import "./Cm.scss";
import TheCat from "./col/cat/TheCat";
import TheCom from "./col/com/TheCom";
import { useCols } from "./cols/useCols";
import Lists from "./lists/Lists";
import Marks from "./lists/marks/Marks";
import TheMeeting from "./lists/meetings/TheMeeting";
import TheMeetings from "./lists/meetings/TheMeetings";
import Other from "./other/Other";
import Translations from "./translation/Translation";

export default function CmApplication() {
  const { phase, goBack } = useCmNav();
  const [, setCols] = useCols();

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));

  onBackButton.listen("cm-listener", () => goBack());
  useEffect(() => () => onBackButton.mute("cm-listener"), []);

  switch (phase) {
    case "all":
      return <TheCat />;
    case "cat":
      return <TheCat specialPhase="thematic" />;
    case "com":
      return <TheCom />;
    case "translation":
      return <Translations />;
    case "lists":
      return <Lists />;
    case "marks":
      return <Marks />;
    case "meetings":
      return <TheMeetings />;
    case "meeting":
      return <TheMeeting />;
    default:
      return <Other />;
  }
}
