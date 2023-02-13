import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../complect/modal/Modal.service";
import useAuth from "../../useAuth";

export default function UserMore() {
  const { logout } = useAuth();

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={(event) => {
          event.preventDefault();
          modalService
            .confirm("Произвести выход из системы?", "Разлогиниться")
            .then(isLogout => isLogout && logout());
        }}
      >
        <EvaIcon name="person-outline" className="abs-icon" />
        <div>Выйти из системы</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
