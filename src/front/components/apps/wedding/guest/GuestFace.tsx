import { WedGuest } from '../../../../../back/apps/wed/model';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconMailRemove01StrokeRounded } from '../../../../complect/the-icon/icons/mail-remove-01';
import { IconMailValidation01StrokeRounded } from '../../../../complect/the-icon/icons/mail-validation-01';
import { IconMessage01StrokeRounded } from '../../../../complect/the-icon/icons/message-01';
import { IconUserCircle02StrokeRounded } from '../../../../complect/the-icon/icons/user-circle-02';

interface Props {
  onClick?: () => void;
  guest: WedGuest;
}

export const WedGuestFace = ({ onClick, guest }: Props) => {
  return (
    <IconButton
      key={guest.mi}
      className="margin-gap"
      Icon={IconUserCircle02StrokeRounded}
      postfix={
        <>
          <span>{guest.ln} </span>
          <span className="color--7">{`${guest.fn}${guest.wn ? ` и ${guest.wn}` : ''}`}</span>
          {guest.t && <IconMessage01StrokeRounded />}
          {guest.g ? (
            <IconMailValidation01StrokeRounded className="color--ok" />
          ) : (
            <IconMailRemove01StrokeRounded className="color--ko" />
          )}
        </>
      }
      onClick={onClick}
    />
  );
};
