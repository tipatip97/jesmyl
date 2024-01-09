import EvaButton from '../../../../../../../../../complect/eva-icon/EvaButton';
import EvaCheckbox from '../../../../../../../../../complect/eva-icon/EvaCheckbox';
import useExer from '../../../../../../../../../complect/exer/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import { cmExer } from '../../../../../../Cm.store';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsChordBind = ({
  props: { ccom, ord, ordi },
  closePopup,
}: {
  props: OrdersRedactorOrderToolsProps;
  closePopup: () => void;
}) => {
  const { exec } = useExer(cmExer);

  const [modalNode, openModal] = useModal(({ header, body }, close) => {
    return (
      <>
        {header(<>Аккорды</>)}
        {body(
          <>
            <pre style={{ whiteSpace: 'normal' }}>
              <b>Устанавливаем блок Аккордов для</b>
              <br />
              <br />
              <TheOrder
                orderUnit={ord}
                orderUniti={ordi}
                com={ccom}
                chordVisibleVariant={ChordVisibleVariant.Maximal}
              />
            </pre>
            {ccom.chords?.map((chordsBlock, chordsBlocki) => {
              const targetOrd = ord.top.targetOrd;

              const chordIndex =
                targetOrd && (ord.chordsi == null || ord.chordsi === -1) ? targetOrd.chordsi : ord.chordsi;

              return (
                <EvaCheckbox
                  key={chordsBlocki}
                  checked={chordsBlocki === chordIndex}
                  disabled={chordsBlocki === chordIndex}
                  className="margin-gap-t"
                  onChange={() => {
                    const isDefChord = targetOrd && chordsBlocki === targetOrd.chordsi;

                    ord.setField(
                      'c',
                      isDefChord ? null : chordsBlocki,
                      {
                        i: chordsBlocki - -1,
                        def: -1,
                        ist: 0,
                        isa: ord.isAnchor ? 1 : 0,
                      },
                      exec,
                    );
                    close();
                    exec();
                    closePopup();
                  }}
                  postfix={
                    <pre>
                      <b>{chordsBlocki + 1}</b>
                      <br />
                      {chordsBlock}
                    </pre>
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
      <EvaButton
        name="options-2-outline"
        postfix="Аккорды"
        onClick={openModal}
      />
    </>
  );
};
