import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { switchComplectFullscreen } from "./Complect.store";

const isFullscreenSelector = (state: RootState) => state.complect.isFullscreen;

export default function useFullScreen(): [boolean, (isFullscreen?: boolean) => void] {
    const dispatch = useDispatch();
    const isFullScreen = useSelector(isFullscreenSelector);

    return [
        isFullScreen,
        useCallback((isFullscreen?: boolean) => {
            dispatch(switchComplectFullscreen(isFullscreen));

            if (isFullscreen ?? !isFullScreen) document.body.requestFullscreen();
            else if (document.fullscreenElement) document.exitFullscreen();
        }, [dispatch, isFullScreen]),
    ];
}
