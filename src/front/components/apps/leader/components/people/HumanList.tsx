import { HTMLAttributes, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DebouncedSearchInput from "../../../../../complect/DebouncedSearchInput";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import HumanFace from "./HumanFace";
import HumansMore from "./HumansMore";
import { HumanImportable, HumanListComponentProps } from "./People.model";
import useLeaderContexts from "../contexts/useContexts";

const humanListSortVariantSelector = (state: RootState) => state.leader.humanListSortVariant;

export default function HumanList({
  isAsPage,
  onMoreClick,
  moreNode,
  searcherClass,
  placeholder,
  asHumanMore,
  list,
  dangers,
  successes,
  humansRef,
  humanMoreAdditions,
  ...props
}: HumanListComponentProps & HTMLAttributes<HTMLDivElement>) {
  const { humans } = useLeaderContexts();
  const [term, setTerm] = useState("");
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const humanListSortVariant = useSelector(humanListSortVariantSelector);

  const humanList = useMemo(() => {
    const memoHumans =
      (list?.(humans?.map((human) => human.w))
        ?.map((wid) => humans?.find((human) => human.w === wid))
        .filter((human) => human) as HumanImportable[]) ?? humans;
    const wraps = term
      ? mylib
        .searchRate<{ human: HumanImportable }>(memoHumans, term, ["name"], "human")
        .map(({ human }) => human)
      : memoHumans;

    if (!term) {
      if (humanListSortVariant === "name")
        wraps.sort(({ w: a }, { w: b }) => (a < b ? -1 : a > b ? 1 : 0));
      else wraps.sort(({ ufp1: a1, ufp2: a2 }, { ufp1: b1, ufp2: b2 }) => (a1 + a2) - (b1 + b2));
    }

    return wraps;
  }, [term, humanListSortVariant, list, humans]);

  if (humansRef) humansRef.current = humanList;

  const searcher = (
    <DebouncedSearchInput
      placeholder={placeholder ?? "Поиск по личностям"}
      className={`debounced-searcher round-styled ${searcherClass || ""}`}
      initialTerm={term}
      debounce={500}
      onTermChange={(term) => setTerm(term.toLowerCase())}
    />
  );

  const humansNode = humanList?.map((human, humani) => {
    return (
      <div
        key={humani}
        className={
          (dangers?.some((wid) => human.w === wid) ? "error-message" : "")
          + (successes?.some((wid) => human.w === wid) ? " success-message" : "")
        }
      >
        <HumanFace
          human={human}
          asMore={asHumanMore}
          humanMoreAdditions={humanMoreAdditions}
        />
      </div>
    );
  });

  return isAsPage ? (
    <PhaseLeaderContainer
      topClass="template-page-content"
      headClass="flex between full-width"
      onMoreClick={
        onMoreClick ||
        (() => openAbsoluteBottomPopup(<HumansMore moreNode={moreNode} />))
      }
      head={searcher}
      content={humansNode}
    />
  ) : (
    <div {...props}>
      {searcher}
      {humansNode}
    </div>
  );
}
