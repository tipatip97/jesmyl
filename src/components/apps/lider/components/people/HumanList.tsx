import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedInput from "../../../../../complect/DebouncedInput";
import { RootState } from "../../../../../shared/store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import HumanFace from "./HumanFace";
import HumansMore from "./HumansMore";
import usePeople from "./usePeople";

export default function HumanList() {
  const { people } = usePeople();
  const [term, setTerm] = useState("");
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const humanListSortVariant = useSelector(
    (state: RootState) => state.lider.humanListSortVariant
  );

  const humanList = useMemo(
    () =>
      people?.humans
        ?.filter(({ name }) => name.toLowerCase().includes(term))
        .sort((a, b) => {
          const aVar = a[humanListSortVariant] || 0;
          const bVar = b[humanListSortVariant] || 0;
          return aVar < bVar ? -1 : aVar > bVar ? 1 : 0;
        }),
    [people, term, humanListSortVariant]
  );

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      headClass="flex between full-width"
      onMoreClick={() =>
        openAbsoluteBottomPopup(<HumansMore humanList={humanList} />)
      }
      head={
        <>
          <DebouncedInput
            uniq={`search by human`}
            icon="search-outline"
            placeholder="Поиск по участникам"
            className="debounced-searcher round-styled"
            initialTerm={term}
            debounce={500}
            onTermChange={(term) => setTerm(term.toLowerCase())}
          />
        </>
      }
      content={
        <>
          {humanList?.map((human, humani) => {
            return <HumanFace key={`human ${humani}`} human={human} />;
          })}
        </>
      }
    />
  );
}

getRandomTwiceName();
