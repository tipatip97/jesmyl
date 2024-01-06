import { useEffect, useReducer, useState } from 'react';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import EvaIcon, { EvaIconName } from '../../../../../../complect/eva-icon/EvaIcon';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { useRemoveMyFile } from '../hooks/on-add-file';
import { MyFileType } from '../utils/associate-file';
import { filesStorage } from '../utils/storage';

const titles: Record<MyFileType, { title: string; icon: EvaIconName; removeTitle: string }> = {
  font: {
    title: 'Шрифты',
    removeTitle: 'файл шрифтов',
    icon: 'text',
  },
  other: {
    title: 'Другие',
    removeTitle: 'файл',
    icon: 'more-horizontal',
  },
};

const forceUpdater = (it: number) => it + 1;

export const MyFilesTypeBox = ({ type }: { type: MyFileType }) => {
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

  return (
    <>
      <div className="flex margin-gap-t padding-gap bgcolor--2">
        <EvaIcon
          name={titles[type].icon}
          className="margin-gap-r"
        />
        {titles[type].title}
      </div>
      <div className="margin-big-gap-l">
        {files.map(file => {
          return (
            <div
              key={file.name}
              className="flex flex-gap margin-gap-t"
            >
              {file.name}
              <EvaButton
                name="close"
                confirm={`Удалить ${titles[type].removeTitle} "${file.name}"`}
                onClick={() => removeFile(file)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
