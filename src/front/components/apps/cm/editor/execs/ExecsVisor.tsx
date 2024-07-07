import { ReactNode, useMemo, useState } from 'react';
import { useAtomValue } from '../../../../../complect/atoms';
import mylib from '../../../../../complect/my-lib/MyLib';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconArrowRight02StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-right-02';
import { IconCalendar03StrokeRounded } from '../../../../../complect/the-icon/icons/calendar-03';
import { IconViewStrokeRounded } from '../../../../../complect/the-icon/icons/view';
import { IconViewOffSlashStrokeRounded } from '../../../../../complect/the-icon/icons/view-off-slash';
import { ComFace } from '../../col/com/face/ComFace';
import { useCmEditorExecs } from '../atoms';
import { ExecVision } from '../CmEditor.model';
import { EditableCom } from '../col/compositions/EditableCom';
import { useEditableCols } from '../col/useEditableCols';
import { EditableMeetingsEvent } from '../meetings/EditableMeetingsEvent';
import { useEditableMeetings } from '../meetings/useEditableMeetings';
import { cmEditorMolecule } from '../molecules';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import './ExecsVisor.scss';

export default function ExecsVisor() {
  const [lookList, setLookList] = useState<(number | nil)[]>([]);
  const [execs] = useCmEditorExecs();
  const rules = useAtomValue(cmEditorMolecule.take('rules'));
  const cols = useEditableCols();
  const { meetings, goToEvent } = useEditableMeetings();
  const list: ExecVision[] | nil = useMemo(() => {
    let flowCom: EditableCom | nil = null;

    const setAsNode = (value: unknown, fieldn: string | nil) => {
      return fieldn === 'comw'
        ? cols &&
            mylib.isNum(value) &&
            [value]
              .flat()
              .map((comw, comwi) => {
                flowCom = cols.coms.find(com => com.wid === comw);
                return (
                  flowCom && (
                    <ComFace
                      key={comw}
                      com={flowCom}
                      comi={comwi}
                    />
                  )
                );
              })
              .filter(val => val != null)
        : fieldn === 'tonLevel'
          ? mylib.isNum(value) && flowCom
            ? flowCom.transChord(flowCom.getFirstSimpleChord() || '?', value)
            : value
          : fieldn === 'eventw'
            ? meetings &&
              mylib.isNum(value) &&
              [value]
                .flat()
                .map((eventw: number) => {
                  if (eventw == null) return null;
                  const event = meetings.events?.find((event: EditableMeetingsEvent) => event.wid === eventw);
                  return (
                    <div
                      key={eventw}
                      className={event ? '' : 'error-message'}
                      onClick={() => eventw && goToEvent(eventw)}
                    >
                      <IconCalendar03StrokeRounded className="vertical-middle margin-gap" />
                      <span className={`vertical-middle `}>{event ? event.name : 'Неизвестное событие'}</span>
                    </div>
                  );
                })
                .filter(val => val != null)
            : JSON.stringify(value, null, 2);
    };

    return (
      rules &&
      execs
        ?.map((exec): ExecVision => {
          const rule = rules.find(({ action }) => exec.action === action);
          let prevNode: ReactNode;
          let valueNode: ReactNode;

          if (exec.args && (typeof exec.args.value === 'string' || typeof exec.args.prev === 'string')) {
            prevNode = <pre>{exec.args?.prev}</pre>;
            valueNode = <pre>{exec.args?.value}</pre>;
          }

          return rule
            ? {
                ...rule,
                ...exec,
                specials: (
                  <>
                    {setAsNode(exec.args?.eventw, 'eventw')}
                    {setAsNode(exec.args?.comw, 'comw')}
                  </>
                ),
                prevNode,
                valueNode,
              }
            : { action: '', title: 'Неизвестное изменение', level: 0 };
        })
        .sort((a, b) => (b.ts || 0) - (a.ts || 0))
    );
  }, [cols, execs, goToEvent, meetings, rules]);

  return (
    <PhaseCmEditorContainer
      className="e-e-rules-editor"
      headTitle="Изменения"
      content={list?.map(exec => {
        return (
          <div
            key={exec.ts}
            className="exec-visor margin-big-gap-v pointer padding-gap full-width"
          >
            <div className="flex between full-width">
              <span>{exec.author}</span>
              <span
                onClick={() => {
                  setLookList(
                    lookList.indexOf(exec.ts) < 0 ? [...lookList, exec.ts] : lookList.filter(ts => ts !== exec.ts),
                  );
                }}
              >
                {
                  <IconButton
                    Icon={lookList.indexOf(exec.ts) < 0 ? IconViewStrokeRounded : IconViewOffSlashStrokeRounded}
                  />
                }
              </span>
            </div>
            {exec.ts && <div>{new Date(exec.ts * 1000).toLocaleString()}</div>}
            <div>
              <strong>
                {mylib.stringTemplater(mylib.execIfFunc(exec.title, exec.args) || exec.shortTitle || '', exec.args)}
              </strong>
            </div>
            <div>{exec.specials}</div>
            {lookList.indexOf(exec.ts) < 0 ? null : (
              <>
                <div>Изменение:</div>
                {exec.prevNode}
                <IconArrowRight02StrokeRounded />
                {exec.valueNode}
              </>
            )}
          </div>
        );
      })}
    />
  );
}
