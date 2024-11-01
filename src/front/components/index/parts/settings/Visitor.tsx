import { useState } from 'react';
import { isNIs } from '../../../../../back/complect/utils';
import { SokiVisitor } from '../../../../models';
import { useDeviceId } from '../../complect/takeDeviceId';
import { TgLinkOrFio } from './TgLinkOrFio';

export const Visitor = ({ visitor }: { visitor: SokiVisitor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deviceId = useDeviceId();

  return (
    <div onClick={() => setIsOpen(isNIs)}>
      <span className={'color--3' + (deviceId === visitor.deviceId ? ' text-underline' : '')}>
        <TgLinkOrFio profile={visitor} /> v{visitor.version || '?'} {visitor.deviceId}
      </span>
      {isOpen ? (
        <div className="margin-gap">
          <div>{visitor.fio}</div>
          <div className="color--7">{visitor.time}</div>
          <div className="color--4">{visitor.browser}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
