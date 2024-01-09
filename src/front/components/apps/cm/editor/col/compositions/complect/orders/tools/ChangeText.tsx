import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import EvaCheckbox from '../../../../../../../../../complect/eva-icon/EvaCheckbox';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsChangeText = ({
  props: { ccom, ord, ordi, blockHeader },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
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
                <EvaCheckbox
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
                    closePopup();
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
      <EvaButton
        name="text-outline"
        postfix="Заменить текст"
        onClick={openModal}
      />
    </>
  );
};
