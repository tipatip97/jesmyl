import { FunctionComponent, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complectActions } from '../../../../../complect/Complect.store';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconTvSmartSolidRounded, IconTvSmartStrokeRounded } from '../../../../../complect/the-icon/icons/tv-smart';
import { RootState } from '../../../../../shared/store';

interface Props {
  Parent?: FunctionComponent<any>;
}

const isCanShowTextTranslationSelector: (state: RootState) => boolean = state =>
  state.complect.isCanShowTextTranslation;

export const ScreenTranslationControlPanelShowMdButton = memo(function ShowMdButton({ Parent }: Props) {
  const dispatch = useDispatch();
  const isCanShowTextTranslation = useSelector(isCanShowTextTranslationSelector);

  const onClick = () => {
    dispatch(complectActions.isCanShowTextTranslation(!isCanShowTextTranslation));
  };

  if (Parent)
    return (
      <Parent onClick={onClick}>
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
