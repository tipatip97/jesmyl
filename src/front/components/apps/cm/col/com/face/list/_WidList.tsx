import { useMemo } from 'react';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { useCols } from '../../../../cols/useCols';
import { Com } from '../../Com';
import { ListComFaceForSelectionsProps } from '../ComFace.model';
import { ComFaceListComList } from './_ComList';
import { IComFaceList } from './model';

interface Props extends IComFaceList, ListComFaceForSelectionsProps {
  list: CmComWid[];
  titles?: Record<number, string>;
}

const itIt = (it: unknown) => it != null;

export const ComFaceListWidList = ({ list, ...comProps }: Props) => {
  const cols = useCols();
  const comsHashMap = useMemo(() => {
    const comsHashMap = {} as Record<CmComWid, Com>;

    cols?.coms.forEach(com => (comsHashMap[com.wid] = com));

    return comsHashMap;
  }, [cols?.coms]);

  return (
    cols && (
      <ComFaceListComList
        list={list.map(comw => comsHashMap[comw]).filter(itIt)}
        {...comProps}
      />
    )
  );
};
