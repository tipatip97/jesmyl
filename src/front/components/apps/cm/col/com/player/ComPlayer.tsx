import { useEffect, useMemo, useRef, useState } from 'react';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import JesmylLogo from '../../../../../../complect/jesmyl-logo/JesmylLogo';
import './ComPlayer.scss';
import ComPlayerTrack from './ComPlayerTrack';

let currentAudioNode: HTMLAudioElement | und;
const emptyFunc = () => {};
const emptyArr: [] = [];
const movesMemoCallback = () => ({ prevX: 0, onEnd: emptyFunc });

export default function ComPlayer({ src, split }: { src: string; split?: string | RegExp | boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const player = audioRef.current;
  const [isError, setIsError] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isCanLoad, setIsCanLoad] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(0);
  const splitter = split === true ? /\n+/ : split || null;
  const variants = splitter ? src.split(splitter).map((src) => src.trim()) : [src.trim()];
  const currentSrc = variants[currentVariant];
  const moves = useMemo(movesMemoCallback, emptyArr);

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
      if (!document.hidden && audioRef.current) setIsPlay(!audioRef.current.paused);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [src, player, moves]);

  return (
    <>
      {player && isCanLoad ? (
        <audio
          ref={audioRef}
          src={currentSrc}
          onError={() => setIsError(true)}
          onPause={() => setIsPlay(false)}
          onPlay={() => setIsPlay(true)}
          onTimeUpdate={() => {
            if (player.duration > -1 && player.currentTime >= player.duration) {
              setIsPlay(false);
              if (moves.prevX === 0) {
                player.currentTime = 0;
                moves.onEnd = emptyFunc;
              } else
                moves.onEnd = () => {
                  if (player.currentTime >= player.duration) player.currentTime = 0;
                };
            }
          }}
        />
      ) : (
        <audio ref={audioRef} />
      )}
      {
        <div
          className={'composition-player flex flex-gap' + (player ? '' : ' center')}
          onTouchEnd={(event) => {
            event.stopPropagation();
            moves.onEnd();
            moves.prevX = 0;
          }}
          onTouchMove={(event) => {
            event.stopPropagation();
            if (
              player &&
              moves.prevX !== 0 &&
              player.currentTime + event.touches[0].pageX - moves.prevX < player.duration
            ) {
              player.currentTime += event.touches[0].pageX - moves.prevX;
            }

            moves.prevX = event.touches[0].pageX;
          }}
        >
          {player ? (
            isError ? (
              <span className="error-message">Файл не найден</span>
            ) : (
              <>
                <EvaButton
                  name={`${isPlay ? 'pause' : 'play'}-circle`}
                  onClick={() => {
                    const toggle = () => {
                      if (isPlay) player.pause();
                      else {
                        currentAudioNode?.pause();
                        currentAudioNode = player;
                        player.play();
                      }
                      setIsPlay(!isPlay);
                    };

                    if (isCanLoad) toggle();
                    else {
                      setIsCanLoad(true);
                      setTimeout(() => toggle());
                    }
                  }}
                />

                <ComPlayerTrack player={player} />
                {variants.length > 1 && (
                  <div
                    className="current-variant-badge flex center pointer"
                    onClick={() => {
                      setCurrentVariant(currentVariant > variants.length - 2 ? 0 : currentVariant + 1);
                      setIsPlay(false);
                    }}
                  >
                    {currentVariant + 1}
                  </div>
                )}
              </>
            )
          ) : (
            isShowLoader && <JesmylLogo className="loading-logo rotate" />
          )}
        </div>
      }
    </>
  );
}
