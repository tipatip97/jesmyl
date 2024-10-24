import { BottomPopupItem } from '../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useConfirm } from '../../../../complect/modal/confirm/useConfirm';
import { IconUserStrokeRounded } from '../../../../complect/the-icon/icons/user';
import { removePullRequisites, useSetAuth } from '../../molecules';

export const UserMore = () => {
  const setAuth = useSetAuth();

  const logout = () => {
    setAuth({ level: 0 });
    removePullRequisites();
    window.location.reload();
  };

  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      <>{confirmNode}</>
      <BottomPopupItem
        title="Выйти из системы"
        Icon={IconUserStrokeRounded}
        onClick={event => {
          event.preventDefault();
          confirm('Произвести выход из системы?', 'Разлогиниться').then(isLogout => isLogout && logout());
        }}
      />
    </>
  );
};
