import { ReactNode } from 'react';
import { bottomPopupContentPreparer } from '../../../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import useExer from '../../../../../../../../complect/exer/useExer';
import modalService from '../../../../../../../../complect/modal/Modal.service';
import mylib from '../../../../../../../../complect/my-lib/MyLib';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import { cmExer } from '../../../../../Cm.store';
import { blockStyles } from '../../../../../col/com/block-styles/BlockStyles';
import TheOrder from '../../../../../col/com/order/TheOrder';
import { EditableCom } from '../../EditableCom';
import { EditableOrder } from './EditableOrder';

interface Props {
  ccom: EditableCom;
  ord: EditableOrder;
  ordi: number;
  blockHeader: ReactNode;
}

export default function OrdersRedactorOrderTools({ ccom, ord, ordi, blockHeader }: Props) {
  const { exec } = useExer(cmExer);
  const blockHeaderHtml = (textPre = '', textPost = '') =>
    `${textPre && `${textPre} `}${ord.isEmptyHeader ? <s>{blockHeader}</s> : blockHeader}${textPost && ` ${textPost}`}`;

  return bottomPopupContentPreparer({
    items: [
      {
        title: 'Тип блока',
        icon: 'cube-outline',
        onClick: () => {
          modalService.open({
            title: 'Тип блока',
            description: (
              <pre>
                <b>Устанавливаем тип для блока:</b>
                <br />
                <br />
                <TheOrder
                  orderUnit={ord}
                  orderUniti={ordi}
                  chordVisibleVariant={ChordVisibleVariant.Maximal}
                  com={ccom}
                />
              </pre>
            ),
            inputs: blockStyles?.styles.map((styleBlock) => {
              if ((ordi === 0 || ord.top.isTarget) && styleBlock.isInherit) return null;

              const newBlockn = styleBlock.title[ccom.langi || 0];
              return {
                type: 'button',
                title: styleBlock.key,
                value: newBlockn,
                disabled: () => styleBlock.key === ord.type,
                onClick: () => {
                  exec(ord.setField('s', styleBlock.key, { newBlockn }, exec));
                },
              } as never;
            }),
          });
        },
      },
      {
        title: 'Аккорды',
        icon: 'options-2-outline',
        onClick: () => {
          modalService.open({
            title: 'Прикреплённые аккорды',
            description: (
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
            ),
            inputs: ccom.chords?.map((chordsBlock, chordsBlocki) => {
              const targetOrd = ord.top.targetOrd;

              const chordIndex =
                targetOrd && (ord.chordsi == null || ord.chordsi === -1) ? targetOrd.chordsi : ord.chordsi;

              return {
                type: 'button',
                title: (
                  <pre>
                    <b>{chordsBlocki + 1}</b>
                    <br />
                    {chordsBlock}
                  </pre>
                ),
                value: chordsBlocki === chordIndex ? 'этот является текущим' : 'выбрать этот блок',
                disabled: chordsBlocki === chordIndex,
                onClick: () => {
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
                  // if (isDefChord) ord.delChordsi();
                  exec();
                },
              };
            }),
          });
        },
      },
      {
        title: ord.isVisible ? 'Скрыть блок' : 'Показать блок',
        icon: `eye${ord.isVisible ? '-off' : ''}-outline`,
        onClick: () => {
          exec(
            ord.setField('v', ord.antiIsVisible, {
              b: blockHeader,
              def: 1,
            }),
          );
        },
      },
      ord.isAnchor || ord.top.isInherit
        ? null
        : {
            title: `Ссылка на ${ord.top.header?.()}`,
            icon: 'link-outline',
            onClick: () => exec(ccom.addOrderAnchor(ord)),
          },
      !ord.top.style?.isModulation
        ? null
        : {
            title: 'Значение модуляции',
            icon: 'flash-outline',
            onClick: () => {
              modalService.open({
                title: 'Установка значения модуляции',
                inputs: '.'
                  .repeat(11)
                  .split('')
                  .map((_, i) => i + 1)
                  .reverse()
                  .map((position) => {
                    return {
                      value: `На ${position} ${mylib.declension(
                        position,
                        'полутон',
                        'полутона',
                        'полутонов',
                      )} от предыдущего блока`,
                      type: 'button',
                      closable: true,
                      style: () => ({
                        fontWeight: ord.fieldValues.md === position ? 'bold' : undefined,
                      }),
                      onClick: () => {
                        ord.setFieldValue('md', position);
                        ccom.resetChordLabels();
                        exec();
                      },
                    };
                  }),
                buttons: ['Отмена'],
              });
            },
          },
      ord.isAnchor
        ? {
            title: `${ord.isOpened ? 'Скрывать' : 'Показывать'} в свёрнутом режиме`,
            icon: 'link-outline',
            onClick: () =>
              exec(
                ord.setField('o', ord.isOpened ? 0 : 1, {
                  def: 0,
                }),
              ),
          }
        : {
            title: 'Заменить текст',
            icon: 'text-outline',
            onClick: () => {
              modalService.open({
                title: blockHeaderHtml('Установи Текстовый блок для блока'),
                inputs: ccom.texts?.map((text, texti) => {
                  return !text
                    ? null
                    : {
                        title: (
                          <>
                            <b>{texti - -1}</b>
                            <pre>{text}</pre>
                          </>
                        ),
                        type: 'button',
                        value: `Установить ${texti - -1}-й`,
                        closable: true,
                        onClick: () => {
                          exec(
                            ord.setField('t', texti, {
                              def: ord.texti,
                              i: ordi - -1,
                              ist: 1,
                            }),
                          );
                        },
                      };
                }),
                buttons: [{ title: 'Отмена' }],
              });
            },
          },
      {
        title: `${ord.isEmptyHeader ? 'Вернуть' : 'Убрать'} название блока`,
        icon: 'message-square-outline',
        onClick: () =>
          exec(
            ord.setField('e', ord.isEmptyHeader ? 0 : 1, {
              def: 0,
            }),
          ),
      },
      {
        title: `Удалить ${ord.isAnchor ? 'ссылку на ' : ''} ${blockHeader}`,
        icon: 'trash-outline',
        onClick: async () => {
          if (
            !(await modalService.confirm(
              `Удалить ${blockHeader}?${
                (ord.positions || []).length
                  ? ' Данное действие повлечёт за собой уничтожение аппликатуры в данном блоке.'
                  : ''
              }`,
            ))
          )
            return true;
          exec(ccom.removeOrderBlock(ord));
        },
      },
    ],
  });
}
