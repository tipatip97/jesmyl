import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpNumUpdatesPeople, updateLeaderPeople } from "../../Leader.store";
import People from "./People";
import { PeopleImportable } from "./People.model";

let localPeople: People | und;

export default function usePeople() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.leader.numUpdatesPeople);
    const peopleImportable = useSelector((state: RootState) => state.leader.people);

    const ret = {
        people: localPeople,
        peopleImportable,
        updatePeople: (val: PeopleImportable) => {
            localPeople = new People(val);
            dispatch(riseUpNumUpdatesPeople());
        },
        updatePeopleImportable: (people: PeopleImportable) => dispatch(updateLeaderPeople(people)),
    };
    return ret;
}