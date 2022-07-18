import PrintableBottomItem from "./components/PrintableBottomItem";
import FortBayardPassport from "./components/templates/FortBayardPassport";

export default function GeneralMore() {
  return (
    <>
      <PrintableBottomItem
        title="Распечатать Паспорт Форт-Баярда"
        node={<FortBayardPassport />}
      />
    </>
  );
}
