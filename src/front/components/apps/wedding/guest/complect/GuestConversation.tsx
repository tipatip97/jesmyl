import { WedGuest, WedGuestSex } from '../../../../../../back/apps/wed/model';

export const GuestConversation = ({ guest }: { guest: WedGuest }) => {
  return (
    <>
      {guest.wn
        ? `Дорогие ${guest.fn}${guest.wn ? ` и ${guest.wn}` : ''}!`
        : `${guest.s === WedGuestSex.Man ? 'Дорогой ' : 'Дорогая '}${guest.fn}!`}
    </>
  );
};
