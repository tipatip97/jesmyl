import { useCallback } from 'react';
import { SecretChat } from 'shared/api';
import { ActualRef } from '../../../../../../../complect/useActualRef';
import { ListSlicerLimits } from '../../../../../../../complect/useListShownLimitsController';
import { secretChatClassNamesDict } from '../../complect';

let markAsAccentClickTimeoutDict: Partial<Record<SecretChat.MessageTs, TimeOut>> = {};

export const useScrollIntoViewAccentMessageCallback = (
  messageTssRef: ActualRef<SecretChat.MessageTs[]>,
  limits: ListSlicerLimits,
  setLimits: (start: number | nil, finish: number | nil) => void,
) => {
  return useCallback(
    (targetMessage: SecretChat.Message) => {
      const findNode = () => document.querySelector(`[sent-ts='${targetMessage.ts}']`);
      let targetMessageNode = findNode();
      const targetTsi = messageTssRef.current.indexOf(targetMessage.ts);

      const makeAccent = () => {
        targetMessageNode ??= findNode();
        if (targetMessageNode === null) return;

        targetMessageNode.scrollIntoView({ block: 'center' });
        targetMessageNode.classList.add(secretChatClassNamesDict.markAsAccent);

        clearTimeout(markAsAccentClickTimeoutDict[targetMessage.ts]);

        if (targetMessageNode.classList.contains(secretChatClassNamesDict.markAsAccent)) {
          targetMessageNode?.classList.remove(secretChatClassNamesDict.markAsAccent);
          setTimeout(() => {
            targetMessageNode?.classList.add(secretChatClassNamesDict.markAsAccent);
          }, 50);
        }

        markAsAccentClickTimeoutDict[targetMessage.ts] = setTimeout(() => {
          targetMessageNode?.classList.remove(secretChatClassNamesDict.markAsAccent);
        }, 3000);
      };

      if (targetMessageNode === null) {
        if (targetTsi < 0) return;

        setLimits(targetTsi - 30, targetTsi + 30);
        setTimeout(makeAccent, 10);

        return;
      }

      const startLimit = targetTsi - limits.start < 30 ? targetTsi - 30 : null;
      const finishLimit = limits.finish - targetTsi < 30 ? targetTsi + 30 : null;

      setLimits(startLimit, finishLimit);

      makeAccent();
    },
    [limits.finish, limits.start, messageTssRef, setLimits],
  );
};
