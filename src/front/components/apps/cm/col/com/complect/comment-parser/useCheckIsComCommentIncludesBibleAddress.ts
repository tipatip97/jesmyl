import { useAtomValue } from '../../../../../../../complect/atoms';
import { cmMolecule } from '../../../../molecules';
import { Com } from '../../Com';
import { ComBlockCommentMakerCleans } from './Cleans';

const comCommentsAtom = cmMolecule.select(s => s.comComments);
let isWasOpenComWithBibleAddressInComment = false;

export const useCheckIsComCommentIncludesBibleAddress = (com: Com | und) => {
  const comments = useAtomValue(comCommentsAtom);

  if (isWasOpenComWithBibleAddressInComment) return true;

  isWasOpenComWithBibleAddressInComment = !!(
    com && comments[com.wid]?.match(ComBlockCommentMakerCleans.firstCommentBibleAddressRegExp)
  );

  return isWasOpenComWithBibleAddressInComment;
};
