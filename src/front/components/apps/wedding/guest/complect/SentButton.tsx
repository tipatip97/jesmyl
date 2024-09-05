import { WedGuest, WedGuestPropositionSent } from '../../../../../../back/apps/wed/model';
import EvaSendButton from '../../../../../complect/sends/eva-send-button/EvaSendButton';
import { IconMailRemove01StrokeRounded } from '../../../../../complect/the-icon/icons/mail-remove-01';
import { IconMailValidation01StrokeRounded } from '../../../../../complect/the-icon/icons/mail-validation-01';
import { wedExer } from '../../exer';

export const WedGuestPropositionSentButton = ({
  guest,
  onSend,
}: {
  guest: WedGuest;
  onSend: (go: WedGuestPropositionSent) => void;
}) => {
  if (guest.g)
    return (
      <EvaSendButton
        Icon={IconMailValidation01StrokeRounded}
        className="color--ok margin-gap-v flex-max"
        confirm={
          <>
            Удалить пометку "отправлено" для гостя <span className="color--7">{guest.fn}</span>?
          </>
        }
        postfix="Ссылка отправлена"
        onSend={() =>
          wedExer.send([
            {
              action: 'setPropositionSentMark',
              args: {
                guestMi: guest.mi,
                value: WedGuestPropositionSent.No,
              },
            },
          ])
        }
        onSuccess={() => onSend(WedGuestPropositionSent.No)}
      />
    );

  return (
    <EvaSendButton
      Icon={IconMailRemove01StrokeRounded}
      className="color--ko margin-gap-v flex-max"
      postfix="Ссылка не была отправлена"
      onSend={() =>
        wedExer.send([
          {
            action: 'setPropositionSentMark',
            args: {
              guestMi: guest.mi,
              value: WedGuestPropositionSent.Yes,
            },
          },
        ])
      }
      onSuccess={() => onSend(WedGuestPropositionSent.Yes)}
    />
  );
};
