import { useEffect, useMemo } from 'react';
import { useAtom, useAtomValue } from '../../../../../../../complect/atoms';
import { cmMolecule, useComComment } from '../../../../molecules';
import { Com } from '../../Com';
import { ComBlockCommentMakerCleans } from './Cleans';
import { isComCommentRedactAtom } from './complect';
import { useComBlockCommentCssStyles } from './useComBlockCommentCssStyles';
import { useComBlockCommentUpdateBlockNames } from './useComBlockCommentUpdateBlockNames';

const isShowConHashCommentsAtom = cmMolecule.select(s => s.isShowComHashComments);

export const useComCommentBlockCss = (com: Com) => {
  const [isRedact, setIsRedact] = useAtom(isComCommentRedactAtom);
  const [comment, setComment] = useComComment(com.wid);

  const visibleOrders = useMemo(() => {
    return com.orders?.filter(ComBlockCommentMakerCleans.withHeaderTextOrderFilter);
  }, [com.orders]);

  const styles = useComBlockCommentCssStyles(com, visibleOrders, comment);

  useComBlockCommentUpdateBlockNames(com, visibleOrders, isRedact, comment, setComment);

  useEffect(() => setIsRedact(false), [com, setIsRedact]);

  return useAtomValue(isShowConHashCommentsAtom) ? styles : '';
};
