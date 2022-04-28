import { useEffect } from "react";
import { AppName } from "../app/App.model";
import onBackButton from "../complect/back-button-listener";
import navConfigurers from "../shared/navConfigurers";
import TheCmApplication from "./apps/cm/Cm";
import TheTuner from "./apps/tuner/TheTuner";
import useIndexNav from "./index/complect/useIndexNav";
import Index from "./index/Index";

export default function AppRouter({ app }: { app: AppName }) {
  const { specialPhase } = useIndexNav();
  const { goBack } = navConfigurers[specialPhase || "index"]();

  onBackButton.listen("app-router-listener", () => goBack());
  useEffect(() => () => onBackButton.mute("app-router-listener"), []);

  return (
    <div className={`app-container ${app}`}>
      {specialPhase === "index" ? (
        <Index />
      ) : app === "cm" ? (
        <TheCmApplication />
      ) : app === "tuner" ? (
        <TheTuner />
      ) : null}
    </div>
  );
}
