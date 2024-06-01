import { ReactNode, useMemo, useState } from 'react';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconClock01StrokeRounded } from '../../../../../complect/the-icon/icons/clock-01';
import { IconSentStrokeRounded } from '../../../../../complect/the-icon/icons/sent';
import { TheIconType } from '../../../../../complect/the-icon/model';
import LeaderComment from './LeaderComment';
import { LeaderCommentImportable } from './LeaderComment.model';
import './LeaderComment.scss';
import useLeaderComments from './useLeaderComments';

interface Addition {
  Icon: TheIconType;
  char?: string;
  inText?: string;
  node: ReactNode;
  insert?: () => string;
}

const textAdditions = (
  [
    {
      Icon: IconClock01StrokeRounded,
      insert: () => {
        const date = new Date();
        return ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()} `;
      },
    },
  ] as Addition[]
).map(item => {
  return {
    ...item,
    node: <item.Icon />,
  };
});

const textAdditionsMap: Record<string, Addition> = {};
textAdditions.forEach(adds => adds.char && (textAdditionsMap[adds.char] = adds));

export default function LeaderCommentBlock({
  comments,
  placeholder,
  action,
  gamew,
  listw,
  listwNameMask,
  isWaitedToSend,
  importantActionOnClick,
  onRejectSend,
  newCommentTextChange,
}: {
  comments?: LeaderCommentImportable[];
  placeholder: string;
  gamew?: number;
  listw: number;
  listwNameMask: 'teamw' | 'timerw';
  action: string;
  isWaitedToSend?: boolean;
  importantActionOnClick?: (comment: string) => void;
  newCommentTextChange?: (comment: string) => void;
  onRejectSend?: (comment: LeaderCommentImportable) => void;
}) {
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { sendingComments, sendComment, isSendingMessagesError } = useLeaderComments();

  const allComments = useMemo(
    () =>
      (comments || []).concat(
        gamew
          ? (sendingComments
              ?.map(({ args }) =>
                gamew === args?.gamew && listw === args?.[listwNameMask] ? { ...args, owner: '', fio: '', w: 0 } : null,
              )
              .filter(it => it) as LeaderCommentImportable[]) || []
          : [],
      ),
    [comments, gamew, sendingComments, listw, listwNameMask],
  );
  const partOfComments = allComments.slice(-4);

  return (
    <div className="leader-comment-block full-width">
      {partOfComments.length !== allComments.length && (
        <div
          className="margin-gap pointer"
          onClick={() => setIsCommentsShow(!isCommentsShow)}
        >
          {isCommentsShow ? 'Скрыть часть комментариев' : 'Показать все комментарии'}
        </div>
      )}
      {(isCommentsShow ? allComments : partOfComments).map((comment, commenti, commenta) => {
        return (
          <LeaderComment
            key={commenti}
            className={`${commenti === 0 ? 'first' : ''} ${commenti === commenta.length - 1 ? 'last' : ''}`}
            comment={comment}
            isError={isSendingMessagesError && !comment.w}
            isWaitedToSend={isWaitedToSend}
            onRejectSend={() => onRejectSend?.(comment)}
          />
        );
      })}
      {
        <div className="flex column full-width">
          <KeyboardInput
            className="margin-gap"
            multiline
            value={commentText}
            placeholder={placeholder}
            onChange={value => {
              newCommentTextChange?.(value);
              setCommentText(value);
            }}
          />
          <div className="flex full-width between margin-gap pointer-children">
            <IconButton
              Icon={IconSentStrokeRounded}
              disabled={!commentText}
              onClick={() => {
                const comment = textAdditions.reduce(
                  (text, { char, inText }) => (char && inText && text.replace(RegExp(char, 'g'), inText)) || text,
                  commentText,
                );
                setCommentText('');
                newCommentTextChange?.('');

                if (importantActionOnClick) {
                  importantActionOnClick(comment);
                  return;
                }

                if (gamew) {
                  sendComment({
                    action,
                    args: {
                      gamew,
                      [listwNameMask]: listw,
                      comment,
                    },
                  });
                }
              }}
            />
          </div>
        </div>
      }
    </div>
  );
}
