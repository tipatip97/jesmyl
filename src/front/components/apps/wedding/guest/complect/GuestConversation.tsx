import { WedGuest, WedGuestSex } from '../../../../../../shared/api/complect/apps/wed/complect/model';

export const GuestConversation = ({ guest }: { guest: WedGuest | null }) => {
  return (
    <>
      {!guest
        ? 'Дорогой гость!'
        : guest.wn
          ? `Дорогие ${guest.fn}${guest.wn ? ` и ${guest.wn}` : ''}!`
          : `${guest.s === WedGuestSex.Man ? 'Дорогой ' : 'Дорогая '}${guest.fn}!`}
    </>
  );
};
