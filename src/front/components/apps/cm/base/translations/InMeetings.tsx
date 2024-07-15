import { useMeetings } from '../../lists/meetings/useMeetings';
import { CmTranslationComListContext } from './context';

export const CmTranslationComListContextInMeetings = function InMeetings({ children }: { children: React.ReactNode }) {
  const { currentEvent } = useMeetings();

  return (
    currentEvent && (
      <CmTranslationComListContext.Provider value={[currentEvent.coms, ' - ' + currentEvent.name]}>
        {children}
      </CmTranslationComListContext.Provider>
    )
  );
};
export default CmTranslationComListContextInMeetings;
