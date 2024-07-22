import { useCols } from '../../../../cols/useCols';
import { FreeComFaceProps } from '../ComFace.model';
import { ComFaceListComList } from './_ComList';
import { IComFaceList } from './model';

interface Props extends IComFaceList, FreeComFaceProps {
  list: number[];
  titles?: Record<number, string>;
}

const itIt = (it: unknown) => it != null;

export const ComFaceListWidList = ({ list, ...comProps }: Props) => {
  const cols = useCols();

  return (
    cols && (
      <ComFaceListComList
        list={list.map(comw => cols.coms.find(({ wid }) => comw === wid)!).filter(itIt)}
        {...comProps}
      />
    )
  );
};
