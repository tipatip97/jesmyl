import { useEffect, useReducer, useState } from 'react';
import mylib from '../../../../../../complect/my-lib/MyLib';
import IconButton from '../../../../../../complect/the-icon/IconButton';
import TheIcon from '../../../../../../complect/the-icon/TheIcon';
import { IconCancel01StrokeRounded } from '../../../../../../complect/the-icon/icons/cancel-01';
import { useMyFilesAssociates } from '../hooks/associates';
import { useRemoveMyFile } from '../hooks/remove-file';
import { MyFileType } from '../model';
import { filesStorage } from '../utils/storage';
import { TheIconName } from '../../../../../../complect/the-icon/model';

export type FileAssociations = Record<
  MyFileType,
  { title: string; icon: TheIconName; removeTitle: string; extensions: string[] }
>;

const forceUpdater = (it: number) => it + 1;

export const MyFilesTypeBox = ({ type }: { type: MyFileType }) => {
  const fileAssociations = useMyFilesAssociates();
  const [files, setFiles] = useState<File[]>([]);
  const [updates, forceUpdate] = useReducer(forceUpdater, 0);
  const removeFile = useRemoveMyFile(type);

  useEffect(() => {
    (async () => {
      const files = await filesStorage.get(type);
      if (files === undefined) return;
      setFiles(mylib.values(files));
      forceUpdate();
    })();
  }, [type, updates]);

  if (fileAssociations === undefined) return null;

  return (
    <>
      <div className="flex flex-gap margin-gap-t padding-gap bgcolor--2">
        <TheIcon name={fileAssociations[type].icon} />
        <span className="color--3">{fileAssociations[type].title} </span>
        {!fileAssociations[type].extensions.length || '(.' + fileAssociations[type].extensions.join(', .') + ')'}
      </div>
      <div className="margin-big-gap-l">
        {files.map(file => {
          return (
            <div
              key={file.name}
              className="flex flex-gap margin-gap-t"
            >
              {file.name}
              <IconButton
                Icon={IconCancel01StrokeRounded}
                confirm={`Удалить ${fileAssociations[type].removeTitle} "${file.name}"`}
                onClick={() => removeFile(file)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
