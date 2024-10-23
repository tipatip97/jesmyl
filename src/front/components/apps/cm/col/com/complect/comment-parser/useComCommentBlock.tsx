import { useEffect, useMemo, useState } from 'react';
import { useAtom, useAtomValue } from '../../../../../../../complect/atoms';
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
  const comComment = com && comments[com.wid];
  const isShowConHashComments = useAtomValue(isShowConHashCommentsAtom);

  const visibleOrders = useMemo(() => {
    return com?.orders?.filter(ComBlockCommentMakerCleans.withHeaderTextOrderFilter);
  }, [com?.orders]);

  const styles = useComBlockCommentCssStyles(com, visibleOrders, comComment);

  useComBlockCommentUpdateBlockNames(com, visibleOrders, isRedact, comComment, setComments);

  useEffect(() => setIsRedact(false), [com]);

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
