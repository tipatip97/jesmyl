import { ActionBox } from '../../../../../models';
import smylib from '../../../../../shared/SMyLib';
import { IScheduleWidget } from '../../../models/ScheduleWidget.model';
import { ScheduleWidgetRegType, scheduleWidgetRegTypeRights, scheduleWidgetRegTypeTitles } from '../../../rights';
import { ScheduleWidgetTgInformCleans } from '../../tg-bot-inform/cleans';
import { ScheduleWidgetActionBoxCleans } from '../cleans';

const findTitleSelf = { id: ScheduleWidgetRegType.Public };
function findType(this: typeof findTitleSelf, item: typeof findTitleSelf) {
  return item.id === this.id;
}

export const scheduleWidgetCtrlTypeActionBox: ActionBox<IScheduleWidget['ctrl']['type']> = {
  U: {
    RRej: true,
    args: {
      value: '#Number',
    },
    title: args => {
      const schedule = ScheduleWidgetActionBoxCleans.getSchedule(args.schw);
      if (schedule === undefined) return '';

      if (!smylib.isNum(args.value)) return `В расписании <b>${schedule.title}</b> изменение типа`;

      const isSwPublic = scheduleWidgetRegTypeRights.checkIsHasIndividualRights(
        args.value,
        ScheduleWidgetRegType.Public,
      );

      const isSwBeforeRegistration = scheduleWidgetRegTypeRights.checkIsHasIndividualRights(
        args.value,
        ScheduleWidgetRegType.BeforeRegistration,
      );

      const isSwHideContent = scheduleWidgetRegTypeRights.checkIsHasIndividualRights(
        args.value,
        ScheduleWidgetRegType.HideContent,
      );

      try {
        findTitleSelf.id = ScheduleWidgetRegType.Public;
        const publicRule = scheduleWidgetRegTypeTitles.find(findType, findTitleSelf)!;

        findTitleSelf.id = ScheduleWidgetRegType.BeforeRegistration;
        const beforeRegistrationRule = scheduleWidgetRegTypeTitles.find(findType, findTitleSelf)!;

        findTitleSelf.id = ScheduleWidgetRegType.HideContent;
        const hideContentRule = scheduleWidgetRegTypeTitles.find(findType, findTitleSelf)!;

        return (
          `В расписании <b>${schedule.title}</b> изменение типа:` +
          `\n\n${ScheduleWidgetTgInformCleans.putInTgTag(isSwPublic ? '' : 's', publicRule.title)}` +
          `\n${ScheduleWidgetTgInformCleans.putInTgTag(
            isSwPublic && isSwBeforeRegistration ? '' : 's',
            beforeRegistrationRule.title,
          )}` +
          `\n${ScheduleWidgetTgInformCleans.putInTgTag(
            isSwPublic && isSwBeforeRegistration && isSwHideContent ? '' : 's',
            hideContentRule.title,
          )}`
        );
      } catch (error) {
        return `В расписании <b>${schedule.title}</b> изменение типа`;
      }
    },
  },
};
