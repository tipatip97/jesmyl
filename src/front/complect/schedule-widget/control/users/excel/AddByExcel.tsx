import { useEffect, useState } from 'react';
import useFullContent from '../../../../fullscreen-content/useFullContent';
import { excel2jsonParserBox } from '../../../../parseExcel2Json';
import { StrongComponentProps } from '../../../../strong-control/Strong.model';
import ContentOnLoad from '../../../../the-icon/ContentOnLoad';
import IconButton from '../../../../the-icon/IconButton';
import { IconFileImportStrokeRounded } from '../../../../the-icon/icons/file-import';
import { ScheduleWidgetUserAddByExcelContent } from './AddByExcelContent';

export function ScheduleWidgetUserAddByExcel({ scope }: StrongComponentProps) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await excel2jsonParserBox();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError('' + error);
      }
    })();
  }, []);

  const [modalNode, screen] = useFullContent(close => {
    return (
      <ContentOnLoad isLoading={isLoading}>
        {error ? (
          <div className="color--ko">
            <h3>Ошибка!</h3>
            <p>{error}</p>
          </div>
        ) : (
          <ScheduleWidgetUserAddByExcelContent
            scope={scope}
            close={close}
          />
        )}
      </ContentOnLoad>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconFileImportStrokeRounded}
        onClick={() => screen()}
      />
    </>
  );
}
