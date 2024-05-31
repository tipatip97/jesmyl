import IconButton from '../../../the-icon/IconButton';
import { IconLeftToRightListBulletStrokeRounded } from '@icons/left-to-right-list-bullet';
import { ScheduleWidgetAppAttCustomized } from '../../ScheduleWidget.model';

const itIt = (it: unknown) => it;

export default function ScheduleWidgetCustomAttTitles({ tatt }: { tatt: ScheduleWidgetAppAttCustomized }) {
  return (
    <>
      <div className="flex flex-gap">
        <IconButton
          Icon={IconLeftToRightListBulletStrokeRounded}
          className="color--7"
        />
        <span className="color--7">Заголовки:</span>
      </div>
      <div>{tatt.titles?.filter(itIt).join(', ') || <span className="color--7">Список пуст</span>}</div>
    </>
  );
}
