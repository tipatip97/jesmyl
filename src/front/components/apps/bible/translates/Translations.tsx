import { memo } from 'react';
import { justBibleStorageSet } from '../hooks/storage';
import BibleModulesTranslationsRedactButton from './Add';
import { useBibleMyTranslates, useBibleShowTranslates } from './hooks';

export default memo(function BibleModulesTranslations(): JSX.Element {
  const myTranslates = useBibleMyTranslates();
  const showTranslates = useBibleShowTranslates();

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
                justBibleStorageSet('showTranslates', [tName]);
                return;
              }

              if (isShow) {
                if (showTranslates.length > 1)
                  justBibleStorageSet('showTranslates', prev => prev.filter(name => name !== tName));
              } else justBibleStorageSet('showTranslates', prev => [...prev, tName]);
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
