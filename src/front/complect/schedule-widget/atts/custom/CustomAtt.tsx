import { ReactNode, useState } from 'react';
import { IconBookmark01StrokeRounded } from '../../../../complect/the-icon/icons/bookmark-01';
import { IconCheckmarkSquare02StrokeRounded } from '../../../../complect/the-icon/icons/checkmark-square-02';
import { IconEdit01StrokeRounded } from '../../../../complect/the-icon/icons/edit-01';
import { IconEyeStrokeRounded } from '../../../../complect/the-icon/icons/eye';
import { IconFile01StrokeRounded } from '../../../../complect/the-icon/icons/file-01';
import { IconPencilEdit01StrokeRounded } from '../../../../complect/the-icon/icons/pencil-edit-01';
import { IconPlusSignStrokeRounded } from '../../../../complect/the-icon/icons/plus-sign';
import { IconSquareStrokeRounded } from '../../../../complect/the-icon/icons/square';
import {
  CustomAttUseRights,
  ScheduleWidgetRightsCtrl,
  customAttUseRights,
  customAttUseRightsTitles,
  scheduleWidgetUserRights,
} from '../../../../models';
import useModal from '../../../modal/useModal';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import StrongEditableField from '../../../strong-control/field/StrongEditableField';
import StrongClipboardPicker from '../../../strong-control/field/clipboard/Picker';
import IconButton from '../../../the-icon/IconButton';
import { theIconFromPack } from '../../../the-icon/TheIcon';
import { TheIconType } from '../../../the-icon/model';
import { ScheduleWidgetAppAttCustomized } from '../../ScheduleWidget.model';
import ScheduleWidgetIconChange from '../../complect/IconChange';
import ScheduleWidgetRightControlList from '../../control/RightControlList';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import ScheduleWidgetCustomAttTitles from './CustomAttTitles';

const itIt = (it: unknown) => it;
const itNIt = (it: unknown) => !it;

enum WhoCan {
  Read,
  Update,
  No,
}

const whoCanUnits: { action: string; rule: 'R' | 'U'; Icon: TheIconType }[] = [
  {
    action: 'видит',
    rule: 'R',
    Icon: IconEyeStrokeRounded,
  },
  {
    action: 'редактирует',
    rule: 'U',
    Icon: IconPencilEdit01StrokeRounded,
  },
];

export default function ScheduleWidgetCustomAtt(
  props: StrongComponentProps<{
    tatt: ScheduleWidgetAppAttCustomized;
    isRedact?: boolean;
    topContent?: ReactNode;
  }>,
) {
  const selfScope = takeStrongScopeMaker(props.scope, ' tattMi/', props.tatt.mi);
  const rights = useScheduleWidgetRightsContext();
  const usedLists = customAttUseRightsTitles
    .map(({ title, id, top }, _, arr) => {
      const child = arr.find(({ top }) => top === id);
      if (child && customAttUseRights.checkIsHasIndividualRights(props.tatt.use, child.id)) return false;
      const parent = top == null ? undefined : arr.find(({ id }) => top === id);

      return (
        (!parent || customAttUseRights.checkIsHasIndividualRights(props.tatt.use, parent.id)) &&
        customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id) &&
        title
      );
    })
    .filter(itIt);
  const [whoCani, setWhoCani] = useState(WhoCan.No);
  const whoCan = whoCanUnits[whoCani];
  const userR = rights.myUser?.R ?? rights.schedule.ctrl.defu;
  const myBalance = scheduleWidgetUserRights.rightsBalance(userR);
  const isCanRedact = scheduleWidgetUserRights.checkIsCan(userR, props.tatt.U);
  const isRedact = props.isRedact;

  const [setRuleModalNode] = useModal(
    ({ header, body }) => {
      return (
        <>
          {header(
            <>
              Кто {whoCan.action} вложение <span className="color--7">{props.tatt.title}</span>
            </>,
          )}
          {body(
            <>
              <ScheduleWidgetRightControlList
                scope={selfScope}
                fieldName="field"
                fieldKey={whoCan.rule}
                rightCtrl={scheduleWidgetUserRights}
                R={props.tatt[whoCan.rule]}
                isReverse
                isDisabled={type => myBalance < scheduleWidgetUserRights.rightLevel(type.id) + 2}
              />
            </>,
          )}
        </>
      );
    },
    is => !is && setWhoCani(WhoCan.No),
    whoCani !== WhoCan.No,
  );

  const [redactModalNode, redactModalScreen] = useModal(({ header, body }) => {
    return (
      <>
        {header(
          <span className="flex flex-gap full-width between">
            <span>
              <span className="color--7">{props.tatt.title} </span>- Редактирование шаблона
            </span>
            <StrongClipboardPicker />
          </span>,
        )}
        {body(
          <>
            <ScheduleWidgetCustomAtt
              {...props}
              isRedact
            />
          </>,
        )}
      </>
    );
  });

  return (
    <>
      {isCanRedact && redactModalNode}
      {isCanRedact && setRuleModalNode}
      <div className={'margin-gap-v' + (isRedact ? '' : ' padding-gap bgcolor--5')}>
        {props.topContent}
        {isRedact ||
          (isCanRedact && (
            <div className="flex flex-end full-width">
              <IconButton
                Icon={IconPencilEdit01StrokeRounded}
                onClick={() => redactModalScreen()}
              />
            </div>
          ))}
        {isRedact && (
          <ScheduleWidgetIconChange
            scope={selfScope}
            icon={props.tatt.icon}
            header={<>Иконка для вложения {props.tatt.title}</>}
          />
        )}
        <StrongEditableField
          scope={selfScope}
          fieldName="field"
          fieldKey="title"
          value={props.tatt}
          isRedact={isRedact}
          isImpossibleEmptyValue
          Icon={isRedact ? IconBookmark01StrokeRounded : theIconFromPack(props.tatt.icon)}
          title="Название"
        />
        <StrongEditableField
          scope={selfScope}
          fieldName="field"
          value={props.tatt}
          fieldKey="description"
          multiline
          isRedact={isRedact}
          Icon={IconFile01StrokeRounded}
          isImpossibleEmptyValue
          title="Описание вложения"
        />
        {props.tatt.title && (
          <>
            <div className="margin-big-gap-v">
              {whoCanUnits.map((whoCan, whoCani) => {
                return (
                  <IconButton
                    key={whoCan.rule}
                    Icon={whoCan.Icon}
                    postfix={
                      <div className="full-width flex between">
                        <span className="flex flex-gap">
                          Кто {whoCan.action}
                          <span className="color--7">
                            {scheduleWidgetUserRights.rightsBalance(props.tatt[whoCan.rule]) + 1}+
                          </span>
                        </span>
                        {isRedact && isCanRedact && (
                          <IconButton
                            Icon={IconEdit01StrokeRounded}
                            onClick={() => setWhoCani(whoCani)}
                          />
                        )}
                      </div>
                    }
                    className="flex-max margin-gap-v"
                  />
                );
              })}
            </div>
            {isRedact ? (
              customAttUseRightsTitles.map(({ title, id, top }) => {
                return (
                  <div key={id}>
                    {(id !== CustomAttUseRights.CheckTitles ||
                      customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles)) &&
                      (id !== CustomAttUseRights.CheckGames ||
                        customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Games)) &&
                      (id !== CustomAttUseRights.CheckUsers ||
                        customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Users)) && (
                        <StrongEvaButton
                          scope={selfScope}
                          fieldName="field"
                          fieldKey="use"
                          cud="U"
                          Icon={
                            customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id)
                              ? IconCheckmarkSquare02StrokeRounded
                              : IconSquareStrokeRounded
                          }
                          className={
                            (top ? 'margin-big-gap-l ' : '') +
                            (customAttUseRights.checkIsHasIndividualRights(props.tatt.use, id) &&
                            (id !== CustomAttUseRights.Roles || (props.tatt.roles ?? 0) > 1) &&
                            (id !== CustomAttUseRights.Lists || (props.tatt.list ?? 0) > 1) &&
                            (id !== CustomAttUseRights.Titles || props.tatt.titles?.join(''))
                              ? 'color--7'
                              : '')
                          }
                          postfix={(top ? '' : 'Использовать ') + title}
                          mapExecArgs={args => {
                            return {
                              ...args,
                              value: customAttUseRights.switchRights(props.tatt.use, id),
                            };
                          }}
                        />
                      )}

                    {id === CustomAttUseRights.Roles &&
                      customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Roles) && (
                        <div className="margin-gap-v margin-big-gap-l">
                          {rights.schedule.ctrl.cats.map((cat, cati, cata) => {
                            return (
                              <StrongEvaButton
                                key={cati}
                                scope={selfScope}
                                cud="U"
                                fieldName="field"
                                fieldKey="roles"
                                fieldValue={cati}
                                Icon={
                                  ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.roles, cati)
                                    ? IconCheckmarkSquare02StrokeRounded
                                    : IconSquareStrokeRounded
                                }
                                className={
                                  ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.roles, cati)
                                    ? 'color--7'
                                    : ''
                                }
                                postfix={cat}
                                mapExecArgs={args => {
                                  return {
                                    ...args,
                                    value: ScheduleWidgetRightsCtrl.switchRights(props.tatt.roles, cati, cata.length),
                                  };
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                    {id === CustomAttUseRights.Lists &&
                      customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Lists) && (
                        <div className="margin-gap-v margin-big-gap-l">
                          {rights.schedule.lists.cats.map((cat, cati, cata) => {
                            return (
                              <StrongEvaButton
                                key={cati}
                                scope={selfScope}
                                cud="U"
                                fieldName="field"
                                fieldKey="list"
                                Icon={
                                  ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.list, cati)
                                    ? IconCheckmarkSquare02StrokeRounded
                                    : IconSquareStrokeRounded
                                }
                                className={
                                  ScheduleWidgetRightsCtrl.checkIsHasIndividualRights(props.tatt.list, cati)
                                    ? 'color--7'
                                    : ''
                                }
                                postfix={cat.title}
                                mapExecArgs={args => {
                                  return {
                                    ...args,
                                    value: ScheduleWidgetRightsCtrl.switchRights(props.tatt.list, cati, cata.length),
                                  };
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                    {id === CustomAttUseRights.CheckTitles &&
                      customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles) && (
                        <div className="margin-big-gap-l">
                          {props.tatt.titles?.map((title, titlei) => {
                            const titleScope = takeStrongScopeMaker(selfScope, ' titlei/', titlei);

                            return (
                              <StrongEditableField
                                key={titlei}
                                scope={titleScope}
                                fieldName=""
                                isImpossibleEmptyValue
                                value={title}
                                isRedact={isRedact}
                                multiline={customAttUseRights.checkIsHasIndividualRights(
                                  props.tatt.use,
                                  CustomAttUseRights.CheckTitles,
                                )}
                              />
                            );
                          })}
                          {!props.tatt.titles?.some(itNIt) && (
                            <StrongEvaButton
                              scope={selfScope}
                              fieldName="titles"
                              Icon={IconPlusSignStrokeRounded}
                            />
                          )}
                        </div>
                      )}
                  </div>
                );
              })
            ) : (
              <>
                {customAttUseRights.checkIsHasIndividualRights(props.tatt.use, CustomAttUseRights.Titles) && (
                  <ScheduleWidgetCustomAttTitles tatt={props.tatt} />
                )}
                {!usedLists.length || (
                  <div className="margin-gap-t color--4">
                    Используются:
                    <span className="color--3"> {usedLists.join(', ')}</span>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
