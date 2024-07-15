import { memo } from 'react';
import BibleModulesTranslationsRedactButton from './Add';
import { useBibleMyTranslates, useBibleShowTranslates } from './hooks';

export const BibleModulesTranslations = memo(function BibleModules(): JSX.Element {
  const [myTranslates] = useBibleMyTranslates();
  const [showTranslates, setShowTranslates] = useBibleShowTranslates();

  return (
    <div className="flex flex-gap margin-gap-v">
      {myTranslates.map(tName => {
        const isShow = showTranslates.includes(tName);

        return (
          <div
            key={tName}
            className={'pointer' + (isShow ? ' text-underline' : '') + (showTranslates[0] === tName ? ' color--7' : '')}
            onClick={event => {
              if (!event.ctrlKey) {
                setShowTranslates([tName]);
                return;
              }

              if (isShow) {
                if (showTranslates.length > 1) setShowTranslates(prev => prev.filter(name => name !== tName));
              } else setShowTranslates(prev => [...prev, tName]);
            }}
          >
            {tName}
          </div>
        );
      })}
      <BibleModulesTranslationsRedactButton />
    </div>
  );
});
