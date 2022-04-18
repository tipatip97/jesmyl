import { AppName } from "../app/App.model";
import TheCmApplication from "./apps/cm/Cm";
import Index from "./index/Index";
import useIndexNav from "./index/complect/useIndexNav";
import navConfigurers from "../shared/navConfigurers";
import onBackButton from "../complect/back-button-listener";
import { useEffect } from "react";

export default function AppRouter({ app }: { app: AppName }) {
  const { specialPhase } = useIndexNav();
  const { goBack } = navConfigurers[specialPhase || "index"]();

  onBackButton.listen("cm-listener", () => goBack());
  useEffect(() => () => onBackButton.mute("cm-listener"), []);

  return (
    <div className={`app-container ${app}`}>
      {specialPhase === "index" ? (
        <Index />
      ) : app === "cm" ? (
        <TheCmApplication />
      ) : null}
    </div>
  );
}
