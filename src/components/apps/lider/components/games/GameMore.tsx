import PrintableBottomItem from "../PrintableBottomItem";
import GameTeamPassports from "./templates/GameTeamPassports";

export default function GameMore({
  selectedTimers,
  close
}: {
  selectedTimers?: number[];
  close: () => void;
}) {
  return (
    <>
      <PrintableBottomItem
        node={<GameTeamPassports selectedTimers={selectedTimers} />}
        title="Игровые паспорта"
        close={close}
      />
    </>
  );
}
