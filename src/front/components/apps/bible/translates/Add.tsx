import useModal from '../../../../complect/modal/useModal';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBookDownloadStrokeRounded } from '../../../../complect/the-icon/icons/book-download';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { IconDelete02StrokeRounded } from '../../../../complect/the-icon/icons/delete-02';
import { IconPencilEdit02StrokeRounded } from '../../../../complect/the-icon/icons/pencil-edit-02';
import { soki } from '../../../../soki';
import bibleStorage from '../bibleStorage';
import { bibleAllTranslates, bibleDefaultTranslates, translateDescriptions } from './complect';
import { useBibleMyTranslates } from './hooks';

export default function BibleModulesTranslationsRedactButton(): JSX.Element {
  const myTranslates = useBibleMyTranslates();

  const [modalNode, openModal] = useModal(({ body, header }) => {
    return (
      <>
        {header(<>Переводы Библии</>)}
        {body(
          <>
            <h3 className="margin-gap-v text-bold">Загруженные переводы</h3>
            {myTranslates.map(tName => {
              const isDefault = bibleDefaultTranslates.includes(tName as never);
              const title = `${translateDescriptions[tName]} (${tName.toUpperCase()})`;

              return (
                <IconButton
                  key={tName}
                  Icon={isDefault ? IconBookOpen02StrokeRounded : IconDelete02StrokeRounded}
                  className="margin-gap-l margin-gap-v"
                  iconClassName={isDefault ? undefined : 'color--ko'}
                  disabled={isDefault}
                  confirm={`Удалить безвозвратно модуль  "${title}"`}
                  prefix={title}
                  onClick={() => {
                    bibleStorage.set('myTranslates', prev => [...prev].filter(name => name !== tName));
                    bibleStorage.rem(tName);
                  }}
                />
              );
            })}
            <h3 className="margin-gap-v text-bold">Доступные к загрузке</h3>
            {bibleAllTranslates.map(tName => {
              if (myTranslates.includes(tName)) return null;
              const title = `${translateDescriptions[tName]} (${tName.toUpperCase()})`;

              return (
                <IconButton
                  key={tName}
                  Icon={IconBookDownloadStrokeRounded}
                  className="margin-gap-l margin-gap-v"
                  prefix={title}
                  onClick={() =>
                    soki.send({ download: tName }, 'bible').on(() => {
                      bibleStorage.set('myTranslates', prev => [...prev, tName]);
                    })
                  }
                />
              );
            })}
          </>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconPencilEdit02StrokeRounded}
        onClick={openModal}
      />
    </>
  );
}
