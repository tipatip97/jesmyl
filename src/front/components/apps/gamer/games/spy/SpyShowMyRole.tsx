import { useState } from 'react';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconViewStrokeRounded } from '@icons/view';
import { IconViewOffSlashStrokeRounded } from '@icons/view-off-slash';
import { SPY_ROLE } from './hooks/locations';

export default function SpyShowMyRole({ role }: { role: string }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="flex center flex-gap margin-gap pointer"
      onClick={() => setIsShow(!isShow)}
    >
      <IconButton Icon={isShow ? IconViewStrokeRounded : IconViewOffSlashStrokeRounded} />
      {isShow ? (
        role === SPY_ROLE ? (
          <span>Ты - шпион!</span>
        ) : (
          <span>Текущая локация - {role}</span>
        )
      ) : (
        <span className="fade-05"> - кликни, чтоб увидеть локацию</span>
      )}
    </div>
  );
}
