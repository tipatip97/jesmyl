import { AppName } from "../store/Storage.model";
import { CmApplication } from "./apps/cm/Cm";

export function AppRouter({ app }: { app: AppName }) {
  return (
    <div className={`app-container ${app}`}>
      {app === "cm" ? <CmApplication /> : null}
    </div>
  );
}
