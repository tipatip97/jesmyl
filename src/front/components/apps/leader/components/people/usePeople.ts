import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpNumUpdatesPeople, updateLeaderPeople } from "../../Leader.store";
import People from "./People";
import { PeopleImportable } from "./People.model";

let localPeople: People | und;

const numUpdatesPeopleSelector = (state: RootState) => state.leader.numUpdatesPeople;
const peopleSelector = (state: RootState) => state.leader.people;

export default function usePeople() {
    const dispatch = useDispatch();
    useSelector(numUpdatesPeopleSelector);
    const peopleImportable = useSelector(peopleSelector);

    const ret = {
        people: localPeople,
        peopleImportable,
        updatePeople: (val: PeopleImportable) => {
            localPeople = new People(val);
            dispatch(riseUpNumUpdatesPeople());
        },
    };
    return ret;
}