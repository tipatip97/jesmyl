import { BottomPopupContenter } from '../../../../../../../complect/absolute-popup/bottom-popup/model';
import EvaButton from '../../../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../../../complect/fullscreen-content/useFullContent';
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
      <EvaButton
        name="plus-circle-outline"
        postfix="Новая песня"
        onClick={() => {
          openFullContent();
          closePopup();
        }}
      />
    ),
  ];
};
