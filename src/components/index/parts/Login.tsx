// import { useSelector } from "react-redux";
// import { RootState } from "../../../shared/store";
// import { IndexAuthorization } from "../Index.model";
// import { sendLoginData } from "../Index.source";
// import { setError, setFieldState } from "../Index.store";
// import useIndexNav from "../complect/useIndexNav";
// import IndexErrorMessage from "./ErrorMessage";

// export default function IndexLogin() {
//   const authState = useSelector((state: RootState) => state.index.auth);
//   const login = authState?.login;
//   const passw = authState?.passw;
//   const onInputFieldChanger =
//     (fieldn: keyof IndexAuthorization) =>
//     (event: React.ChangeEvent<HTMLInputElement>) =>
//       setFieldState({ fieldn, value: event.target.value });
//   const { setPhase } = useIndexNav();

//   return (
//     <>
//       <div className="phase-name">Вход</div>
//       <div className="system-item">
//         <span className="text" onClick={() => setPhase("settings")}>
//           назад
//         </span>
//       </div>
//       <div className="system-item">
//         <input
//           value={login}
//           placeholder="Логин (+79876543210)"
//           onInput={onInputFieldChanger("login")}
//         />
//       </div>
//       <IErrorMessage scope="login" />
//       <div className="system-item">
//         <input
//           value={passw}
//           placeholder="Пароль"
//           type="password"
//           onInput={onInputFieldChanger("passw")}
//         />
//       </div>
//       <BoardErrorMessage scope="passw" />
//       <div className="system-item">
//         <span
//           className="text"
//           onClick={() => {
//             if (!login) {
//               setError({
//                 errorMessage: "Введи логин (Номер телефона)!",
//                 errorScope: "login",
//               });
//               return;
//             }
//             if (!passw) {
//               setError({
//                 errorMessage: "Введи пароль!",
//                 errorScope: "passw",
//               });
//               return;
//             }
//             sendLoginData("login", authState);
//           }}
//         >
//           войти
//         </span>
//       </div>
//       <BoardErrorMessage scope="general" />
//       <div className="system-item">
//         <span className="text" onClick={() => setPhase("register")}>
//           зарегистрироваться
//         </span>
//       </div>
//     </>
//   );
// }
export{};