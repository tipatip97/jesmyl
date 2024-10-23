import { useEffect, useMemo, useState } from 'react';
import { css, RuleSet } from 'styled-components';
import { hookEffectPipe, setTimeoutPipe } from '../../../../../../../complect/hookEffectPipe';
import { MyLib } from '../../../../../../../complect/my-lib/MyLib';
import { useDebounceValue } from '../../../../../../../complect/useDebounceValue';
import { Com } from '../../Com';
import { Order } from '../../order/Order';
import { ComBlockCommentMakerCleans } from './Cleans';

export const useComBlockCommentCssStyles = (com: nil | Com, visibleOrders: Order[] | und, comment: string | nil) => {
  const comComment = useDebounceValue(comment, 600);
  const [fastStyles, setFastStyles] = useState<string | null>(null);

  useEffect(() => {
    setFastStyles('');
    return hookEffectPipe()
      .pipe(setTimeoutPipe(setFastStyles, 600, null))
      .effect();
  }, [com]);

  const styles = useMemo(() => {
    if (fastStyles !== null) return '';

    let cssContentList: RuleSet<object>[] = [];

    if (comComment) {
      const commentBlocks = Array.from(comComment.matchAll(ComBlockCommentMakerCleans.commentsParseReg));
      const commentsDict: Record<string, string[]> = {};

      for (const commentBlock of commentBlocks) {
        const [, , , $hashes, $blockHashPosition, , , $modificators, , , , $comment] = commentBlock;

        if (!$comment) continue;

        if ($hashes.length > 1) {
          if (visibleOrders == null) continue;

          const leadOrderStyleKey = visibleOrders[+$blockHashPosition - 1]?.me.style?.key.trim();

          if (leadOrderStyleKey == null) continue;
          let orderPosition = 0;

          for (const visibleOrder of visibleOrders) {
            orderPosition++;

            if (visibleOrder.me.style?.key.trim() !== leadOrderStyleKey) continue;
            if (commentsDict[orderPosition] != null && $modificators !== '!') continue;

            commentsDict[orderPosition] = [$comment.trim()];
          }
          continue;
        } else if ($modificators === '!') {
          commentsDict[$blockHashPosition] = [$comment.trim()];

          continue;
        }

        commentsDict[$blockHashPosition] ??= [];
        commentsDict[$blockHashPosition].push($comment.trim());
      }

      cssContentList = MyLib.entries(commentsDict).map(([blockNumber, comment]) => {
        return css`
          .styled-block:nth-child(${blockNumber} of :has(.styled-header)) {
            .styled-header {
              &::after {
                ${ComBlockCommentMakerCleans.makePseudoCommentContentCss(comment.join('\n'))}
              }
            }
          }
        `;
      });
    }

    const numeredOrderHeaders = visibleOrders?.map((_ord, ordi) => {
      return css`
        .styled-block:nth-child(${ordi + 1} of :has(.styled-header)) .styled-header {
          &::before {
            content: '#${ordi + 1}';
          }
        }
      `;
    });

    return css`
      --comment-opacity: 0.5;
      --comment-opacity-accent: 0.8;

      ${ComBlockCommentMakerCleans.makeStartCommentCss(comComment)}

      .styled-header {
        &::after,
        &::before {
          opacity: var(--comment-opacity);
          text-decoration: none;
        }

        &::before {
          margin-right: 1rem;
        }

        &:after {
          display: block;
          text-decoration: underline;
          margin-left: 1rem;
        }
      }

      ${cssContentList}
      ${numeredOrderHeaders}
    `;
  }, [comComment, fastStyles, visibleOrders]);

  return fastStyles ?? styles;
};
