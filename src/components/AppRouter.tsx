import { AppName } from "../store/Storage.model";
import { CMApplication } from "./apps/cm/Cm";

export function AppRouter({ app }: { app: AppName }) {
  return <>{app === "cm" ? <CMApplication /> : null}</>;
}
