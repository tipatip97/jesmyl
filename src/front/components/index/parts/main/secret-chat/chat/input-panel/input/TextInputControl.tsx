import { useEffect, useState } from 'react';
import { makeRegExp } from '../../../../../../../../../back/complect/makeRegExp';
import { useAtomValue } from '../../../../../../../../complect/atoms';
import { isMobileDevice } from '../../../../../../../../complect/device-differences';
import { StyledLoadingSpinner } from '../../../../../../../../complect/the-icon/IconLoading';
import { IconArrowUp02StrokeRounded } from '../../../../../../../../complect/the-icon/icons/arrow-up-02';
import { IconSentStrokeRounded } from '../../../../../../../../complect/the-icon/icons/sent';
import { ActualRef } from '../../../../../../../../complect/useActualRef';
import { useSecretChatIdContext } from '../../../complect';
import { secretChatsDraftsAtom } from '../../../molecule';
import {
  StyledSecretChatMessageControlsPanel,
  StyledSecretChatMessageSendIconButton,
  StyledSecretChatMessageTextArea,
} from '../InputPanel.styled';

const SendIcon = isMobileDevice ? IconArrowUp02StrokeRounded : IconSentStrokeRounded;

interface Props {
  inputRef: React.RefObject<HTMLTextAreaElement>;
  sendMessageRef: ActualRef<() => void>;
  isSending: boolean;
}

export const SecretChatMessageTextInputControl = ({ inputRef, sendMessageRef, isSending }: Props) => {
  const draftMessages = useAtomValue(secretChatsDraftsAtom);
  const draft = draftMessages[useSecretChatIdContext()];

  const [value, setValue] = useState(draft?.text || '');

  useEffect(() => setValue(draft?.text || ''), [draft?.text, setValue]);

  if (inputRef.current !== null)
    (inputRef.current as unknown as { setValue: (value: string) => void }).setValue = setValue;

  return (
    <StyledSecretChatMessageControlsPanel $textLinesCount={value.match(makeRegExp('/\\n/g'))?.length}>
      <StyledSecretChatMessageTextArea
        ref={inputRef}
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
      <StyledSecretChatMessageSendIconButton
        Icon={isSending ? StyledLoadingSpinner : SendIcon}
        disabled={!value.trim()}
        onClick={sendMessageRef.current}
        className="padding-gap bgcolor--7 color--1"
      />
    </StyledSecretChatMessageControlsPanel>
  );
};
