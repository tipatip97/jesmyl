import { useMemo } from 'react';
import { CmComWid } from '../../../../../../../../shared/api/complect/apps/cm/complect/enums';
import { itNNull } from 'shared/utils';
import { useCols } from '../../../../cols/useCols';
import { Com } from '../../Com';
import { ListComFaceForSelectionsProps } from '../ComFace.model';
import { ComFaceListComList } from './_ComList';
import { IComFaceList } from './model';

interface Props extends IComFaceList, ListComFaceForSelectionsProps {
  list: CmComWid[];
  titles?: Record<number, string>;
}

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
        list={list.map(comw => comsHashMap[comw]).filter(itNNull)}
        {...comProps}
      />
    )
  );
};
