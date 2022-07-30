import { HTMLAttributes, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedInput from "../../../../../complect/DebouncedInput";
import { RootState } from "../../../../../shared/store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import HumanFace from "./HumanFace";
import HumansMore from "./HumansMore";
import { HumanListComponentProps } from "./People.model";
import usePeople from "./usePeople";

export default function HumanList({
  isAsPage,
  onMoreClick,
  moreNode,
  searcherClass,
  placeholder,
  asHumanMore,
  list,
  uniq,
  dangers,
  successes,
  ...props
}: HumanListComponentProps & HTMLAttributes<HTMLDivElement>) {
  const { people } = usePeople();
  const [term, setTerm] = useState("");
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const humanListSortVariant = useSelector(
    (state: RootState) => state.lider.humanListSortVariant
  );

  const humanList = useMemo(
    () =>
      (list?.(people?.humanList) ?? people?.humanList)
        ?.filter(({ name }) => name.toLowerCase().includes(term))
        .sort((a, b) => {
          const aVar = a[humanListSortVariant] || 0;
          const bVar = b[humanListSortVariant] || 0;
          return aVar < bVar ? -1 : aVar > bVar ? 1 : 0;
        }),
    [people, term, humanListSortVariant, list]
  );

  const searcher = (
    <DebouncedInput
      uniq={`search by human ${uniq}`}
      icon="search-outline"
      placeholder={placeholder ?? "Поиск по личностям"}
      className={`debounced-searcher round-styled ${searcherClass || ""}`}
      initialTerm={term}
      debounce={500}
      onTermChange={(term) => setTerm(term.toLowerCase())}
    />
  );

  const humans = humanList?.map((human, humani) => {
    return (
      <div
        key={`human ${humani}`}
        className={`${
          dangers?.some(({ wid }) => human.wid === wid) ? "error-message" : ""
        } ${
          successes?.some(({ wid }) => human.wid === wid)
            ? "success-message"
            : ""
        }`}
      >
        <HumanFace human={human} asMore={asHumanMore} />
      </div>
    );
  });

  return isAsPage ? (
    <PhaseLiderContainer
      topClass="template-page-content"
      headClass="flex between full-width"
      onMoreClick={
        onMoreClick ||
        (() => openAbsoluteBottomPopup(<HumansMore moreNode={moreNode} />))
      }
      head={searcher}
      content={humans}
    />
  ) : (
    <div {...props}>
      {searcher}
      {humans}
    </div>
  );
}
