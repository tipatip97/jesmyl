import { NavigationConfig } from "../../../complect/nav-configurer/Navigation";
import {
  NavigationStorage,
  UseNavAction,
} from "../../../complect/nav-configurer/Navigation.model";
import useNavConfigurer from "../../../complect/nav-configurer/useNavConfigurer";
import { printerStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";
import TemplatePage from "./components/TemplatePage";
import PrinterApplication from "./Printer";
import { PrinterNavData, PrinterStorage } from "./Printer.model";
import { printerExer, setPrinterRoute } from "./Printer.store";

const navigation: NavigationConfig<
  PrinterStorage,
  NavigationStorage<PrinterStorage>,
  PrinterNavData
> = new NavigationConfig({
  root: (content) => <PrinterApplication content={content} />,
  rootPhase: "all",
  logo: "printer",
  exer: printerExer,
  routes: [
    {
      icon: "printer",
      phase: ["all"],
      title: "Принтер",
      node: <TemplatePage />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function usePrinterNav() {
  return usePrinterNavConfigurer();
}

const usePrinterNavConfigurer = () =>
  useNavConfigurer<
    PrinterStorage,
    NavigationStorage<PrinterStorage>,
    PrinterNavData
  >(
    actions,
    setPrinterRoute,
    navigation,
    printerStorage,
    (state: RootState) => state.printer.route
  );
export { usePrinterNavConfigurer };
