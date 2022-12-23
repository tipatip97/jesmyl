import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import { setParanjaMode } from "../Cm.store";

export type ParanjaMode = null | 'open' | 'dark';

const actions: (() => void)[] = [];

export default function useParanja() {
    const dispatch = useDispatch();
    const ret = {
        paranjaMode: useSelector((state: RootState) => state.cm.paranjaMode),
        closeParanja: () => {
            actions.shift();
            dispatch(setParanjaMode(null));
        },
        openParanja: (cb: () => void, mode: ParanjaMode = 'open') => {
            actions.push(cb);
            dispatch(setParanjaMode(mode));
        },
        onParanjaClick: () => {
            actions[0]();
            actions.shift();
            dispatch(setParanjaMode(null));
        },
    };

    return ret;
}