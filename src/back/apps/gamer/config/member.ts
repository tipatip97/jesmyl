import { ExecutionArgs } from '../../../complect/executer/Executer.model';
import { filer } from '../../../complect/filer/Filer';
import { ActionBox, ActionBoxOnFinalCallback } from '../../../models';
import { editRoomTelegramMessage } from '../../../sides/telegram-bot/gamer/tg-gamer';
import { GamerRoom, GamerRoomMember } from '../gamer.model';

const getRooms = () => filer.contents.gamer.rooms?.data as GamerRoom[];

const onActionSuccess: (
  text: (args: ExecutionArgs, member: GamerRoomMember, room: GamerRoom) => string,
) => ActionBoxOnFinalCallback<GamerRoomMember> = text => {
  return (args, member) => {
    if (member.tgMsgId == null || member.tgId === undefined || args == null) return;
    const room = getRooms().find(room => room.w === args.roomw);
    if (room === undefined) return;
    editRoomTelegramMessage(room.name, text(args, member, room), member.tgId, member.tgMsgId);
  };
};

export const gamerMemberConfig: ActionBox = {
  access: '$amIManager && $isMemberNotOwner',
  args: {
    login: '#String',
  },
  '<acceptMemberToRoom>': {
    action: 'acceptMemberToRoom',
    shortTitle: 'Добавить участника',
    onSuccess: onActionSuccess(() => 'Тебя сделали участником'),
    side: {
      '/status': {
        method: 'set',
        value: 'member',
      },
    },
  },
  '/status': {
    '<up>': {
      action: 'riseUpToAdmin',
      shortTitle: 'Сделать админом',
      method: 'set',
      value: 'admin',
    },
    '<down>': {
      action: 'riseDownToUser',
      shortTitle: 'Понизить до участника',
      method: 'set',
      value: 'member',
    },
  },
  '/isInactive': {
    '<ban>': {
      action: 'banCurrentRoomMember',
      shortTitle: 'Заблокировать участника',
      onSuccess: onActionSuccess(() => 'Тебя исключили'),
      method: 'set',
      value: true,
    },
    '<unban>': {
      action: 'unbanCurrentRoomMember',
      shortTitle: 'Разблокировать участника',
      method: 'set',
      value: false,
    },
  },
  '/tgMsgId': {
    action: 'setMemberTgMessageId',
    method: 'set',
  },
};
