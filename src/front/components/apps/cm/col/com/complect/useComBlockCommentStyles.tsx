import { useEffect, useMemo, useState } from 'react';
import { css, RuleSet } from 'styled-components';
import { CmComWid } from '../../../../../../../back/apps/cm/Cm.enums';
import { makeRegExp } from '../../../../../../../back/complect/makeRegExp';
import { useAtom, useAtomValue } from '../../../../../../complect/atoms';
import { MyLib } from '../../../../../../complect/my-lib/MyLib';
import { cmMolecule } from '../../../molecules';
import { Com } from '../Com';
import TheComComment from '../TheComComment';
import { Order } from '../order/Order';

const isShowConHashCommentsAtom = cmMolecule.select(s => s.isShowComHashComments);
const comCommentsAtom = cmMolecule.select(s => s.comComments);
const numberAssociationLine = 'wQtsLSzfFZ';
const commentBlockReg = makeRegExp(
  `/(^|\\n) *#(\\d*) *(\\[([${numberAssociationLine}]*) ?(.+?)\\])? *([\\w\\W]+?)(?=\\n *#\\d?|$)/g`,
);

const withHeaderTextOrderFilter = (ord: Order) => ord.isVisible && !ord.top.isInherit;

const makeSecretToWid = (infoWidStr: string) =>
  infoWidStr
    ? (+('' + infoWidStr || '').replace(
        makeRegExp(`/[${numberAssociationLine}]/g`),
        all => '' + numberAssociationLine.indexOf(all),
      ) as CmComWid)
    : null;

const makeWidToSecret = (wid: CmComWid) => ('' + wid).replace(makeRegExp('/./g'), all => numberAssociationLine[+all]);

export const useComBlockCommentStyles = (com: Com | nil) => {
  const [isRedact, setIsRedact] = useState(false);
  const [comments, setComments] = useAtom(comCommentsAtom);
  const isShowConHashComments = useAtomValue(isShowConHashCommentsAtom);
  const comComment = com && comments[com?.wid];
  const visibleOrders = useMemo(() => {
    return com?.orders?.filter(withHeaderTextOrderFilter);
  }, [com?.orders]);

  const associateIndexWithWid = useMemo(() => {
    if (!comComment) return {};
    const associateWidWithIndex: Record<string, CmComWid> = {};

    if (!isRedact) return associateWidWithIndex;

    const commentBlocks = Array.from(comComment.matchAll(commentBlockReg));

    commentBlocks.forEach(([, , $blockiHashPosition, , $secretWidStr]) => {
      const unsecretWid = makeSecretToWid($secretWidStr);
      if (unsecretWid != null) associateWidWithIndex[$blockiHashPosition] = unsecretWid;
    });

    return associateWidWithIndex;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRedact]);

  const styles = useMemo(() => {
    let cssContentList: RuleSet<object>[] = [];

    if (comComment) {
      const commentBlocks = Array.from(comComment.matchAll(commentBlockReg));
      const commentsDict: Record<string, string[]> = {};

      for (const commentBlock of commentBlocks) {
        const [, , blockiHashPosition, , , , comment] = commentBlock;

        commentsDict[blockiHashPosition] ??= [];
        commentsDict[blockiHashPosition].push(comment.trim());
      }

      cssContentList = MyLib.entries(commentsDict).map(([blockNumber, comment]) => {
        const commentContent = comment
          .join('\n')
          .replace(makeRegExp('/\\n/g'), '\\A ')
          .replace(makeRegExp("/'/g"), "\\'");

        return css`
          .styled-block:nth-child(${blockNumber} of :has(.styled-header)) {
            .styled-header {
              &::after {
                content: '${commentContent}';
                opacity: var(--comment-opacity-accent);

                ${commentContent.includes('!')
                  ? css`
                      color: var(--color--ko);
                    `
                  : commentContent.includes('?')
                    ? css`
                        color: var(--color--7);
                      `
                    : css`
                        opacity: var(--comment-opacity);
                        color: var(--color-far);
                      `}
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

      .styled-header {
        &::after,
        &::before {
          opacity: var(--comment-opacity);
          white-space: pre;
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
  }, [comComment, visibleOrders]);

  useEffect(() => {
    const initialOrders = com?.orders;

    if (!comComment || visibleOrders == null || initialOrders == null) return;

    const newComment = comComment?.replace(
      commentBlockReg,
      ($all, $before, $blockHashPosition, _$info, $secretWidStr, $blockHeader, $comment) => {
        let secretWidStr = '';
        let blockHeader = '';
        let blockHashPosition = +$blockHashPosition;

        if ($secretWidStr) {
          const unsecredWid = makeSecretToWid($secretWidStr);
          const unsecredVisibleOrderi = visibleOrders.findIndex(ord => ord.wid === unsecredWid);
          const unsecredVisibleOrder = visibleOrders[unsecredVisibleOrderi];

          if (unsecredVisibleOrder == null) {
            const unsecretInvisibleOrderi = initialOrders.findIndex(ord => ord.wid === unsecredWid);
            const unsecretInvisibleOrder = initialOrders[unsecretInvisibleOrderi];

            if (unsecretInvisibleOrder) {
              secretWidStr = makeWidToSecret(unsecretInvisibleOrder.wid);
              blockHeader = unsecretInvisibleOrder.top.header?.() || '';

              blockHashPosition = 0;
            } else {
              const fromBlockHashPositionOrder = visibleOrders[+$blockHashPosition - 1] as Order | nil;

              if (fromBlockHashPositionOrder == null) {
                secretWidStr = '';
                blockHeader = '';
                blockHashPosition = 0;
              } else {
                const fromHashOrderi = visibleOrders.findIndex(ord => ord.wid === fromBlockHashPositionOrder.wid);

                secretWidStr = makeWidToSecret(fromBlockHashPositionOrder.wid);
                blockHeader = fromBlockHashPositionOrder.top.header?.() || '';

                blockHashPosition = fromHashOrderi + 1;
              }
            }
          } else {
            secretWidStr = $secretWidStr;
            blockHeader = unsecredVisibleOrder.top.header?.() || '';

            blockHashPosition = unsecredVisibleOrderi + 1;
          }
        } else {
          const fromBlockHashPositionOrder = visibleOrders[+$blockHashPosition - 1] as Order | nil;

          if (fromBlockHashPositionOrder == null) return $all;

          secretWidStr = makeWidToSecret(fromBlockHashPositionOrder.wid);
          blockHeader = fromBlockHashPositionOrder.top.header?.() || '';
        }

        if (isRedact) blockHeader = $blockHeader;

        return (
          `${$before}#${blockHashPosition || ''}` +
          (blockHeader ? (isRedact ? ` [${blockHeader}]` : ` [${`${secretWidStr} `}${blockHeader}]`) : '') +
          `${$comment ? ` ${$comment}` : ' '}`
        );
      },
    );

    setComments(prev => ({ ...prev, [com.wid]: newComment }));
  }, [visibleOrders, com, comComment, isRedact, setComments]);

  useEffect(() => {
    if (!visibleOrders || !comComment || !isRedact) return;

    const newComment = comComment.replace(makeRegExp('/(^|\\n)#(\\d*)( *)(\\[\\w+ *)?/g'), ($all, $1, $2, $3, $4) => {
      const wid = associateIndexWithWid[$2];
      if (wid == null) return $all;

      const newIndex = visibleOrders.findIndex(ord => ord.wid === wid);
      if (newIndex < 0) return $all;

      return `${$1}#${newIndex + 1 || ''}${$3}${$4 ? '[' : ''}`;
    });

    setComments(prev => {
      if (prev[com.wid] !== newComment) setIsRedact(false);
      return { ...prev, [com.wid]: newComment };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [com, isRedact]);

  return {
    commentStyles: isShowConHashComments ? styles : '',
    commentBlockNode: com && (
      <TheComComment
        comw={com.wid}
        isRedact={isRedact}
        setIsRedact={setIsRedact}
      />
    ),
  };
};
