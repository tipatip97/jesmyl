import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import mylib from '../../../../complect/my-lib/MyLib';
import { TelegramWebAppApiOr } from '../../../../complect/tg-app/getTgApi';
import { TheIconLoading } from '../../../../complect/the-icon/IconLoading';
import { IconAuthorizedStrokeRounded } from '../../../../complect/the-icon/icons/authorized';
import { IconTelegramStrokeRounded } from '../../../../complect/the-icon/icons/telegram';
import { soki } from '../../../../soki';
import useIndexNav from '../../complect/useIndexNav';
import { removePullRequisites, useSetAuth } from '../../molecules';

export const IndexTelegramInlineAuthButton = () => {
  const setAuth = useSetAuth();
  const { navigate, goTo } = useIndexNav();

  return (
    <TelegramWebAppApiOr>
      {(api, isLoading) => {
        if (api?.initData) {
          return (
            <BrutalItem
              icon={<IconTelegramStrokeRounded />}
              title="Авторизоваться"
              onClick={() => {
                soki.send({ tgNativeAuthorization: api.initDataUnsafe.user }, 'index').on(({ tgAuthorization }) => {
                  if (!tgAuthorization || !tgAuthorization.ok || mylib.isStr(tgAuthorization.value)) return;

                  setAuth(tgAuthorization.value);
                  removePullRequisites();
                  soki.onConnect();
                  navigate(['other']);
                });
              }}
            />
          );
        }

        return (
          <BrutalItem
            icon={<IconAuthorizedStrokeRounded />}
            title="Авторизоваться"
            onClick={() => goTo('login')}
            box={<TheIconLoading isLoading={isLoading} />}
          />
        );
      }}
    </TelegramWebAppApiOr>
  );
};
