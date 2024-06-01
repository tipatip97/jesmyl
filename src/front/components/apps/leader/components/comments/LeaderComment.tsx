import { useState } from 'react';
import useAbsoluteFloatPopup from '../../../../../complect/absolute-popup/useAbsoluteFloatPopup';
import mylib from '../../../../../complect/my-lib/MyLib';
import { TheIconLoading } from '../../../../../complect/the-icon/IconLoading';
import { IconAlert02StrokeRounded } from '../../../../../complect/the-icon/icons/alert-02';
import { IconPauseStrokeRounded } from '../../../../../complect/the-icon/icons/pause';
import { LeaderCommentImportable } from './LeaderComment.model';
import useLeaderComments from './useLeaderComments';

const templaterBag = {
  commentTime: (wid: number) => {
    const date = new Date(Math.trunc(wid));
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },
};

const months = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек'];

export default function LeaderComment({
  comment,
  isError,
  onRejectSend,
  isWaitedToSend,
  className,
}: {
  comment: LeaderCommentImportable;
  isError: boolean;
  onRejectSend?: () => void;
  isWaitedToSend?: boolean;
  className?: string;
}) {
  const date = comment.w && new Date(comment.w);
  const commentLines = comment.comment.split(/\n/);
  const isNeedCut = commentLines.length > 5 || comment.comment.length > 150;
  const [isHiddenPart, setIsHiddenPart] = useState(isNeedCut);
  const commentText = isHiddenPart ? commentLines.slice(0, 4).join('\n').slice(0, 150) + ' ...' : comment.comment;
  const { openAbsoluteFloatPopup } = useAbsoluteFloatPopup();
  const { sendAllComments } = useLeaderComments();

  return (
    <div
      className={`${className || ''} margin-gap comment`}
      onContextMenu={
        isError || isWaitedToSend
          ? event => {
              event.preventDefault();
              openAbsoluteFloatPopup(
                <>
                  <div
                    className="pointer error-text"
                    onClick={() => onRejectSend?.()}
                  >
                    Отменить отправку
                  </div>
                  <div
                    className="pointer"
                    onClick={() => sendAllComments()}
                  >
                    Повторить отправку всех
                  </div>
                </>,
                event.clientX,
                event.clientY,
              );
            }
          : undefined
      }
    >
      <div className="flex between color--1 relative text-height-block">
        {date === 0 ? (
          <>
            <div />
            {isWaitedToSend ? (
              <IconPauseStrokeRounded />
            ) : isError ? (
              <IconAlert02StrokeRounded className="absolute pos-right error-message" />
            ) : (
              <TheIconLoading className="absolute pos-right" />
            )}
          </>
        ) : (
          <>
            <div>{comment.fio}</div>
            <div>
              {date.getDate()} {months[date.getMonth()]}, {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
            </div>
          </>
        )}
      </div>
      <div className="text-bold user-select margin-gap-v">
        {mylib.stringTemplater(commentText, {
          ...templaterBag,
          ...comment,
        })}
      </div>
      {isNeedCut && (
        <div className="flex flex-end">
          <span
            className="pointer"
            onClick={() => setIsHiddenPart(!isHiddenPart)}
          >
            {isHiddenPart ? 'Показать полностью' : 'Скрыть часть текста'}
          </span>
        </div>
      )}
    </div>
  );
}
