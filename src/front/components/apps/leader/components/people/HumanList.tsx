import { HTMLAttributes, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedInput from "../../../../../complect/DebouncedInput";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import PhaseLeaderContainer from "../../phase-container/PhaseLeaderContainer";
import Human from "./Human";
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
  humansRef,
  humanMoreAdditions,
  ...props
}: HumanListComponentProps & HTMLAttributes<HTMLDivElement>) {
  const { people } = usePeople();
  const [term, setTerm] = useState("");
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const humanListSortVariant = useSelector(
    (state: RootState) => state.leader.humanListSortVariant
  );

  const humanList = useMemo(() => {
    const humans =
      (list?.(people?.humans?.map((human) => human.wid))
        ?.map((wid) => people?.humans?.find((human) => human.wid === wid))
        .filter((human) => human) as Human[]) ?? people?.humans;
    const wraps = term
      ? mylib
          .searchRate<{ human: Human }>(humans, term, ["name"], "human")
          .map(({ human }) => human)
      : humans;

    if (!term) {
      if (humanListSortVariant === "name")
        wraps.sort(({ wid: a }, { wid: b }) => (a < b ? -1 : a > b ? 1 : 0));
      else wraps.sort(({ ufp: a }, { ufp: b }) => a - b);
    }

    return wraps;
  }, [people, term, humanListSortVariant, list]);

  if (humansRef) humansRef.current = humanList;

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
          dangers?.some((wid) => human.wid === wid) ? "error-message" : ""
        } ${
          successes?.some((wid) => human.wid === wid) ? "success-message" : ""
        }`}
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
      content={humans}
    />
  ) : (
    <div {...props}>
      {searcher}
      {humans}
    </div>
  );
}
