import { IconBookmark03StrokeRounded } from '../../../complect/the-icon/icons/bookmark-03';
import { IconCheckmarkSquare02StrokeRounded } from '../../../complect/the-icon/icons/checkmark-square-02';
import { IconEdit02StrokeRounded } from '../../../complect/the-icon/icons/edit-02';
import { IconFile02StrokeRounded } from '../../../complect/the-icon/icons/file-02';
import { IconSquareStrokeRounded } from '../../../complect/the-icon/icons/square';
import { IconUserRemove02StrokeRounded } from '../../../complect/the-icon/icons/user-remove-02';
import { IScheduleWidgetUserCati } from '../../../models';
import useIsExpand from '../../expand/useIsExpand';
import useModal from '../../modal/useModal';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import TheIcon from '../../the-icon/TheIcon';
import { IScheduleWidgetListCat, IScheduleWidgetListUnit } from '../ScheduleWidget.model';
import ScheduleWidgetUserList from '../control/users/UserList';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../useScheduleWidget';

export default function ScheduleWidgetListUnit({
  scope,
  scheduleScope,
  unit,
  cat,
  cati,
  catScopePostfix,
  shortTitles,
}: StrongComponentProps<{
  scheduleScope: string;
  unit: IScheduleWidgetListUnit;
  cat: IScheduleWidgetListCat;
  cati: IScheduleWidgetUserCati;
  catScopePostfix: string;
  shortTitles: [string, string];
}>) {
  const rights = useScheduleWidgetRightsContext();
  const unitScope = takeStrongScopeMaker(scope, ' unitMi/', unit.mi);
  const title = <>{unit.title || <span className="text-italic">Без названия</span>}</>;

  const [modalNode, screen] = useModal(({ header, body }) => {
    return (
      <>
        {header(
          <div className="flex flex-gap">
            <TheIcon name={cat.icon} />
            {title}
          </div>,
        )}
        {body(
          <>
            <StrongEditableField
              scope={unitScope}
              fieldName="field"
              Icon={IconBookmark03StrokeRounded}
              title="Название"
              value={unit}
              fieldKey="title"
              isRedact
            />
            <StrongEditableField
              scope={unitScope}
              fieldName="field"
              Icon={IconFile02StrokeRounded}
              title="Описание"
              value={unit}
              fieldKey="dsc"
              multiline
              isRedact
            />
            <ScheduleWidgetUserList
              scope={scheduleScope}
              title="Состав"
              filter={() => true}
              asUserPlusPrefix={(userNode, userScope, user, balance) => {
                const isForMember = balance < 3;
                return (
                  <div className="flex flex-gap">
                    {user.li?.[cati] === undefined ? (
                      <StrongEvaButton
                        Icon={IconSquareStrokeRounded}
                        scope={userScope + catScopePostfix}
                        cud="C"
                        fieldName=""
                        fieldValue={isForMember ? unit.mi : -unit.mi}
                        disabled={user.R === undefined}
                        className="nowrap"
                        postfix={
                          user.R === undefined ? (
                            <IconUserRemove02StrokeRounded />
                          ) : isForMember ? (
                            shortTitles[1]
                          ) : (
                            shortTitles[0]
                          )
                        }
                      />
                    ) : (
                      <StrongEvaButton
                        Icon={IconCheckmarkSquare02StrokeRounded}
                        scope={userScope + catScopePostfix}
                        cud="D"
                        fieldName=""
                        postfix={user.li[cati] < 0 ? shortTitles[0] : shortTitles[1]}
                        disabled={user.R === undefined || (user.li[cati] !== unit.mi && user.li[cati] !== -unit.mi)}
                        className={
                          'flex flex-gap nowrap' +
                          (user.li[cati] > 0
                            ? isForMember
                              ? ' color--7'
                              : ' color--ko'
                            : !isForMember
                              ? ' color--7'
                              : ' color--ko')
                        }
                      />
                    )}
                    {userNode}
                  </div>
                );
              }}
            />
          </>,
        )}
      </>
    );
  });

  const [unitTitile, isExpand] = useIsExpand(
    false,
    title,
    rights.isCanRedact ? isExpand => isExpand && <IconEdit02StrokeRounded onClick={screen} /> : null,
  );

  return (
    <>
      {modalNode}
      <div className="margin-big-gap-v">
        <span className="color--3">{unitTitile}</span>
        {unit.dsc && (
          <StrongEditableField
            scope={unitScope}
            fieldName="field"
            Icon={IconFile02StrokeRounded}
            value={unit}
            title="Описание"
            fieldKey="dsc"
            multiline
            setSelfRedact
            isRedact
          />
        )}
        {isExpand && (
          <div className="margin-big-gap-h">
            <ScheduleWidgetUserList
              scope={scheduleScope}
              title={cat.titles[0]}
              filter={user => user.li?.[cati] === -unit.mi}
              isInitExpand
            />
            <ScheduleWidgetUserList
              scope={scheduleScope}
              title={cat.titles[1]}
              filter={user => user.li?.[cati] === unit.mi}
            />
          </div>
        )}
      </div>
    </>
  );
}
