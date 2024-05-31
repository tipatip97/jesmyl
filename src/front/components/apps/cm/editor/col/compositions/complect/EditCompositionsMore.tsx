import { BottomPopupContenter } from '../../../../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../../../../complect/fullscreen-content/useFullContent';
import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconPlusSignCircleStrokeRounded } from '@icons/plus-sign-circle';
import NewComposition from './NewComposition';

export const EditCompositionsMore: BottomPopupContenter = (isOpen, closePopup) => {
  const [fullContentNode, openFullContent] = useFullContent(close => (
    <NewComposition
      close={() => {
        close();
        closePopup();
      }}
    />
  ));

  return [
    <>{fullContentNode}</>,
    isOpen && (
      <IconButton
        Icon={IconPlusSignCircleStrokeRounded}
        postfix="Новая песня"
        onClick={() => {
          openFullContent();
          closePopup();
        }}
      />
    ),
  ];
};
