import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import useExer from "../../../../../complect/exer/useExer";
import useCmNav from "../../base/useCmNav";
import { cmExer } from "../../Cm.store";
import { useMeetings } from "../../lists/meetings/useMeetings";
import EditContainerCorrectsInformer from "../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";

export default function EditCompositions() {
//   const { goTo } = useCmNav();
//   const zcat = useEditableCcat(0);
//   const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
//   const { meetings, goToMeeting } = useMeetings();
//   useExer(cmExer);

//   return (
//     <PhaseCmEditorContainer
//       topClass="edit-compositions"
//       headClass="flex between"
//       headTitle="Песни"
//       //   onMoreClick={() => openAbsoluteBottomPopup(<EditCompositionsMore />)}
//       content={
//         <>
//           {meetings?.map((meeting, meetingi) => {
//             return (
//               <EditContainerCorrectsInformer key={`coms-etitor_${meetingi}`}>
//                 <BrutalItem
//                   key={`category-on-change_${meeting.wid}`}
//                   icon="headphones-outline"
//                   title={`${meeting.name || ""}${
//                     meeting.name !== meeting.initialName
//                       ? ` (${meeting.initialName})`
//                       : ""
//                   }`}
//                   onClick={() => {
//                     goToMeeting(meeting.wid);
//                   }}
//                 />
//               </EditContainerCorrectsInformer>
//             );
//           })}
//         </>
//       }
//     />
//   );
}


// Am         Em             Am   Em
// Пой аллилуйя Господу!

// Пой аллилуйя Господу! Аллилуйя!

//    Am          G        F              C
// Пой аллилуйя, пой аллилуйя,

// Господь наш дивен и велик!

// Господь наш дивен и велик! Аллилуйя!

// Господь наш дивен, Господь наш дивен

// Смерть победив Христос воскрес!

// Смерть победив Христос воскрес! Аллилуйя!

// Смерть победил Христос, Смерть победил Христос.

// Господь простил нам все грехи!

// Господь простил нам все грехи! Аллилуйя!

// Господь простил наc, Господь простил наc