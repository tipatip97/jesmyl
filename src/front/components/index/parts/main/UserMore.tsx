import { useDispatch } from "react-redux";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../complect/modal/Modal.service";
import di from "../../Index.store";
import indexStorage from "../../indexStorage";
import useAuth, { removePullRequisites } from "../../useAuth";
import useIndexNav from "../../complect/useIndexNav";

export default function UserMore() {
  const dispatch = useDispatch();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const { nav } = useIndexNav();
  const auth = useAuth();

  const logout = () => {
    dispatch(di.auth(null));
    indexStorage.rem('auth');
    dispatch(di.currentApp("cm"));
    removePullRequisites();
    window.location.reload();
  };

  return prepareAbsoluteBottomPopupContent({
    items: [
      {
        title: 'Выйти из системы',
        icon: "person-outline",
        onClick: (event) => {
          event.preventDefault();
          modalService
            .confirm("Произвести выход из системы?", "Разлогиниться")
            .then(isLogout => isLogout && logout());
        },
      },
      {
        title: 'Предъявить JesmyL-паспорт',
        icon: "qr-code",
        onClick: (event) => {
          event.preventDefault();
          if (auth.nick && auth.login)
            nav.shareDataByQr('passport', {
              nick: auth.nick,
              fio: auth.fio || auth.nick,
              login: auth.login,
              tgId: auth.tgId,
            });
        },
      },
    ]
  });
}
