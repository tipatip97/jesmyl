import { SecretChat } from 'shared/api';

type AnyNum = number | bigint;
type WithAnyId = { id: AnyNum };
type WithAnyCreatedAt = { createdAt: string | Date };

export type TbUserMemberInChatType = WithRewrites<
  SecretChat.ChatMember,
  WithAnyId & { user: WithRewrites<SecretChat.ChatMemberUser, WithAnyId> }
>;
export type TbMessageType = WithRewrites<
  SecretChat.ImportableMessage,
  WithAnyId & WithAnyCreatedAt & { sentMemberId: AnyNum; replyMessageId: AnyNum | null }
>;

export type TbMiniChatInfoType<T = {}> = WithRewrites<
  SecretChat.ChatMiniInfo,
  {
    messages: TbMessageType[];
    members: TbUserMemberInChatType[];
    chatId: string;
  } & T
>;
