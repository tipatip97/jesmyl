import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import useCmNav from "../../base/useCmNav";
import { useCcat } from "../../col/cat/useCcat";
import { useCols } from "../../cols/useCols";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";

export default function EditCategories() {
  const [cols] = useCols();
  const { setPhase } = useCmNav();
  const [, setCcat] = useCcat();

  return (
    <PhaseCmContainer
      topClass="edit-categories"
      head="Категории"
      content={
        <>
          {cols?.cats.map((cat) => {
            return (
              <BrutalItem
                key={`category-on-change_${cat.wid}`}
                icon="book-open-outline"
                title={cat.name || ""}
                onClick={() => {
                  setCcat(cat);
                  setPhase("edit-category");
                }}
              />
            );
          })}
        </>
      }
    />
  );
}
