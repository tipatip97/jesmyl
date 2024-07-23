import { Suspense, useEffect, useRef, useState } from 'react';
import { AppName } from '../../../../app/App.model';
import { FullContent } from '../../../../complect/fullscreen-content/FullContent';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import { IconCloudDownloadStrokeRounded } from '../../../../complect/the-icon/icons/cloud-download';
import { IconCubeStrokeRounded } from '../../../../complect/the-icon/icons/cube';

interface Props {
  jumpToApp: (appName: AppName) => void;
  nav: ReturnType<typeof useNavConfigurer>['nav'];
}

export const AppFace = ({ jumpToApp, nav }: Props) => {
  const [isOpenFull, setIsOpenFull] = useState<unknown>(false);
  const Icon = nav.nav.Icon ?? nav.nav.routes[0]?.iconSelfPack.StrokeRounded ?? IconCubeStrokeRounded;

  const loadedRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="margin-big-gap-h margin-sm-gap-v flex between">
      <span
        className="flex flex-gap pointer"
        onClick={() => jumpToApp(nav.appName)}
      >
        <Icon />
        <span>{nav.nav.title}</span>
      </span>
      <IconCloudDownloadStrokeRounded
        className="pointer"
        onClick={setIsOpenFull}
      />
      {!isOpenFull || (
        <FullContent
          className="flex center"
          onClose={setIsOpenFull}
        >
          <div>{isLoading ? 'Загружаем...' : 'Загрузка завершена!'}</div>
          {nav.nav.lazies.map((node, nodei) => (
            <div
              key={nodei}
              hidden
            >
              <Suspense
                fallback={
                  <Fallback
                    loadedRef={loadedRef}
                    setIsLoading={setIsLoading}
                  />
                }
              >
                {node}
              </Suspense>
            </div>
          ))}
        </FullContent>
      )}
    </div>
  );
};

const Fallback = ({
  loadedRef,
  setIsLoading,
}: {
  loadedRef: { current: number };
  setIsLoading: (is: boolean) => void;
}) => {
  useEffect(() => {
    loadedRef.current++;

    return () => {
      loadedRef.current--;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (loadedRef.current <= 0) setIsLoading(false);
    };
  }, [loadedRef, setIsLoading]);

  return <></>;
};
