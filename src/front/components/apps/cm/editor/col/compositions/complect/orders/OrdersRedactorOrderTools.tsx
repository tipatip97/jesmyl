import EvaIcon from "../../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../../complect/exer/useExer";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../../../complect/my-lib/MyLib";
import { blockStyles } from "../../../../../col/com/block-styles/BlockStyles";
import { ChordVisibleVariant } from "../../../../../Cm.model";
import { cmExer } from "../../../../../Cm.store";
import TheOrder from "../../../../../col/com/order/TheOrder";
import { EditableCom } from "../../EditableCom";
import { EditableOrder } from "./EditableOrder";
import { ReactNode } from "react";

export default function OrdersRedactorOrderTools({
  ccom,
  ord,
  ordi,
  blockHeader,
}: {
  ccom: EditableCom;
  ord: EditableOrder;
  ordi: number;
  blockHeader: ReactNode;
}) {
  const { exec } = useExer(cmExer);
  const blockHeaderHtml = (textPre = "", textPost = "") =>
    `${textPre && `${textPre} `}${
      ord.isEmptyHeader ? <s>{blockHeader}</s> : blockHeader
    }${textPost && ` ${textPost}`}`;

  return (
    <>
      <div
        className="abs-item abs-full"
        onClick={() => {
          modalService.open({
            title: "Тип блока",
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
              if ((ordi === 0 || ord.top.isTarget) && styleBlock.isInherit)
                return null;

              const newBlockn = mylib.stringTemplater(styleBlock.title, {
                isModal: true,
                isEdit: true,
                translate: (...args: string[]) => args[ccom.langi || 0],
              });
              return {
                type: "button",
                title: styleBlock.key,
                value: newBlockn,
                disabled: () => styleBlock.key === ord.type,
                onClick: () => {
                  exec(ord.setField("s", styleBlock.key, { newBlockn }, exec));
                },
              } as never;
            }),
          });
        }}
      >
        <EvaIcon name="cube-outline" className="abs-icon" />
        <div className="title">Тип блока</div>
        <div className="abs-action" />
      </div>
      <div
        className="abs-item abs-full"
        onClick={() => {
          modalService.open({
            title: "Прикреплённые аккорды",
            description: (
              <pre style={{ whiteSpace: "normal" }}>
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
                targetOrd && (ord.chordsi == null || ord.chordsi === -1)
                  ? targetOrd.chordsi
                  : ord.chordsi;

              return {
                type: "button",
                title: (
                  <pre>
                    <b>{chordsBlocki + 1}</b>
                    <br />
                    {chordsBlock}
                  </pre>
                ),
                value:
                  chordsBlocki === chordIndex
                    ? "этот является текущим"
                    : "выбрать этот блок",
                disabled: chordsBlocki === chordIndex,
                onClick: () => {
                  const isDefChord =
                    targetOrd && chordsBlocki === targetOrd.chordsi;

                  ord.setField(
                    "c",
                    isDefChord ? null : chordsBlocki,
                    {
                      i: chordsBlocki - -1,
                      def: -1,
                      ist: 0,
                      isa: ord.isAnchor ? 1 : 0,
                    },
                    exec
                  );
                  // if (isDefChord) ord.delChordsi();
                  exec();
                },
              };
            }),
          });
        }}
      >
        <EvaIcon name="options-2-outline" className="abs-icon" />
        <div className="title">Аккорды</div>
        <div className="abs-action" />
      </div>

      <div
        className="abs-item abs-full"
        onClick={() => {
          exec(
            ord.setField("v", ord.antiIsVisible, {
              b: blockHeader,
              def: 1,
            })
          );
        }}
      >
        <EvaIcon
          name={`eye${ord.isVisible ? "-off" : ""}-outline`}
          className="abs-icon"
        />
        <div className="title">
          {ord.isVisible ? "Скрыть блок" : "Показать блок"}
        </div>
        <div className="abs-action" />
      </div>
      {ord.isAnchor || ord.top.isInherit ? null : (
        <div
          className="abs-item abs-full"
          onClick={() => exec(ccom.addOrderAnchor(ord))}
        >
          <EvaIcon name="link-outline" className="abs-icon" />
          <div className="title">Ссылка на {ord.top.header?.()}</div>
          <div className="abs-action" />
        </div>
      )}

      {!ord.top.style?.isModulation ? null : (
        <div
          className="abs-item abs-full"
          onClick={() => {
            modalService.open({
              title: "Установка значения модуляции",
              inputs: "."
                .repeat(11)
                .split("")
                .map((_, i) => i + 1)
                .reverse()
                .map((position) => {
                  return {
                    value: `На ${position} ${mylib.declension(
                      position,
                      "полутон",
                      "полутона",
                      "полутонов"
                    )} от предыдущего блока`,
                    type: "button",
                    closable: true,
                    style: () => ({
                      fontWeight:
                        ord.fieldValues.md === position ? "bold" : undefined,
                    }),
                    onClick: () => {
                      ord.setFieldValue("md", position);
                      ccom.resetChordLabels();
                      exec();
                    },
                  };
                }),
              buttons: ["Отмена"],
            });
          }}
        >
          <EvaIcon name="flash-outline" className="abs-icon" />
          <div className="title">Значение модуляции</div>
          <div className="abs-action" />
        </div>
      )}

      {ord.isAnchor ? (
        <>
          <div
            className="abs-item abs-full"
            onClick={() =>
              exec(
                ord.setField("o", ord.isOpened ? 0 : 1, {
                  def: 0,
                })
              )
            }
          >
            <EvaIcon name="link-outline" className="abs-icon" />
            <div className="title">
              {ord.isOpened ? "Скрывать" : "Показывать"} в свёрнутом режиме
            </div>
            <div className="abs-action" />
          </div>
        </>
      ) : (
        <>
          {ord.texti == null ? null : (
            <div
              className="abs-item abs-full"
              onClick={() => {
                modalService.open({
                  title: blockHeaderHtml("Установи Текстовый блок для блока"),
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
                          type: "button",
                          value: `Установить ${texti - -1}-й`,
                          closable: true,
                          onClick: () => {
                            exec(
                              ord.setField("t", texti, {
                                def: ord.texti,
                                i: ordi - -1,
                                ist: 1,
                              })
                            );
                          },
                        };
                  }),
                  buttons: [{ title: "Отмена" }],
                });
              }}
            >
              <EvaIcon name="text-outline" className="abs-icon" />
              <div className="title">Заменить текст</div>
              <div className="abs-action" />
            </div>
          )}

          <div
            className="abs-item abs-full"
            onClick={() =>
              exec(
                ord.setField("e", ord.isEmptyHeader ? 0 : 1, {
                  def: 0,
                })
              )
            }
          >
            <EvaIcon name="message-square-outline" className="abs-icon" />
            <div className="title">
              {ord.isEmptyHeader ? "Вернуть" : "Убрать"} название блока
            </div>
            <div className="abs-action" />
          </div>
        </>
      )}
      <div
        className="abs-item abs-full"
        onClick={async () => {
          if (
            !(await modalService.confirm(
              `Удалить ${blockHeader}?${
                (ord.positions || []).length
                  ? " Данное действие повлечёт за собой уничтожение аппликатуры в данном блоке."
                  : ""
              }`
            ))
          )
            return true;
          exec(ccom.removeOrderBlock(ord));
        }}
      >
        <EvaIcon name="trash-outline" className="abs-icon" />
        <div className="title">
          Удалить {ord.isAnchor ? "ссылку на " : ""}
          {blockHeader}
        </div>
        <div className="abs-action" />
      </div>
    </>
  );
}
