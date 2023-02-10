import { useEffect, useRef, useState } from 'react';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import JesmylLogo from '../../../../../../complect/jesmyl-logo/JesmylLogo';
import './ComPlayer.scss';
import ComPlayerTrack from './ComPlayerTrack';

export default function ComPlayer({ src }: { src: string | string[] }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const player = audioRef.current;
    const [isError, setIsError] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [isShowLoader, setIsShowLoader] = useState(false);
    const variants = [src].flat().map((src) => src.trim());
    const [currentVariant, setCurrentVariant] = useState(0);
    const currentSrc = variants[currentVariant];

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
                src={currentSrc}
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
            : <audio ref={audioRef} src={currentSrc} />}
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
                        {variants.length > 1 &&
                            <div
                                className="current-variant-badge flex center pointer"
                                onClick={() => {
                                    setCurrentVariant(currentVariant > variants.length - 2 ? 0 : currentVariant + 1);
                                    setIsPlay(false);
                                }}
                            >
                                {currentVariant + 1}
                            </div>
                        }
                    </>
                : isShowLoader && <JesmylLogo className="loading-logo rotate" />}
        </div>}
    </>;
}
