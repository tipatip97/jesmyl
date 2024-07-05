import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IndexSchWTranslationLiveDataValue } from '../../../../components/index/Index.model';
import useAuth from '../../../../components/index/useAuth';
import { soki } from '../../../../soki';
import { NewWindow } from '../../../NewWindow';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import { ScheduleWidgetMarkdownTranslationWindow } from './Window';
import { useMarkdownTranslation } from './storage';

interface Props {
  md?: string;
}

export const ScheduleWidgetMarkdownTranslation = ({ md = '' }: Props) => {
  const rights = useScheduleWidgetRightsContext();
  const auth = useAuth();
  const [markdown, setMarkdown] = useState(md);
  const { setMd } = useMarkdownTranslation('setMd');
  const subscribeData = `index-sch-${rights.schedule.w}:${auth.login}` as const;

  useEffect(() => setMarkdown(md), [md]);

  useEffect(() => {
    return hookEffectLine()
      .setTimeout(() => setMd(markdown), 300)
      .effect();
  }, [markdown, setMd]);

  useEffect(() => {
    return setTimeoutEffect(() => {
      if (!auth.fio) return;

      const liveData: IndexSchWTranslationLiveDataValue = {
        fio: auth.fio,
        markdown,
      };

      soki.send({ liveData, subscribeData }, 'index');
    }, 300);
  }, [auth.fio, subscribeData, markdown]);

  useEffect(
    () => () => {
      soki.send({ liveData: null, subscribeData }, 'index');
    },
    [subscribeData],
  );

  return (
    <>
      <NewWindow
        onInit={win => win.document.body.classList.add('reverse-theme')}
        features="top=100,left=30000,width=400,height=200"
        target={`schedule-translation-window/${rights.schedule.w}`}
      >
        <ScheduleWidgetMarkdownTranslationWindow />
      </NewWindow>
      <StyledTextRedactor
        onChange={event => setMarkdown(event.currentTarget.value)}
        value={markdown}
      />
    </>
  );
};

const StyledTextRedactor = styled.textarea`
  width: 100%;
  height: 100%;
`;
