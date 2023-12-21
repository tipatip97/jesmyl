import { useState } from 'react';
import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import { SPY_ROLE } from './hooks/locations';

export default function SpyShowMyRole({ role }: { role: string }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="flex center flex-gap margin-gap pointer"
      onClick={() => setIsShow(!isShow)}
    >
      <EvaIcon name={isShow ? 'eye-off-outline' : 'eye-outline'} />
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
