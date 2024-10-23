import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import IconCheckbox from '../../../../../../../../../complect/the-icon/IconCheckbox';
import { IconTextStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/text';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsChangeText = ({
  ccom,
  ord,
  ordi,
  blockHeader,
  onClose,
}: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();

  const blockHeaderHtml = (textPre = '', textPost = '') =>
    `${textPre && `${textPre} `}${ord.isEmptyHeader ? <s>{blockHeader}</s> : blockHeader}${textPost && ` ${textPost}`}`;

  const [modalNode, openModal] = useModal(({ header, body }, close) => {
    return (
      <>
        {header(<>{blockHeaderHtml('Установи Текстовый блок для блока')}</>)}
        {body(
          <>
            <TheOrder
              orderUnit={ord}
              orderUniti={ordi}
              chordVisibleVariant={ChordVisibleVariant.Maximal}
              com={ccom}
            />
            {ccom.texts?.map((text, texti) => {
              if (!text) return null;

              return (
                <IconCheckbox
                  key={texti}
                  className="margin-gap-t"
                  postfix={
                    <>
                      <b>{texti - -1}</b>
                      <pre>{text}</pre>
                    </>
                  }
                  onChange={() => {
                    exec(
                      ord.setField('t', texti, {
                        def: ord.texti,
                        i: ordi - -1,
                        ist: 1,
                      }),
                    );
                    close();
                    onClose(false);
                  }}
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
      <BottomPopupItem
        Icon={IconTextStrokeRounded}
        title="Заменить текст"
        onClick={openModal}
      />
    </>
  );
};
