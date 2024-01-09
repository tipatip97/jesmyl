import { bottomPopupContentPreparer } from '../../../../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import { BottomPopupContenter } from '../../../../../../../../../complect/absolute-popup/bottom-popup/model';
import useExer from '../../../../../../../../../complect/exer/useExer';
import useModal from '../../../../../../../../../complect/modal/useModal';
import { cmExer } from '../../../../../../Cm.store';
import { EditableCom } from '../../../EditableCom';

export const OrdersRedactorAdditions: BottomPopupContenter<EditableCom | und> = (isOpen, _close, _prepare, ccom) => {
  const { exec } = useExer(cmExer);
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

  return (
    isOpen && [
      <>
        {addTextModalNode}
        {addChordsModalNode}
      </>,
      <>
        {bottomPopupContentPreparer({
          items: [
            {
              title: 'Текстовый блок',
              icon: 'text',
              onClick: addText,
            },
            {
              title: 'Аккордный блок',
              icon: 'options-2',
              onClick: addChords,
            },
          ],
        })}
      </>,
    ]
  );
};
