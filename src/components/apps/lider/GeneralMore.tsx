import PrintableBottomItem from "./components/PrintableBottomItem";
import FortBayardPassport from "./components/templates/FortBayardPassport";
import QRQuest from "./components/templates/QRQuest";

export default function GeneralMore() {
  return (
    <>
      <PrintableBottomItem
        title="Распечатать Паспорт Форт-Баярда"
        node={<FortBayardPassport />}
      />
      <PrintableBottomItem
        title="Распечатать QR квест-точки"
        node={<QRQuest />}
      />
    </>
  );
}
