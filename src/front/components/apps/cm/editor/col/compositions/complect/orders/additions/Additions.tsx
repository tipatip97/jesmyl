import { bottomPopupContentPreparer } from '../../../../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import { BottomPopupContenter } from '../../../../../../../../../complect/absolute-popup/bottom-popup/model';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import { IconOptionStrokeRounded } from '@icons/option';
import { IconTextStrokeRounded } from '@icons/text';
import { EditableCom } from '../../../EditableCom';

export const OrdersRedactorAdditions: BottomPopupContenter<EditableCom | und> = (isOpen, _close, _prepare, ccom) => {
  const exec = useExerExec();
  const [addTextModalNode, addText] = useModal(({ header, body }, close) => {
    return (
      <>
        {header(<>Новый текст</>)}
        {body(
          <>
            {ccom?.texts?.map((text, texti) => {
              return (
                <div
                  key={texti}
                  className="pointer"
                  onClick={() => {
                    close();
                    exec(ccom.addOrder({ t: texti, s: 'one' }));
                  }}
                >
                  <pre>
                    {texti + 1}.{text}
                  </pre>
                </div>
              );
            })}
          </>,
        )}
      </>
    );
  });

  const [addChordsModalNode, addChords] = useModal(({ header, body }, close) => {
    return (
      <>
        {header(<>Аккордный блок</>)}
        {body(
          <>
            {ccom?.chords?.map((chords, chordsi) => {
              return (
                <div
                  key={chordsi}
                  className="pointer"
                  onClick={() => {
                    close();
                    exec(ccom.addOrder({ c: chordsi, s: 'enter' }));
                  }}
                >
                  <pre>{chords}</pre>
                </div>
              );
            })}
          </>,
        )}
      </>
    );
  });

  return [
    <>
      {addTextModalNode}
      {addChordsModalNode}
    </>,
    isOpen && (
      <>
        {bottomPopupContentPreparer({
          items: [
            {
              title: 'Текстовый блок',
              Icon: IconTextStrokeRounded,
              onClick: addText,
            },
            {
              title: 'Аккордный блок',
              Icon: IconOptionStrokeRounded,
              onClick: addChords,
            },
          ],
        })}
      </>
    ),
  ];
};
