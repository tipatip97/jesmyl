import { useDispatch } from 'react-redux';
import { BottomPopupContenter } from '../../../../complect/absolute-popup/bottom-popup/model';
import { useConfirm } from '../../../../complect/modal/confirm/useConfirm';
import useQRMaster from '../../../../complect/qr-code/useQRMaster';
import di from '../../Index.store';
import useIndexNav from '../../complect/useIndexNav';
import indexStorage from '../../indexStorage';
import useAuth, { removePullRequisites } from '../../useAuth';

export const UserMore: BottomPopupContenter = (isOpen, _, prepare) => {
  const dispatch = useDispatch();
  const { nav } = useIndexNav();
  const auth = useAuth();
  const { shareQrData, qrNode } = useQRMaster();

  const logout = () => {
    dispatch(di.auth(null));
    indexStorage.rem('auth');
    dispatch(di.currentApp('cm'));
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
            icon: 'person-outline',
            onClick: event => {
              event.preventDefault();
              confirm('Произвести выход из системы?', 'Разлогиниться').then(isLogout => isLogout && logout());
            },
          },
          {
            title: 'Предъявить JesmyL-паспорт',
            icon: 'qr-code',
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
