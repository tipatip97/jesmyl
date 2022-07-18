import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedInput from "../../../../../complect/DebouncedInput";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import { liderStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import { liderExer, updatePeople } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import HumanFace from "./HumanFace";
import HumansMore from "./HumansMore";

export default function HumanList() {
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.lider.people);
  const [term, setTerm] = useState("");
  const { lookIcon } = useExer(liderExer);
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const humanListSortVariant = useSelector(
    (state: RootState) => state.lider.humanListSortVariant
  );

  liderStorage.listen("people", "HumanList", (templates) => {
    if (templates) dispatch(updatePeople(templates));
  });

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
          {lookIcon}
          <EvaIcon
            className="margin-gap pointer"
            name="more-vertical"
            onClick={() =>
              openAbsoluteBottomPopup(<HumansMore humanList={humanList} />)
            }
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
