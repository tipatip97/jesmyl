import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { IconFileNotFoundStrokeRounded } from '../../../../../complect/the-icon/icons/file-not-found';

export const ComNotFoundPage = () => {
  return (
    <PhaseContainerConfigurer
      className="com-container"
      contentClass="color--ko flex full-size center"
      headTitle="К списку песен"
      content={
        <span className="flex flex-gap">
          <IconFileNotFoundStrokeRounded />
          Песня не найдена
        </span>
      }
    />
  );
};
