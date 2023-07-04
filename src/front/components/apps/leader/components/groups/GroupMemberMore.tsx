import { BottomPopupContenterPreparer } from "../../../../../complect/absolute-popup/useBottomPopup";
import PrintableBottomItem from "../PrintableBottomItem";
import { HumanImportable } from "../people/People.model";
import WelcomePage from "../templates/WelcomePage";

export default function GroupMemberMore({
  fields,
  member,
  close,
  prepare,
}: {
  fields: Record<string, string>,
  member: HumanImportable,
  close: () => void,
  prepare: BottomPopupContenterPreparer,
}) {
  return (
    <>
      <PrintableBottomItem
        title="Распечатать Допуск"
        node={
          <WelcomePage
            bag={{ ...fields, ...member }}
          />
        }
        close={close}
        prepare={prepare}
      />
    </>
  );
}
