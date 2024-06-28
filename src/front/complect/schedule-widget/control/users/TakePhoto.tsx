import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useFullContent from '../../../fullscreen-content/useFullContent';
import IconButton from '../../../the-icon/IconButton';
import { IconCamera01StrokeRounded } from '../../../the-icon/icons/camera-01';
import { IconCheckmarkBadge01StrokeRounded } from '../../../the-icon/icons/checkmark-badge-01';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { getScheduleWidgetUserPhotoStorageKey, scheduleWidgetPhotosStorage } from '../../storage';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';

interface Props {
  user: IScheduleWidgetUser;
}

export default function ScheduleWidgetUserTakePhoto({ user }: Props) {
  const [fullNode, openFull] = useFullContent(close => {
    return (
      <Camera
        close={close}
        user={user}
      />
    );
  });

  return (
    <>
      {fullNode}
      <IconButton
        Icon={IconCamera01StrokeRounded}
        onClick={event => {
          event.stopPropagation();
          openFull();
        }}
      />
    </>
  );
}

const widthProportion = 200;
const heightProportion = 300;

function Camera({ close, user }: Props & { close: () => void }) {
  const rights = useScheduleWidgetRightsContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [src, setSrc] = useState('');
  const [, setRefresgh] = useState(false);

  useEffect(() => {
    if (videoRef.current === null || videoWrapperRef.current === null || canvasRef.current === null) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    let stream: MediaStream;

    (async () => {
      const size = (num: number) => ({ exact: num, ideal: num, max: num, min: num });
      const height = window.innerHeight / 2;

      try {
        stream = await navigator.mediaDevices?.getUserMedia({
          video: {
            facingMode: 'environment' || 'user',
            width: size(Math.floor(height * (widthProportion / heightProportion))),
            height: size(Math.floor(height)),
            autoGainControl: false,
          },
          audio: false,
        });
        video.srcObject = stream;
        setStream(stream);
        await video.play();

        setTimeout(() => {
          if (!videoWrapperRef.current) return;

          canvas.width = Math.floor(videoWrapperRef.current.clientWidth);
          canvas.height = Math.floor(videoWrapperRef.current.clientHeight);
        });
      } catch (error) {
        console.error(error);
        setRefresgh(is => !is);
        setError('Ошибка');
      }
    })();

    return () => {
      stream?.getTracks().forEach(track => {
        track.enabled = false;
        track.stop();
        stream.removeTrack(track);
      });
    };
  }, []);

  return (
    <>
      <div className="full-size flex column around">
        {error && <div className="color--ko">{error}</div>}
        <canvas
          ref={canvasRef}
          hidden
        />
        <div className="flex flex-gap column center">
          {src && (
            <img
              src={src}
              alt=""
            />
          )}
          <StyledVideoWrapper ref={videoWrapperRef}>
            <StyledVideo
              ref={videoRef}
              onPlay={event => event.preventDefault()}
            />
          </StyledVideoWrapper>
        </div>
        <div className="flex half-width between">
          <StyledCameraButton
            Icon={IconCheckmarkBadge01StrokeRounded}
            disabled={!src}
            onClick={async () => {
              stream?.getTracks().forEach(track => track.stop());
              scheduleWidgetPhotosStorage.set(getScheduleWidgetUserPhotoStorageKey(user, rights.schedule), src);
              close();
            }}
          />
          <StyledCameraButton
            Icon={IconCamera01StrokeRounded}
            onClick={() => {
              if (videoRef.current === null || canvasRef.current === null || videoWrapperRef.current === null) return;
              const video = videoRef.current;
              const videoWrapper = videoWrapperRef.current;
              const canvas = canvasRef.current;

              const context = canvas.getContext('2d');

              if (context === null) return;
              const videoWidth = videoWrapper.clientWidth;
              const videoHeight = videoWrapper.clientHeight;

              context.drawImage(video, 0, 0, videoWidth, videoHeight);

              const isLandscape = videoWidth > videoHeight;

              const width = isLandscape ? videoHeight * (widthProportion / heightProportion) : videoWidth;
              const height = isLandscape ? videoHeight : videoWidth * (heightProportion / widthProportion);

              console.log(videoWidth, videoHeight);

              const imageData = context.getImageData(
                (videoWidth - width) / 2,
                0,
                videoWrapper.clientWidth,
                videoWrapper.clientHeight,
              );

              var newCan = document.createElement('canvas');
              newCan.width = width;
              newCan.height = height;
              var newCtx = newCan.getContext('2d');

              if (newCtx === null) return;

              newCtx.putImageData(imageData, 0, 0);

              const src = newCan.toDataURL('image/jpeg');

              setSrc(src);
            }}
          />
        </div>
      </div>
    </>
  );
}

const StyledVideo = styled.video`
  max-height: 40dvh;
`;

const StyledCameraButton = styled(IconButton)`
  --icon-scale: 3;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;

  &:before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: -5px;
    border: 5px var(--color--7) solid;
    height: 100%;
    aspect-ratio: ${widthProportion / heightProportion};
  }
`;
