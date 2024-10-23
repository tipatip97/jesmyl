import { useMemo } from 'react';
import { makeRegExp } from '../../../../../../../back/complect/makeRegExp';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { useIndexFileAssociations } from '../../../../molecules';
import { MyFileType } from '../model';

export const useAssociateTheFileType = () => {
  const associates = useIndexFileAssociations();
  return useMemo(() => {
    return (file: File): MyFileType => {
      const ext = file.name.replace(makeRegExp('/.*?\\.([^.]+$)/'), '$1').toLowerCase();
      return (associates && mylib.keys(associates).find(type => associates[type].extensions.includes(ext))) ?? 'other';
    };
  }, [associates]);
};
