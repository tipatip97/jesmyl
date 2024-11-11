import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import IconCheckbox from '../../../../../../../../../complect/the-icon/IconCheckbox';
import { IconOptionStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/option';
import { ChordVisibleVariant } from '../../../../../../Cm.model';
import TheOrder from '../../../../../../col/com/order/TheOrder';
import { OrdersRedactorOrderToolsProps } from '../OrdersRedactorOrderTools';

export const OrdersRedactorOrderToolsChordBind = ({ ccom, ord, ordi, onClose }: OrdersRedactorOrderToolsProps) => {
  const exec = useExerExec();

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
              const targetOrd = ord.me.targetOrd;

              const chordIndex =
                targetOrd && (ord.chordsi == null || ord.chordsi === -1) ? targetOrd.chordsi : ord.chordsi;

              return (
                <IconCheckbox
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
                    onClose(false);
                  }}
                  postfix={
                    <pre>
                      <b>{chordsBlocki + 1}</b>
                      <br />
                      {ccom.transBlock(chordsBlock)}
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
      <BottomPopupItem
        Icon={IconOptionStrokeRounded}
        title="Аккорды"
        onClick={openModal}
      />
    </>
  );
};
