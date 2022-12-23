import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { switchComplectFullscreen } from "./Complect.store";


export default function useFullScreen(): [boolean, (isFullscreen?: boolean) => void] {
    const dispatch = useDispatch();
    const isFullScreen = useSelector((state: RootState) => state.complect.isFullscreen);
    const close = (isFullscreen?: boolean) => {
        dispatch(switchComplectFullscreen(isFullscreen));

        if (isFullscreen ?? !isFullScreen) document.body.requestFullscreen();
        else if (document.fullscreenElement) document.exitFullscreen();
    };



    return [isFullScreen, close];
}