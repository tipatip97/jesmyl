import { ExpandableContent } from '../../expand/ExpandableContent';
import useModal from '../../modal/useModal';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import TheIcon from '../../the-icon/TheIcon';
import { IconEdit02StrokeRounded } from '@icons/edit-02';
import { IconPlusSignStrokeRounded } from '@icons/plus-sign';
import { IconSchoolReportCardStrokeRounded } from '@icons/school-report-card';
import { IScheduleWidgetListCat } from '../ScheduleWidget.model';
import ScheduleWidgetIconChange from '../complect/IconChange';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../useScheduleWidget';
import ScheduleWidgetListUnit from './Unit';

const reg = /([а-яё]?[йуеъыаоэяиью]+[а-яё]).+/i;
const cutTitle = (title: string) => title.replace(reg, '$1.');

export function ScheduleWidgetListCategory({
  scope,
  scheduleScope,
  cat,
  cati,
}: StrongComponentProps<{
  scheduleScope: string;
  cat: IScheduleWidgetListCat;
  cati: number;
}>) {
  const rights = useScheduleWidgetRightsContext();
  const catScopePostfix = takeStrongScopeMaker('', ' cati/', cati);
  const catScope = scope + catScopePostfix;
  const title = <>{cat.title || <span className="text-italic">Список</span>}</>;
  const shortTitles: [string, string] = [cutTitle(cat.titles[0]), cutTitle(cat.titles[1])];

  const [modalNode, screen] = useModal(({ header, body }) => {
    return (
      <>
        {header(<div className="flex flex-gap">{title}</div>)}
        {body(
          <>
            <ScheduleWidgetIconChange
              scope={catScope}
              header={`Иконка для списка ${cat.title}`}
              icon={cat.icon}
            />
            <StrongEditableField
              scope={catScope}
              fieldName="field"
              Icon={IconSchoolReportCardStrokeRounded}
              title="Название списка"
              value={cat}
              fieldKey="title"
              isRedact
            />
            <StrongEditableField
              scope={catScope}
              fieldName="mentorsTitle"
              title="Заголовок руководителям"
              value={cat.titles[0]}
              isRedact
            />
            <StrongEditableField
              scope={catScope}
              fieldName="membersTitle"
              title="Заголовок участникам"
              value={cat.titles[1]}
              isRedact
            />
          </>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <ExpandableContent
        title={
          <>
            <TheIcon name={cat.icon} /> {title}
          </>
        }
        postfix={isExpand =>
          isExpand &&
          rights.isCanTotalRedact && (
            <div className="flex flex-gap">
              <div className="ellipsis max-width:5em">{cat.title.toLowerCase()}</div>
              {!rights.schedule.lists?.units.some(unit => !unit.title) && (
                <StrongEvaButton
                  scope={scope}
                  fieldName="units"
                  Icon={IconPlusSignStrokeRounded}
                  mapExecArgs={args => {
                    return {
                      ...args,
                      cati,
                    };
                  }}
                />
              )}
              <IconEdit02StrokeRounded onClick={screen} />
            </div>
          )
        }
      >
        {isExpand => (
          <div className="margin-big-gap-h">
            {isExpand &&
              rights.schedule.lists?.units.map(unit => {
                if (unit.cat !== cati) return null;

                return (
                  <ScheduleWidgetListUnit
                    key={unit.mi}
                    cat={cat}
                    cati={cati}
                    scheduleScope={scheduleScope}
                    scope={scope}
                    unit={unit}
                    catScopePostfix={catScopePostfix}
                    shortTitles={shortTitles}
                  />
                );
              })}
          </div>
        )}
      </ExpandableContent>
    </>
  );
}
