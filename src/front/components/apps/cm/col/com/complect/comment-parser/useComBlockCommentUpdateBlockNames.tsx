import { useEffect } from 'react';
import { cmMolecule } from '../../../../molecules';
import { Com } from '../../Com';
import { Order } from '../../order/Order';
import { ComBlockCommentMakerCleans } from './Cleans';

export const useComBlockCommentUpdateBlockNames = (
  com: Com | nil,
  visibleOrders: Order[] | undefined,
  isRedact: boolean,
  comComment: string | nil,
  setComments: ReturnType<typeof cmMolecule.take<'comComments'>>['set'],
) => {
  useEffect(() => {
    const initialOrders = com?.orders;

    if (!comComment || visibleOrders == null || initialOrders == null) return;

    const newComment = comComment?.replace(
      ComBlockCommentMakerCleans.commentsParseReg,
      (
        $all,
        $before,
        $beforeSpaces,
        $hashes,
        $blockHashPosition,
        $modificators,
        _$info,
        $secretWidStr,
        $blockHeader,
        $beforeCommentSpaces,
        $comment,
      ) => {
        let secretWidStr = '';
        let blockHeader = '';
        let blockHashPosition = +$blockHashPosition;

        if ($secretWidStr) {
          const unsecredWid = ComBlockCommentMakerCleans.makeSecretToWid($secretWidStr);
          const unsecredVisibleOrderi = visibleOrders.findIndex(ord => ord.wid === unsecredWid);
          const unsecredVisibleOrder = visibleOrders[unsecredVisibleOrderi];

          if (unsecredVisibleOrder == null) {
            const unsecretInvisibleOrderi = initialOrders.findIndex(ord => ord.wid === unsecredWid);
            const unsecretInvisibleOrder = initialOrders[unsecretInvisibleOrderi];

            if (unsecretInvisibleOrder) {
              secretWidStr = ComBlockCommentMakerCleans.makeWidToSecret(unsecretInvisibleOrder.wid);
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

                secretWidStr = ComBlockCommentMakerCleans.makeWidToSecret(fromBlockHashPositionOrder.wid);
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

          secretWidStr = ComBlockCommentMakerCleans.makeWidToSecret(fromBlockHashPositionOrder.wid);
          blockHeader = fromBlockHashPositionOrder.top.header?.() || '';
        }

        if (isRedact) blockHeader = $blockHeader;

        return (
          `${$before}${$beforeSpaces}${$hashes}${blockHashPosition || ''}${$modificators}` +
          (blockHeader ? (isRedact ? ` [${blockHeader}]` : ` [${`${secretWidStr} `}${blockHeader}]`) : ' ') +
          `${$beforeCommentSpaces || (isRedact ? '' : ' ')}` +
          `${$comment || ''}`
        );
      },
    );

    if (
      !com ||
      ComBlockCommentMakerCleans.spaceFreeText(comComment) === ComBlockCommentMakerCleans.spaceFreeText(newComment)
    )
      return;

    setComments(prev => ({ ...prev, [com.wid]: isRedact ? newComment : newComment.trim() }));
  }, [visibleOrders, com, comComment, isRedact, setComments]);
};
