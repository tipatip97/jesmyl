import Markdown from 'markdown-to-jsx';

interface Props {
  html?: string;
}

export const ScheduleWidgetHTMLLiveTranslation = ({ html }: Props) => {
  return html && <Markdown>{html}</Markdown>;
};
