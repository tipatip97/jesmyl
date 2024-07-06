import { BottomPopupContenter } from '../../../../complect/absolute-popup/bottom-popup/model';
import { useConfirm } from '../../../../complect/modal/confirm/useConfirm';
import useQRMaster from '../../../../complect/qr-code/useQRMaster';
import { IconQrCode01StrokeRounded } from '../../../../complect/the-icon/icons/qr-code-01';
import { IconUserStrokeRounded } from '../../../../complect/the-icon/icons/user';
import { removePullRequisites, useAuthState, useCurrentApp } from '../../molecules';
import useIndexNav from '../../complect/useIndexNav';

export const UserMore: BottomPopupContenter = (isOpen, _, prepare) => {
  const { nav } = useIndexNav();
  const [auth, setAuth] = useAuthState();
  const [, setCurrentApp] = useCurrentApp();
  const { shareQrData, qrNode } = useQRMaster();

  const logout = () => {
    setAuth({ level: 0 });
    setCurrentApp('cm');
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
          {
            title: 'Предъявить JesmyL-паспорт',
            Icon: IconQrCode01StrokeRounded,
            onClick: event => {
              event.preventDefault();
              if (auth.nick && auth.login)
                shareQrData(nav, 'passport', {
                  nick: auth.nick,
                  fio: auth.fio || auth.nick,
                  login: auth.login,
                  tgId: auth.tgId,
                });
            },
          },
        ],
      }),
    qrNode,
  ];
};
