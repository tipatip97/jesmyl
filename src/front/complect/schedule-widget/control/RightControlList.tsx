import { ScheduleWidgetRightTexts, ScheduleWidgetRightsCtrl } from 'shared/api';
import styled from 'styled-components';
import { IconToggleOffStrokeRounded } from '../../../complect/the-icon/icons/toggle-off';
import { IconToggleOnStrokeRounded } from '../../../complect/the-icon/icons/toggle-on';
import { StrongControlProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';

export default function ScheduleWidgetRightControlList({
  R,
  scope,
  rightCtrl,
  fieldName,
  fieldKey,
  className,
  isCantEdit,
  isDescriptionsCollect,
  onUpdate,
  isHidden,
  isReverse,
  isDisabled,
}: StrongControlProps<{
  R?: number;
  className?: string;
  isCantEdit?: boolean;
  rightCtrl: ScheduleWidgetRightsCtrl;
  isDescriptionsCollect?: boolean;
  onUpdate?: (newR: number) => void;
  isHidden?: (type: ScheduleWidgetRightTexts<number>, typei: number) => boolean;
  isReverse?: boolean;
  isDisabled?: (type: ScheduleWidgetRightTexts<number>, typei: number) => boolean;
}>) {
  let isCan = true;

  return (
    <>
      {isDescriptionsCollect && (
        <div className="color--7 margin-gap-v  margin-gap-l">Справедливы утверждения мелким шрифтом</div>
      )}
      {rightCtrl.texts.map((type, typei) => {
        if (type.hidden || isHidden?.(type, typei)) return null;
        const isHas = (type.always || isCan) && rightCtrl.checkIsHasRights(R, type.id);

        const node = (
          <div
            key={type.id}
            className={'flex flex-gap between margin-gap-v over-hidden ' + className}
          >
            <div>
              <div>{type.title}</div>
              {type.description && (!isDescriptionsCollect || isCan) && (
                <Desc className="color--4 margin-gap-l">
                  {isHas ? type.description[0] : type.description[1] || type.description[0]}
                </Desc>
              )}
            </div>

            <StrongEvaButton
              scope={scope}
              fieldName={fieldName}
              fieldKey={fieldKey}
              cud="U"
              disabled={isCantEdit || !isCan || type.always || !!isDisabled?.(type, typei)}
              className={(isReverse ? !isHas : isHas) ? 'color--ok' : 'color--3'}
              Icon={(isReverse ? !isHas : isHas) ? IconToggleOnStrokeRounded : IconToggleOffStrokeRounded}
              mapExecArgs={args => {
                if (onUpdate !== undefined) {
                  onUpdate(rightCtrl.switchRights(R, type.id));
                  return;
                }
                return {
                  ...args,
                  value: rightCtrl.switchRights(R, type.id),
                };
              }}
            />
          </div>
        );

        if (isCan) isCan = isHas;

        return node;
      })}
    </>
  );
}

const Desc = styled.div`
  font-size: 0.7em;
`;
