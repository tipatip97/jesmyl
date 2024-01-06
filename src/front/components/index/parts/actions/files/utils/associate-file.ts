import { MyLib } from '../../../../../../complect/my-lib/MyLib';

export const myFileTypes = ['font', 'other'] as const;
export type MyFileType = (typeof myFileTypes)[number];

const associates: Record<MyFileType, string[]> = {
  font: ['ttf', 'otf'],
  other: [],
};

const extensionsToTypeAssociates: Record<string, MyFileType> = {};

MyLib.entries(associates).forEach(([type, extensions]) => {
  extensions.forEach(key => (extensionsToTypeAssociates[key] = type));
});

export const associateTheFileType = (file: File): MyFileType => {
  return extensionsToTypeAssociates[file.name.replace(/.*?\.([^.]+$)/, '$1')] ?? 'other';
};
