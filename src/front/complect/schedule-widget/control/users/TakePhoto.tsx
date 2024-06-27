import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useFullContent from '../../../fullscreen-content/useFullContent';
import IconButton from '../../../the-icon/IconButton';
import { IconCamera01StrokeRounded } from '../../../the-icon/icons/camera-01';
import { IconCheckmarkBadge01StrokeRounded } from '../../../the-icon/icons/checkmark-badge-01';
import { IScheduleWidgetUser } from '../../ScheduleWidget.model';
import { scheduleWidgetPhotosStorage } from '../../storage';
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
        onClick={() => openFull()}
      />
    </>
  );
}

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
    if (videoRef.current === null || canvasRef.current === null) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    let stream: MediaStream;

    (async () => {
      try {
        stream = await navigator.mediaDevices?.getUserMedia({
          video: {
            facingMode: 'environment' || 'user',
            width: { min: 200, max: 200 },
            height: { min: 300, max: 300 },
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
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <>
      <div className="full-size flex column around">
        {error && <div className="color--ko">{error}</div>}
        <StyledCanvas ref={canvasRef} />
        <span
          ref={videoWrapperRef}
          className="inline-block"
        >
          <StyledVideo ref={videoRef} />
        </span>
        <div className="flex half-width between">
          <StyledCameraButton
            Icon={IconCheckmarkBadge01StrokeRounded}
            onClick={async () => {
              stream?.getTracks().forEach(track => track.stop());
              scheduleWidgetPhotosStorage.set(
                user.tgId ? `tg.${user.tgId}` : `${rights.schedule.w}/mi:${user.mi}`,
                src,
              );
              close();
            }}
          />
          <StyledCameraButton
            Icon={IconCamera01StrokeRounded}
            onClick={() => {
              if (videoRef.current === null || canvasRef.current === null) return;
              const video = videoRef.current;
              const canvas = canvasRef.current;

              canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
              const src = canvas.toDataURL('image/jpeg');

              setSrc(src);
            }}
          />
        </div>
      </div>
    </>
  );
}

const StyledVideo = styled.video`
  /* width: 90vw; */
  max-height: 40vh;
`;

const StyledCanvas = styled.canvas``;
const StyledCameraButton = styled(IconButton)`
  --icon-scale: 3;
`;
