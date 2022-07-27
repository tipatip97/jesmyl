import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpNumUpdatesPeople } from "../../Lider.store";
import People from "./People";
import { PeopleExportable } from "./People.model";

let localPeople: People | und;

export default function usePeople() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.lider.numUpdatesPeople);

    const ret = {
        people: localPeople,
        updatePeople: (val: PeopleExportable) => {
            localPeople = new People(val);
            dispatch(riseUpNumUpdatesPeople());
        },
    };
    return ret;
}