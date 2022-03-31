import { AppName } from "../store/Storage.model";
import { CmApplication } from "./apps/cm/Cm";

export function AppRouter({ app }: { app: AppName }) {
  return <>{app === "cm" ? <CmApplication /> : null}</>;
}
