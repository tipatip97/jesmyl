import { useMemo, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { makeCmScheduleWidgetComListUrl } from '../../../../../../back/apps/cm/attInformCm';
import { CmComWid, CmMeetingEventWid } from '../../../../../../back/apps/cm/Cm.enums';
import { useInitSoki } from '../../../../../app/useInitSoki';
import { BottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/BottomPopup';
import { BottomPopupItem } from '../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import CopyTextButton from '../../../../../complect/CopyTextButton';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import mylib from '../../../../../complect/my-lib/MyLib';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { useSetScheduleOrPull } from '../../../../../complect/schedule-widget/general/useSetScheduleOrPull';
import { IScheduleWidget } from '../../../../../complect/schedule-widget/ScheduleWidget.model';
import {
  takeScheduleStrongScopeMaker,
  takeStrongScopeMaker,
  useScheduleWidgetRights,
} from '../../../../../complect/schedule-widget/useScheduleWidget';
import { IconCopy01StrokeRounded } from '../../../../../complect/the-icon/icons/copy-01';
import { IconNoteEditStrokeRounded } from '../../../../../complect/the-icon/icons/note-edit';
import { CmComBindAttach } from '../../../../../models';
import { CmTranslationComListContext, CmTranslationComListContextValue } from '../../base/translations/context';
import { ChordVisibleVariant } from '../../Cm.model';
import { Cat } from '../../col/cat/Cat';
import { useCcat } from '../../col/cat/useCcat';
import { Com } from '../../col/com/Com';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { useMeetings } from '../../lists/meetings/useMeetings';
import { CmFooter } from '../../routing/CmFooter';
import { cmCompositionRoute } from '../../routing/cmRoutingApp';
import CmExternalComListAttRedactList from './RedactList';
import TheComForFullScreen from './TheComForFullScreen';

const attName = '[cm]:coms';
const itIt = (it: unknown) => it;

const error = (children: React.ReactNode) => <div className="color--ko full-size flex center">{children}</div>;

export default function TgDayEventComList() {
  const params = useParams();
  const dayi = +params.dayi!;
  const eventMi = +params.eventMi!;
  const schw = +params.schw!;
  const meetings = useMeetings();
  const [schedule, setSchedule] = useState<IScheduleWidget | null>(null);
  const [isOpenListRedact, setIsOpenListRedact] = useState<unknown>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenMorePopup, setIsOpenMorePopup] = useState(false);
  const [isOpenComposition, setIsOpenComposition] = useState(false);
  const [ccom, setCcom] = useState<Com | und>();
  const rights = useScheduleWidgetRights(schedule);
  const cat = useCcat(true);

  useSetScheduleOrPull(setSchedule, schw, setIsLoading);
  useInitSoki('cm');

  if (isLoading) return <div className="full-size flex center">Загрузка расписания...</div>;
  if (!schedule) return error('Мероприятие не найдено');
  if (!cat) return error('Прогрузка списка песен...');

  if (isNaN(dayi) || isNaN(eventMi) || isNaN(schw)) return error('Ссылка не действительна');

  const event = schedule.days[dayi].list.find(event => event.mi === eventMi);
  if (!event) return error('Событие не найдено');

  const comsAtt = event.atts?.[attName] as CmComBindAttach | und;

  if (!comsAtt) return error('Песен в событии нет');
  if (mylib.isArr(comsAtt)) return;

  let comws: CmComWid[] = [];

  const comwList = comsAtt.comws as CmComWid[];
  const eventw = comsAtt.eventw as CmMeetingEventWid;

  if (comwList) comws = comws.concat(comwList);

  if (eventw != null) {
    const event = meetings.meetings?.events?.find(event => event.wid === eventw);

    if (event) comws = comws.concat(event.stack);
  }

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <PhaseContainerConfigurer
              className=""
              headTitle={
                <StyledTitle className="ellipsis block">
                  {schedule.types[event.type]?.title ?? ''}
                  <b> ● {schedule.title}</b>
                </StyledTitle>
              }
              onMoreClick={setIsOpenMorePopup}
              content={
                <>
                  <ComFaceList list={comws} />
                  {isOpenListRedact && (
                    <FullContent onClose={setIsOpenListRedact}>
                      <CmExternalComListAttRedactList
                        scope={takeStrongScopeMaker(
                          takeStrongScopeMaker(
                            takeStrongScopeMaker(takeScheduleStrongScopeMaker(schedule.w), ` dayi/`, dayi),
                            ' eventMi/',
                            eventMi,
                          ),
                          ' attKey/',
                          attName,
                        )}
                        value={comsAtt}
                        setCcom={setCcom}
                        setIsOpenComposition={setIsOpenComposition}
                      />
                    </FullContent>
                  )}

                  {isOpenComposition && (
                    <FullContent onClose={setIsOpenComposition}>
                      <TheComForFullScreen
                        com={ccom}
                        chordVisibleVariant={ChordVisibleVariant.Maximal}
                        comList={comws.map(comw => cat.coms.find(com => com.wid === comw)!).filter(itIt) ?? []}
                        onComSet={setCcom}
                      />
                    </FullContent>
                  )}

                  {isOpenMorePopup && (
                    <BottomPopup onClose={setIsOpenMorePopup}>
                      <CopyTextButton
                        text={makeCmScheduleWidgetComListUrl(schedule.w, dayi, eventMi)}
                        withoutIcon
                        description={
                          <BottomPopupItem
                            Icon={IconCopy01StrokeRounded}
                            title="Копировать ссылку на список"
                          />
                        }
                      />

                      {rights.isCanRedact && (
                        <BottomPopupItem
                          Icon={IconNoteEditStrokeRounded}
                          title="Редактировать список"
                          onClick={setIsOpenListRedact}
                        />
                      )}
                    </BottomPopup>
                  )}
                </>
              }
            />
          }
        />

        {cmCompositionRoute(children => (
          <ContextList
            list={comws}
            cat={cat}
            pageTitlePostfix={' - ' + schedule.types[event.type].title}
          >
            {children}
          </ContextList>
        ))}
      </Routes>
      <CmFooter />
    </>
  );
}

const ContextList = ({
  children,
  list,
  cat,
  pageTitlePostfix,
}: {
  children: React.ReactNode;
  list: CmComWid[];
  cat: Cat;
  pageTitlePostfix: string;
}) => {
  const value = useMemo((): CmTranslationComListContextValue => {
    return {
      list: list.map(comw => cat.coms.find(com => com.wid === comw)!).filter(itIt),
      pageTitlePostfix,
    };
  }, [cat.coms, list, pageTitlePostfix]);

  return <CmTranslationComListContext.Provider value={value}>{children}</CmTranslationComListContext.Provider>;
};

const StyledTitle = styled.span`
  max-width: calc(100vw - 96px);
`;
