import { useEffect } from 'react';
import { hookEffectPipe, setTimeoutPipe } from '../../../../../../../complect/hookEffectPipe';
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
    return hookEffectPipe()
      .pipe(
        setTimeoutPipe(() => {
          if (!com || !comComment || visibleOrders == null) return;

          const initialOrders = com?.orders;

          if (initialOrders == null) return;

          const newComment = comComment?.replace(
            ComBlockCommentMakerCleans.commentsParseReg,
            (
              $all,
              $before,
              $beforeSpaces,
              $hashes,
              $blockHashPosition,
              _$associations,
              $secretWidStr,
              $modificators,
              _$info,
              _$blockHeader,
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
                    blockHeader = unsecretInvisibleOrder.me.header() || '';

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
                      blockHeader = fromBlockHashPositionOrder.me.header() || '';

                      blockHashPosition = fromHashOrderi + 1;
                    }
                  }
                } else {
                  secretWidStr = $secretWidStr;
                  blockHeader = unsecredVisibleOrder.me.header() || '';

                  blockHashPosition = unsecredVisibleOrderi + 1;
                }
              } else {
                const fromBlockHashPositionOrder = visibleOrders[+$blockHashPosition - 1] as Order | nil;

                if (fromBlockHashPositionOrder == null) return $all;

                secretWidStr = ComBlockCommentMakerCleans.makeWidToSecret(fromBlockHashPositionOrder.wid);
                blockHeader = fromBlockHashPositionOrder.me.header() || '';
              }

              return (
                `${$before}${$beforeSpaces}${$hashes}${blockHashPosition || ''}${
                  secretWidStr ? `_${secretWidStr}` : ''
                }${$modificators || ''}` +
                (blockHeader ? ` [${blockHeader}]` : ' ') +
                (`${$beforeCommentSpaces || (isRedact ? '' : ' ')}` || ' ') +
                `${$comment || ''}`
              );
            },
          );

          if (
            ComBlockCommentMakerCleans.spaceFreeText(comComment) ===
            ComBlockCommentMakerCleans.spaceFreeText(newComment)
          )
            return;

          setComments(prev => ({ ...prev, [com.wid]: isRedact ? newComment : newComment.trim() }));
        }, 500),
      )
      .effect();
  }, [visibleOrders, com, comComment, isRedact, setComments]);
};
