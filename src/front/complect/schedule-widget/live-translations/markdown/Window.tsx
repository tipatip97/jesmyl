import { ScheduleWidgetMarkdownLiveTranslation } from '../MarkdownLive';
import { useMarkdownTranslation } from './storage';

export const ScheduleWidgetMarkdownTranslationWindow = () => {
  const { markdown } = useMarkdownTranslation('markdown');

  return <ScheduleWidgetMarkdownLiveTranslation md={markdown} />;
};
