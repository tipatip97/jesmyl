import { TBChats } from 'back/db/TBChats';
import { TBMessages } from 'back/db/TBMessages';
import { TBUsers } from 'back/db/Users';
import { ChatsData, SokiAppName, SokiCapsule, SokiServerDoAction, SokiServerDoActionProps } from 'shared/api';
import { Eventer } from 'shared/utils';
import { WebSocket } from 'ws';
import { SokiServerServerStore } from './120-ServerStore';

export class SokiServerOtherEvents extends SokiServerServerStore implements SokiServerDoAction<'OtherEvents'> {
  constructor() {
    super();

    Eventer.listenValue(this.onCapsuleSetValueListeners, capsule => {
      (async () => {
        if (capsule.auth?.login == null) return;
        const chats = await TBChats.getFreshDataForUser(capsule.auth.login);

        this.send(
          {
            appName: 'index',
            chatsData: { chats },
          },
          capsule.client,
        );
      })();
    });
  }

  private async doOnChatsFetchData({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.chatsFetch === undefined) throw new Error();

    if (eventBody.chatsFetch.users) {
      this.send({ appName, chatsData: { users: await TBUsers.getAll() }, requestId }, client);
    }
  }

  private sendChatsDataToMembers = (
    members: { user: { login: string } }[],
    chatsData: ChatsData,
    senderLogin: string,
    appName: SokiAppName,
    requestId: string | und,
    client: WebSocket,
  ) => {
    this.send({ appName, chatsData, requestId }, client);

    const messageData = { appName, chatsData };
    const sendDataForEach = (capsule: SokiCapsule) => this.send(messageData, capsule.client);

    members.forEach(member => {
      const capsules = this.capsulesByLogin.get(member.user.login);
      if (capsules === undefined || member.user.login === senderLogin) return;

      capsules.forEach(sendDataForEach);
    });
  };

  private async doOnChatFetchData(event: SokiServerDoActionProps) {
    if (event.eventBody.chatFetch === undefined) throw new Error();
    const eventFetch = event.eventBody.chatFetch;
    const chatId = eventFetch.chatId;

    if (eventFetch.newMember != null) {
      const { userLogin } = eventFetch.newMember;
      const chat = await TBChats.addMemberToChat(chatId, userLogin);
      if (chat === null) return;

      this.sendChatsDataToMembers(
        chat.members,
        { chats: [chat] },
        userLogin,
        event.appName,
        event.requestId,
        event.client,
      );
    }

    if (eventFetch.pullMessages != null) {
      const { messages, unreachedMessages } =
        eventFetch.pullMessages === true
          ? await TBMessages.combineWithRemoved(chatId)
          : await TBMessages.combineWithRemoved(
              chatId,
              eventFetch.pullMessages.messageId,
              eventFetch.pullMessages.isMessageStart,
              eventFetch.pullMessages.fetchCount,
            );
      if (messages === null) return;
      this.send(
        {
          appName: event.appName,
          chatsData: {
            messages: { [chatId]: messages },
            unreachedMessages: { [chatId]: unreachedMessages },
          },
        },
        event.client,
      );
    }

    if (eventFetch.pullAlternativeMessagesNearId) {
      const { alternativeMessages, unreachedMessages } = await TBMessages.pullAlternativeNearId(
        chatId,
        eventFetch.pullAlternativeMessagesNearId,
      );

      this.send(
        {
          appName: event.appName,
          chatsData: {
            alternativeMessages: { [chatId]: alternativeMessages },
            unreachedMessages: { [chatId]: unreachedMessages },
          },
        },
        event.client,
      );
    }

    if (eventFetch.removeMessages != null) {
      const messagesForRemove = eventFetch.removeMessages;

      this.actionWithCapsule(event.client, async capsule => {
        if (capsule.auth?.login) {
          const { removedMessages, chat } = await TBMessages.removeMessages(
            chatId,
            capsule.auth.login,
            messagesForRemove,
          );

          this.sendChatsDataToMembers(
            chat.members,
            { messages: { [chat.chatId]: removedMessages }, chats: [chat] },
            capsule.auth.login,
            event.appName,
            event.requestId,
            capsule.client,
          );
        }
      });
    }
  }

  private async doOnChatFetchMessageData({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.chatFetch?.message === undefined) throw new Error();

    const chatMessage = eventBody.chatFetch.message;
    const chatId = eventBody.chatFetch.chatId;

    this.actionWithCapsule(client, async capsule => {
      if (capsule.auth?.login == null) return;
      const senderLogin = capsule.auth.login;

      if (chatMessage.type === 'ChatCreate') {
        const chat = await TBChats.createChat(senderLogin, chatMessage.text);
        if (chat?.members != null) {
          this.sendChatsDataToMembers(chat.members, { chats: [chat] }, senderLogin, appName, requestId, client);
        }
        return;
      }

      if (chatMessage.editMessageId) {
        const { chat, newMessage } = await TBMessages.editMessage(
          chatId,
          senderLogin,
          chatMessage.editMessageId,
          chatMessage.text,
          chatMessage.type,
        );

        if (chat?.members != null && newMessage != null) {
          this.sendChatsDataToMembers(
            chat.members,
            { chats: [chat], messages: { [chat.chatId]: [newMessage] } },
            senderLogin,
            appName,
            requestId,
            client,
          );
        }
        return;
      }

      try {
        const { chat, sentMessage, unreachedMessages } = await TBMessages.sendSimpleMessage(
          chatId,
          senderLogin,
          chatMessage,
        );

        this.sendChatsDataToMembers(
          chat.members,
          {
            messages: { [chat.chatId]: [sentMessage] },
            unreachedMessages: { [chat.chatId]: unreachedMessages },
          },
          senderLogin,
          appName,
          requestId,
          client,
        );
      } catch (error) {
        console.error(error);
      }
    });
  }

  async doOnOtherEvents(event: SokiServerDoActionProps) {
    try {
      await this.doOnChatFetchMessageData(event);
      return false;
    } catch (e) {}

    try {
      await this.doOnChatsFetchData(event);
      return false;
    } catch (e) {}

    try {
      await this.doOnChatFetchData(event);
      return false;
    } catch (e) {}

    return false;
  }
}
