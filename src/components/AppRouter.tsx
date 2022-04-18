import { AppName } from "../app/App.model";
import TheCmApplication from "./apps/cm/Cm";

export default function AppRouter({ app }: { app: AppName }) {
  return (
    <div className={`app-container ${app}`}>
      {app === "cm" ? <TheCmApplication /> : null}
    </div>
  );
}
