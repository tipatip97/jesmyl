import { AppName } from "../app/App.model";
import TheCmApplication from "./apps/cm/Cm";
import Index from "./index/Index";
import useIndexNav from "./index/complect/useIndexNav";

export default function AppRouter({ app }: { app: AppName }) {
  const { specialPhase } = useIndexNav();
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
