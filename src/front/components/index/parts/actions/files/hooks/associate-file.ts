import { useMemo } from 'react';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { useIndexFileAssociations } from '../../../../molecules';
import { MyFileType } from '../model';

const extReg = /.*?\.([^.]+$)/;

export const useAssociateTheFileType = () => {
  const associates = useIndexFileAssociations();
  return useMemo(() => {
    return (file: File): MyFileType => {
      const ext = file.name.replace(extReg, '$1').toLowerCase();
      return (associates && mylib.keys(associates).find(type => associates[type].extensions.includes(ext))) ?? 'other';
    };
  }, [associates]);
};
