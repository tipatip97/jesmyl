import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import modalService from "../../../../../complect/modal/Modal.service";
import { adminStorage } from "../../../../../shared/jstorages";
import { UserMessage } from "../../../../index/Index.model";
import useAuth from "../../../../index/useAuth";
import { adminExer } from "../../Admin.store";
import useUsers from "./useUsers";

export default function UserMore({ message }: { message: UserMessage }) {
  const { auth } = useAuth();
  const { currentUser } = useUsers();
  const { exec } = useExer(adminExer);

  if (!currentUser) return null;

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() => {
          let level = currentUser.level;
          let passphrase = "";

          modalService.open({
            title: "Права доступа",
            description: `Выдаём права доступа пользователю - ${currentUser.name}`,
            inputs: [
              {
                title: "Уровень",
                type: "number",
                closable: false,
                value: () => "" + level,
                onInput: ({ input }) => (level = +(input.value || 0)),
              },
              {
                title: "Проверочное слово)",
                closable: false,
                value: () => passphrase,
                onInput: ({ input }) => (passphrase = input.value || ""),
              },
            ],
            buttons: [
              {
                title: "ОК",
                onClick: () => {
                  if (level >= (auth?.level || 0)) {
                    setTimeout(() =>
                      modalService.alert(
                        "Не возможно дать уровень больше или равный твоему"
                      )
                    );
                    return;
                  }
                  exec(currentUser.setLevel(level, passphrase, message.at));
                  adminStorage.set("appProps", {});
                },
              },
            ],
          });
        }}
      >
        <EvaIcon name="compass-outline" className="abs-icon" />
        <div>Поменять права доступа</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
