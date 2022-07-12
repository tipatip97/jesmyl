import { ReactNode } from "react";
import "./Printer.scss";
import usePrinterNav from "./usePrinterNav";

export default function PrinterApplication({
  content,
}: {
  content: ReactNode;
}) {
  const { nav } = usePrinterNav();

  return <>{content}</>;
}
