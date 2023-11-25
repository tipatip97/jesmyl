import { useState } from "react";
import "./IndexLogin.scss";
import IndexLoginAuth from "./IndexLoginAuth";
import IndexTelegramAuth from "./IndexTelegramAuth";


export function IndexAuthorization() {
  const [isLoginAuth, setIsLoginAuth] = useState(false);

  return <>
    {isLoginAuth
      ? <IndexLoginAuth />
      : <IndexTelegramAuth onLoginAuth={() => setIsLoginAuth(true)} />}
  </>;
}
