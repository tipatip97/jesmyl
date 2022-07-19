import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpPeopleNumUpdates } from "../../Lider.store";
import { PeopleExportable } from "./Human.model";
import People from "./People";

let localPeople: People | und;

export default function usePeople() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.lider.numPeopleUpdates);

    const ret = {
        people: localPeople,
        updatePeople: (val: PeopleExportable) => {
            localPeople = new People(val);
            dispatch(riseUpPeopleNumUpdates());
        },
    };
    return ret;
}