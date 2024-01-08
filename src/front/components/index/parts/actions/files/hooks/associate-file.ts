import { useMemo } from 'react';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { MyFileType } from '../model';
import { useMyFilesAssociates } from './associates';

const extReg = /.*?\.([^.]+$)/;

export const useAssociateTheFileType = () => {
  const associates = useMyFilesAssociates();
  return useMemo(() => {
    return (file: File): MyFileType => {
      const ext = file.name.replace(extReg, '$1');
      return (associates && mylib.keys(associates).find(type => associates[type].extensions.includes(ext))) ?? 'other';
    };
  }, [associates]);
};
