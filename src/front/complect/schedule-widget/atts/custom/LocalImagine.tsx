import { useMemo } from 'react';
import { MyLib } from '../../../my-lib/MyLib';
import StrongDropdown from '../../../strong-control/StrongDropdown';
import { makeAttStorage } from '../../useScheduleWidget';

export const ScheduleWidgetCustomAttLocalImagineSelector = ({
  scope,
  id,
}: {
  scope: string;
  id: `[SCH]:${string}` | nil;
}) => {
  const localAttsItems = useMemo(() => {
    return MyLib.entries(makeAttStorage()[0]).map(([id, att]) => {
      return {
        id,
        title: <>Образ "{att.title}"</>,
      };
    });
  }, []);

  return (
    <StrongDropdown
      id={id ?? undefined}
      items={localAttsItems}
      nullTitle="Образ не выбран"
      scope={scope}
      fieldName="imagine"
      cud="U"
    />
  );
};
