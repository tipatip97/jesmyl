import { useEffect, useRef, useState } from 'react';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import JesmylLogo from '../../../../../../complect/jesmyl-logo/JesmylLogo';
import './ComPlayer.scss';
import ComPlayerTrack from './ComPlayerTrack';

export default function ComPlayer({ src }: { src: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const player = audioRef.current;
    const [isError, setIsError] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [isShowLoader, setIsShowLoader] = useState(false);

    useEffect(() => {
        setIsPlay(false);
        setIsShowLoader(false);
        const timeout = setTimeout(() => setIsShowLoader(true), 300);
        const player = audioRef.current;
        if (player) {
            player.pause();
            player.currentTime = 0;
        }

        const onVisibilityChange = () => {
            if (!document.hidden && audioRef.current)
                setIsPlay(!audioRef.current.paused);
        };

        document.addEventListener('visibilitychange', onVisibilityChange);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
    }, [src, player]);

    return <>
        {player
            ? <audio
                ref={audioRef}
                src={src.trim()}
                onError={() => setIsError(true)}
                onPause={() => setIsPlay(false)}
                onPlay={() => setIsPlay(true)}
                onTimeUpdate={() => {
                    if (player.duration > -1 && player.currentTime >= player.duration) {
                        setIsPlay(false);
                        player.currentTime = 0;
                    }
                }}
            />
            : <audio ref={audioRef} src={src.trim()} />}
        {<div className={`composition-player flex flex-gap ${!player ? 'center' : ''}`}>
            {player
                ? isError
                    ? <span className="error-message">Файл не найден</span>
                    : <>
                        <EvaButton name={`${isPlay ? 'pause' : 'play'}-circle`} onClick={() => {
                            if (isPlay) player.pause();
                            else player.play();
                            setIsPlay(!isPlay);
                        }} />

                        <ComPlayerTrack player={player} />
                    </>
                : isShowLoader && <JesmylLogo className="loading-logo rotate" />}
        </div>}
    </>;
}
