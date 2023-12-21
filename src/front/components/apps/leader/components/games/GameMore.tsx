import { BottomPopupContenterPreparer } from '../../../../../complect/absolute-popup/bottom-popup/model';
import PrintableBottomItem from '../PrintableBottomItem';
import GameTeamLists from './templates/GameTeamLists';
import GameTeamPassportNames from './templates/GameTeamPassportNames';
import GameTeamPassports from './templates/GameTeamPassports';

export default function GameMore({
  selectedTimers,
  close,
  onGameRemove,
  prepare,
}: {
  selectedTimers?: number[];
  close: () => void;
  onGameRemove: () => void;
  prepare: BottomPopupContenterPreparer;
}) {
  return (
    <>
      <PrintableBottomItem
        node={<GameTeamPassports selectedTimers={selectedTimers} />}
        title="Игровые паспорта"
        close={close}
        prepare={prepare}
      />
      <PrintableBottomItem
        node={<GameTeamPassportNames selectedTimers={selectedTimers} />}
        title="Игровые названия паспортов"
        close={close}
        prepare={prepare}
      />
      <PrintableBottomItem
        node={<GameTeamLists />}
        title="Списки команд"
        close={close}
        prepare={prepare}
      />
      {prepare({
        items: [
          {
            title: 'Удалить игру',
            icon: 'trash-outline',
            isError: true,
            onClick: onGameRemove,
          },
        ],
      })}
    </>
  );
}
