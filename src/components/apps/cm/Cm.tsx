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
import PageOnDevelopment from "../../../complect/page-on-development/PageOnDevelopment";
import Translations from "./translation/Translation";
import Editor from "./editor/Editor";
import EditCategories from "./editor/col/categories/EditCategories";
import EditCategory from "./editor/col/categories/EditCategory";
import EditCompositions from "./editor/col/compositions/EditCompositions";
import EditComposition from "./editor/col/compositions/EditComposition";

export default function CmApplication() {
  const { phase } = useCmNav();
  const [, setCols] = useCols();

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));

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
    case "editor":
      return <Editor />;
    case "edit-categories":
      return <EditCategories />;
    case "edit-category":
      return <EditCategory />;
    case "edit-compositions":
      return <EditCompositions />;
    case "edit-composition":
      return <EditComposition />;
    default:
      return <PageOnDevelopment head="Новый раздел" />;
  }
}
