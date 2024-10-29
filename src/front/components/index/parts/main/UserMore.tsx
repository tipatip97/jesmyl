import { BottomPopupItem } from '../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { removeMoleculeServerSavedItemTimesFromLocalStorage } from '../../../../complect/atoms';
import { useConfirm } from '../../../../complect/modal/confirm/useConfirm';
import { IconUserStrokeRounded } from '../../../../complect/the-icon/icons/user';
import { removePullRequisites, useSetAuth } from '../../molecules';

export const UserMore = ({ onClose }: { onClose: (isOpen: false) => void }) => {
  const setAuth = useSetAuth();

  const logout = () => {
    setAuth({ level: 0 });
    removePullRequisites();
    window.location.reload();
    onClose(false);
    removeMoleculeServerSavedItemTimesFromLocalStorage();
  };

  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      <>{confirmNode}</>
      <BottomPopupItem
        title="Выйти из системы"
        Icon={IconUserStrokeRounded}
        onClick={async event => {
          event.preventDefault();
          if (await confirm('Произвести выход из системы?', 'Разлогиниться')) logout();
        }}
      />
    </>
  );
};
