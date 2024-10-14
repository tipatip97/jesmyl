import { useEffect, useMemo, useState } from 'react';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { useAtom, useAtomValue } from '../../../../../../../complect/atoms';
import { useDebounceValue } from '../../../../../../../complect/useDebounceValue';
import { cmMolecule } from '../../../../molecules';
import { Com } from '../../Com';
import { ComBlockCommentMakerCleans } from './Cleans';
import TheComComment from './TheComComment';
import { useComBlockCommentCssStyles } from './useComBlockCommentCssStyles';
import { useComBlockCommentUpdateBlockNames } from './useComBlockCommentUpdateBlockNames';

const isShowConHashCommentsAtom = cmMolecule.select(s => s.isShowComHashComments);
const comCommentsAtom = cmMolecule.select(s => s.comComments);

export const useComCommentBlock = (com: Com | nil) => {
  const [isRedact, setIsRedact] = useState(false);
  const [comments, setComments] = useAtom(comCommentsAtom);
  const isShowConHashComments = useAtomValue(isShowConHashCommentsAtom);
  const comComment = useDebounceValue(com && comments[com?.wid]);
  const visibleOrders = useMemo(() => {
    return com?.orders?.filter(ComBlockCommentMakerCleans.withHeaderTextOrderFilter);
  }, [com?.orders]);
  const styles = useComBlockCommentCssStyles(visibleOrders, comComment);
  useComBlockCommentUpdateBlockNames(com, visibleOrders, isRedact, comComment, setComments);

  const associateIndex2Wid = useMemo(() => {
    if (!comComment || !isRedact) return null;

    const index2Wid: Record<string, CmComWid> = {};
    const commentBlocks = Array.from(comComment.matchAll(ComBlockCommentMakerCleans.commentsParseReg));

    commentBlocks.forEach(([, , , , $blockHashPosition, , , $secretWidStr]) => {
      const unsecretWid = ComBlockCommentMakerCleans.makeSecretToWid($secretWidStr);
      if (unsecretWid != null) index2Wid[$blockHashPosition] = unsecretWid;
    });

    return index2Wid;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRedact]);

  useEffect(() => {
    if (!visibleOrders || !comComment || !isRedact || !associateIndex2Wid) return;

    const newComment = comComment.replace(
      ComBlockCommentMakerCleans.simpleCommentsParseReg,
      ($all, $before, $hashes, $blockiPosition, $modificator, $spaces, $comment) => {
        const wid = associateIndex2Wid[$blockiPosition];
        if (wid == null) return $all;

        const newIndex = visibleOrders.findIndex(ord => ord.wid === wid);
        if (newIndex < 0) return $all;

        return `${$before}${$hashes}${newIndex + 1 || ''}${$modificator}${$spaces}${$comment ? '[' : ''}`;
      },
    );

    if (com)
      setComments(prev => {
        if (
          ComBlockCommentMakerCleans.spaceFreeText(prev[com.wid]) ===
          ComBlockCommentMakerCleans.spaceFreeText(newComment)
        )
          return prev;

        setIsRedact(false);
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
