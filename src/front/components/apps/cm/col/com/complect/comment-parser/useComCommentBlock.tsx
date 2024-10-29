import { useEffect, useMemo } from 'react';
import { useAtom, useAtomValue } from '../../../../../../../complect/atoms';
import { cmMolecule } from '../../../../molecules';
import { Com } from '../../Com';
import { ComBlockCommentMakerCleans } from './Cleans';
import { isComCommentRedactAtom } from './complect';
import { useComBlockCommentCssStyles } from './useComBlockCommentCssStyles';
import { useComBlockCommentUpdateBlockNames } from './useComBlockCommentUpdateBlockNames';

const isShowConHashCommentsAtom = cmMolecule.select(s => s.isShowComHashComments);
const comCommentsAtom = cmMolecule.select(s => s.comComments);

export const useComCommentBlockCss = (com: Com) => {
  const [isRedact, setIsRedact] = useAtom(isComCommentRedactAtom);
  const [comments, setComments] = useAtom(comCommentsAtom);
  const comComment = com && comments[com.wid];

  const visibleOrders = useMemo(() => {
    return com?.orders?.filter(ComBlockCommentMakerCleans.withHeaderTextOrderFilter);
  }, [com?.orders]);

  const styles = useComBlockCommentCssStyles(com, visibleOrders, comComment);

  useComBlockCommentUpdateBlockNames(com, visibleOrders, isRedact, comComment, setComments);

  useEffect(() => setIsRedact(false), [com, setIsRedact]);

  return useAtomValue(isShowConHashCommentsAtom) ? styles : '';
};
