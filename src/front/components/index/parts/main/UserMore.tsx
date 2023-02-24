import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../complect/modal/Modal.service";
import useAuth from "../../useAuth";

export default function UserMore() {
  const { logout } = useAuth();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

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
