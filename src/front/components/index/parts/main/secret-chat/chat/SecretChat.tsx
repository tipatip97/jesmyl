import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SecretChat } from '../../../../../../../back/apps/index/SecretChat.complect';
import { useAtom, useAtomValue } from '../../../../../../complect/atoms';
import { MyLib } from '../../../../../../complect/my-lib/MyLib';
import PhaseContainerConfigurer from '../../../../../../complect/phase-container/PhaseContainerConfigurer';
import { useActualRef } from '../../../../../../complect/useActualRef';
import { useListShownLimitsController } from '../../../../../../complect/useListShownLimitsController';
import { getParentNodeWithClassName } from '../../../../../../complect/utils';
import {
  makeChatId,
  secretChatClassNamesDict,
  SecretChatContext,
  SecretChatIdContext,
  SecretChatLastReadTsContext,
  SecretChatMessagesHashContext,
  SecretChatMessagesTssContext,
  secretChatMessageTsAsOpenContextAtom,
  useSecretChatContext,
  useSecretChatLastReadTsContext,
  useSecretChatMessagesHashContext,
  useSecretChatMessagesTssContext,
} from '../complect';
import {
  secretChatMessagesHashMapAtom,
  secretChatsAtom,
  secretChatsDraftsAtom,
  secretChatsLastReadTsAtom,
} from '../molecule';
import { CssSecretChatMessage } from './complect/_CssSecretChatMessage';
import { SecretChatHead } from './complect/ChatHead';
import { MessageContextMenu } from './complect/MessageContextMenu';
import { useLastReadTsController } from './complect/useLastReadTsController';
import { useScrollIntoViewAccentMessageCallback } from './complect/useScrollIntoViewAccentMessageCallback';
import { SecretChatMessage } from './message/Message';
import {
  StyledMessageInputPanel,
  StyledMessagesList,
  StyledReplyFloatIconBox,
  StyledSecretChat,
  StyledSecretChatReplyIcon,
} from './SecretChat.styled';

const PageChatInContexts = () => {
  const chat = useSecretChatContext();
  const chatLastReadTs = useSecretChatLastReadTsContext();
  const messagesHash = useSecretChatMessagesHashContext();
  const listRef = useRef<HTMLDivElement>(null);
  const replyFloatIconBoxRef = useRef<HTMLDivElement>(null);
  const [initialLastReadTs, setInitialLastReadTs] = useState(chatLastReadTs);
  const messageTssRef = useActualRef(useSecretChatMessagesTssContext());
  const [contextOfMessageTs, setContextOfMessageTs] = useAtom(secretChatMessageTsAsOpenContextAtom);
  const draftMessages = useAtomValue(secretChatsDraftsAtom);
  const draft = draftMessages[chat.id] as SecretChat.MessageDraft | und;
  useLastReadTsController(listRef, chat, messageTssRef, initialLastReadTs, setInitialLastReadTs, replyFloatIconBoxRef);

  const { limits, setLimits } = useListShownLimitsController(
    listRef,
    messageTssRef.current,
    messageTs => messageTs === chatLastReadTs,
    false,
  );

  const scrollToAccentMessage = useScrollIntoViewAccentMessageCallback(messageTssRef, limits, setLimits);

  const onMessageSent = useCallback((message: SecretChat.ImportableMessage) => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
      setInitialLastReadTs(message.message.ts);
    }
  }, []);

  useEffect(() => {
    if (listRef.current === null) return;
    const node = document.querySelector(`:has( + [sent-ts='${initialLastReadTs}'])`);

    if (node === null) return;

    node.scrollIntoView({ block: 'start' });
    listRef.current.scrollTop -= 40;
  }, [initialLastReadTs]);

  const onListTouchStart = useCallback(() => setContextOfMessageTs(null), [setContextOfMessageTs]);
  const onListClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setContextOfMessageTs(null);

      const { foundClassNames, node } = getParentNodeWithClassName(event, 'message-place', ['message-head']);

      if (node === null || foundClassNames['message-head'] !== true) return;

      event.stopPropagation();
      event.preventDefault();

      const messageTs = node.getAttribute('sent-ts');

      if (messageTs === null) return;

      const currentMessage = messagesHash[messageTs as SecretChat.MessageTs];

      if (currentMessage?.targetTs === undefined) return;
      const targetMessage = messagesHash[currentMessage?.targetTs];

      if (targetMessage == null) return;
      scrollToAccentMessage(targetMessage);
    },
    [messagesHash, scrollToAccentMessage, setContextOfMessageTs],
  );

  useEffect(() => {
    if (listRef.current === null || draft?.type === 'text' || !draft?.targetTs) return;

    const targetNode = listRef.current.querySelector(`[sent-ts='${draft.targetTs}']`);
    if (targetNode === null) return;

    targetNode.classList.add(secretChatClassNamesDict.messageOnDraft, draft.type);

    return () => {
      targetNode.classList.remove(secretChatClassNamesDict.messageOnDraft, draft.type);
    };
  }, [draft?.targetTs, draft?.type]);

  useEffect(() => {
    if (listRef.current === null || !contextOfMessageTs) return;

    const targetNode = listRef.current.querySelector(`[sent-ts='${contextOfMessageTs}']`);
    if (targetNode === null) return;

    targetNode.classList.add(secretChatClassNamesDict.messageOnContextMenu);

    return () => {
      targetNode.classList.remove(secretChatClassNamesDict.messageOnContextMenu);
    };
  }, [contextOfMessageTs]);

  return (
    <PhaseContainerConfigurer
      className="index-chat"
      hideFooterMenu
      contentClass=" "
      headTitle={<span className="ellipsis ">Чат {chat.title}</span>}
      head={<SecretChatHead />}
      content={
        <>
          <CssSecretChatMessage />
          <StyledSecretChat>
            <StyledMessagesList
              ref={listRef}
              className="full-size"
              onClick={onListClick}
              onTouchStart={onListTouchStart}
              $lastReadTs={initialLastReadTs}
            >
              {messageTssRef.current.slice(limits.start, limits.finish).map((messageTs, messageTsi, messageTsa) => {
                return (
                  <SecretChatMessage
                    key={messagesHash[messageTs]!.ts}
                    message={messagesHash[messageTs]!}
                    prevMessage={messagesHash[messageTsa[messageTsi - 1]]}
                  />
                );
              })}

              <StyledReplyFloatIconBox ref={replyFloatIconBoxRef}>
                <StyledSecretChatReplyIcon withoutAnimation />
              </StyledReplyFloatIconBox>
            </StyledMessagesList>
            <StyledMessageInputPanel
              listRef={listRef}
              setLimits={setLimits}
              onMessageSent={onMessageSent}
              scrollToAccentMessage={scrollToAccentMessage}
            />
            {contextOfMessageTs && <MessageContextMenu />}
          </StyledSecretChat>
        </>
      }
    />
  );
};

export const SecretChatPage = () => {
  const chatId = makeChatId(useParams().chatId);
  const chat = useAtomValue(secretChatsAtom)[chatId ?? '00'];
  const chatLastReadTs = useAtomValue(secretChatsLastReadTsAtom)[chatId ?? '00'];
  const messagesHashMap = useAtomValue(secretChatMessagesHashMapAtom)[chatId ?? '00'];

  const messageTss = useMemo(() => MyLib.reverseSort(MyLib.keys(messagesHashMap ?? {})), [messagesHashMap]);

  if (chat == null || chatId == null || messagesHashMap == null || chatLastReadTs == null)
    return (
      <PhaseContainerConfigurer
        className="index-chat unknown"
        headTitle={<>Чат</>}
        content={<div className="full-size color--ko center">Чат не найден</div>}
      />
    );

  return (
    <SecretChatLastReadTsContext.Provider value={chatLastReadTs}>
      <SecretChatMessagesHashContext.Provider value={messagesHashMap}>
        <SecretChatMessagesTssContext.Provider value={messageTss}>
          <SecretChatIdContext.Provider value={chatId}>
            <SecretChatContext.Provider value={chat}>
              <PageChatInContexts />
            </SecretChatContext.Provider>
          </SecretChatIdContext.Provider>
        </SecretChatMessagesTssContext.Provider>
      </SecretChatMessagesHashContext.Provider>
    </SecretChatLastReadTsContext.Provider>
  );
};
