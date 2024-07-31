import { BottomPopupContenter } from '../../../../complect/absolute-popup/bottom-popup/model';
import { useConfirm } from '../../../../complect/modal/confirm/useConfirm';
import { IconUserStrokeRounded } from '../../../../complect/the-icon/icons/user';
import { removePullRequisites, useSetAuth } from '../../molecules';

export const UserMore: BottomPopupContenter = (isOpen, _, prepare) => {
  const setAuth = useSetAuth();

  const logout = () => {
    setAuth({ level: 0 });
    removePullRequisites();
    window.location.reload();
  };

  const [confirmNode, confirm] = useConfirm();

  return [
    <>{confirmNode}</>,
    isOpen &&
      prepare({
        items: [
          {
            title: 'Выйти из системы',
            Icon: IconUserStrokeRounded,
            onClick: event => {
              event.preventDefault();
              confirm('Произвести выход из системы?', 'Разлогиниться').then(isLogout => isLogout && logout());
            },
          },
          // {
          //   title: 'Предъявить JesmyL-паспорт',
          //   Icon: IconQrCode01StrokeRounded,
          //   onClick: event => {
          //     event.preventDefault();
          //     // if (auth.nick && auth.login)
          //     //   shareQrData(nav, 'passport', {
          //     //     nick: auth.nick,
          //     //     fio: auth.fio || auth.nick,
          //     //     login: auth.login,
          //     //     tgId: auth.tgId,
          //     //   });
          //   },
          // },
        ],
      }),
  ];
};
