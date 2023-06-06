import { useDispatch } from "react-redux";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../complect/modal/Modal.service";
import di from "../../Index.store";
import indexStorage from "../../indexStorage";
import { removePullRequisites } from "../../useAuth";

export default function UserMore() {
  const dispatch = useDispatch();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  const logout = () => {
    dispatch(di.setAuthData(null));
    indexStorage.set('auth', null);
    dispatch(di.setCurrentApp("cm"));
    removePullRequisites();
    window.location.reload();
  };

  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Выйти из системы',
      icon: "person-outline",
      onClick: (event) => {
        event.preventDefault();
        modalService
          .confirm("Произвести выход из системы?", "Разлогиниться")
          .then(isLogout => isLogout && logout());
      },
    }]
  });
}
