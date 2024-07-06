import { useState } from 'react';
import { SokiVisitor } from '../../../../models';
import { useDeviceId } from '../../molecules';
import { TgLinkOrFio } from './TgLinkOrFio';

const itNIt = (it: unknown) => !it;

export const Visitor = ({ visitor }: { visitor: SokiVisitor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deviceId = useDeviceId();

  return (
    <div onClick={() => setIsOpen(itNIt)}>
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
