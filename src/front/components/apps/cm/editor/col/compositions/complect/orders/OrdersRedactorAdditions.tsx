import { bottomPopupContentPreparer } from '../../../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import useExer from '../../../../../../../../complect/exer/useExer';
import modalService from '../../../../../../../../complect/modal/Modal.service';
import { cmExer } from '../../../../../Cm.store';
import { EditableCom } from '../../EditableCom';

export default function OrdersRedactorAdditions({ ccom }: { ccom: EditableCom }) {
  const { exec } = useExer(cmExer);

  return bottomPopupContentPreparer({
    items: [
      {
        title: 'Текстовый блок',
        icon: 'text',
        onClick: () => {
          modalService.open({
            title: 'Новый текст',
            description: <pre />,
            inputs: ccom.texts?.map((text, texti) => {
              return {
                type: 'button',
                title: (
                  <pre>
                    {texti + 1}.{text}
                  </pre>
                ),
                value: 'Добавить этот блок',
                onClick: () => exec(ccom.addOrder({ t: texti, s: 'one' })),
              };
            }),
          });
        },
      },
      {
        title: 'Аккордный блок',
        icon: 'options-2',
        onClick: () => {
          modalService.open({
            title: 'Аккордный блок',
            description: 'Выбери блок Аккордов для вставки',
            inputs: ccom.chords?.map((chords, chordsi) => {
              return {
                title: <pre>{chords}</pre>,
                type: 'button',
                value: `Добавить этот блок`,
                onClick: () => exec(ccom.addOrder({ c: chordsi, s: 'enter' })),
              };
            }),
          });
        },
      },
    ],
  });
}
