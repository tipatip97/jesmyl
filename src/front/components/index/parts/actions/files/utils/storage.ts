import { JStorage } from '../../../../../../complect/JStorage';
import { MyFileType } from './associate-file';

export const filesStorage = new JStorage<Record<MyFileType, Record<string, File>>>('files');
