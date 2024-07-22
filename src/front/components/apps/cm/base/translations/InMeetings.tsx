import { useMemo } from 'react';
import { useMeetings } from '../../lists/meetings/useMeetings';
import { CmTranslationComListContext, CmTranslationComListContextValue } from './context';

export const CmTranslationComListContextInMeetings = function InMeetings({ children }: { children: React.ReactNode }) {
  const { currentEvent } = useMeetings();

  const value = useMemo((): CmTranslationComListContextValue => {
    if (currentEvent == null) return {};

    return {
      list: currentEvent.coms,
      pageTitlePostfix: ' - ' + currentEvent.name,
    };
  }, [currentEvent]);

  return <CmTranslationComListContext.Provider value={value}>{children}</CmTranslationComListContext.Provider>;
};
export default CmTranslationComListContextInMeetings;
