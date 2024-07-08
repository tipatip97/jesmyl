import { IScheduleWidgetUserCati } from '../../../models';
import { ModalBody } from '../../modal/Modal/ModalBody';
import { ModalHeader } from '../../modal/Modal/ModalHeader';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import TheIcon from '../../the-icon/TheIcon';
import { IconBookmark03StrokeRounded } from '../../the-icon/icons/bookmark-03';
import { IconCheckmarkSquare02StrokeRounded } from '../../the-icon/icons/checkmark-square-02';
import { IconFile02StrokeRounded } from '../../the-icon/icons/file-02';
import { IconSquareStrokeRounded } from '../../the-icon/icons/square';
import { IconUserRemove02StrokeRounded } from '../../the-icon/icons/user-remove-02';
import { IScheduleWidgetListCat, IScheduleWidgetListUnit } from '../ScheduleWidget.model';
import ScheduleWidgetUserList from '../control/users/UserList';
import { takeStrongScopeMaker } from '../useScheduleWidget';

export default function ScheduleWidgetListUnitRedactor({
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
  const unitScope = takeStrongScopeMaker(scope, ' unitMi/', unit.mi);
  const title = <>{unit.title || <span className="text-italic">Без названия</span>}</>;

  return (
    <>
      <ModalHeader>
        <div className="flex flex-gap">
          <TheIcon name={cat.icon} />
          {title}
        </div>
        ,
      </ModalHeader>
      <ModalBody>
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
      </ModalBody>
    </>
  );
}
