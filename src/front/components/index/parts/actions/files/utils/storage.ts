import { JStorage } from '../../../../../../complect/JStorage';
import { MyFileType } from '../model';

export const filesStorage = new JStorage<Record<MyFileType, Record<string, File>>>('files');
