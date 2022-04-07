import { AppName } from "../store/Storage.model";
import TheCmApplication from "./apps/cm/TheCm";

export default function AppRouter({ app }: { app: AppName }) {
  return (
    <div className={`app-container ${app}`}>
      {app === "cm" ? <TheCmApplication /> : null}
    </div>
  );
}
