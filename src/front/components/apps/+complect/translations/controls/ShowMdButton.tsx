import { FunctionComponent, memo } from 'react';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconTvSmartSolidRounded, IconTvSmartStrokeRounded } from '../../../../../complect/the-icon/icons/tv-smart';
import { useIsCanShowTextTranslation } from '../atoms';

interface Props {
  Parent?: FunctionComponent<any>;
}

export const ScreenTranslationControlPanelShowMdButton = memo(function ShowMdButton({ Parent }: Props) {
  const [isCanShowTextTranslation, setIsCanShowTextTranslation] = useIsCanShowTextTranslation();

  const onClick = () => {
    setIsCanShowTextTranslation(!isCanShowTextTranslation);
  };

  if (Parent)
    return (
      <Parent
        onClick={onClick}
        className="pointer"
      >
        <IconButton Icon={isCanShowTextTranslation ? IconTvSmartSolidRounded : IconTvSmartStrokeRounded} />
      </Parent>
    );

  return (
    <IconButton
      Icon={isCanShowTextTranslation ? IconTvSmartSolidRounded : IconTvSmartStrokeRounded}
      onClick={onClick}
    />
  );
});
