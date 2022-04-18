import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { switchComplectFullscreen } from "./Complect.store";


export default function useFullScreen(): [boolean, (isFullscreen?: boolean) => void] {
    const dispatch = useDispatch();

    return [
        useSelector((state: RootState) => state.complect.isFullscreen),
        (isFullscreen?: boolean) => dispatch(switchComplectFullscreen(isFullscreen)),
    ];
}