import { mylib } from 'front/utils';
import { OrderRepeats } from 'shared/api';
import { makeRegExp } from 'shared/utils';
import { useConfirm } from '../../../../../../../../complect/modal/confirm/useConfirm';
import useModal from '../../../../../../../../complect/modal/useModal';
import IconButton from '../../../../../../../../complect/the-icon/IconButton';
import { IconDelete01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/delete-01';
import { IconRefreshStrokeRounded } from '../../../../../../../../complect/the-icon/icons/refresh';
import { IconUnavailableStrokeRounded } from '../../../../../../../../complect/the-icon/icons/unavailable';
import { Order } from '../../../../../col/com/order/Order';
import { EditableOrder } from '../../complect/orders/EditableOrder';

interface Props {
  isChordBlock: boolean;
  startOrd: EditableOrder;
  ord: EditableOrder;
  textLinei: number;
  wordi: number;
  reset: () => void;
  setField: (ord?: EditableOrder | null, repeateds?: OrderRepeats | nil, prevs?: OrderRepeats | nil) => void;
}

const startFlash = '/';
const finishFlash = '\\';
const flashDivider = '&nbsp;';
const coln = 'r';

export const ComRepeatsRemoveButton = ({ isChordBlock, startOrd, ord, textLinei, wordi, reset, setField }: Props) => {
  const [confirmNode, confirm] = useConfirm();

  const [modalNode, modalOpen] = useModal(({ header, body, footer }, closeModal) => {
    return (
      <>
        {header(<>Сброс границ</>)}
        {body(
          <>
            {ord.regions
              ?.filter(({ startLinei, startWordi }) => textLinei === startLinei && wordi === startWordi)
              .map((flash, flashi) => {
                const { startLinei, startWordi, endLinei, endWordi, startOrd, endOrd, startKey, count } = flash;
                const fill = (
                  ord?: Order | null,
                  l?: number | nil,
                  w?: number | nil,
                  isBeg?: boolean,
                  fl?: number | und,
                  fw?: number | und,
                ) => {
                  const lines = (ord?.text || '').split(makeRegExp('/\\n+/'));
                  return (isBeg ? lines.slice(l || 0, fl == null ? fl : fl + 1) : lines.slice(0, (l || 0) + 1))
                    .map(line =>
                      (isBeg
                        ? (line || '').split(makeRegExp('/ +/')).slice(w || 0, fw == null ? fw : fw + 1)
                        : (line || '').split(makeRegExp('/ +/')).slice(0, (w || 0) + 1)
                      ).join(' '),
                    )
                    .join('\n');
                };

                return (
                  <pre
                    key={flashi}
                    onClick={() => {
                      const { startOrd, endOrd, startKey, endKey } = flash;
                      const srepeats = mylib.clone(startOrd?.repeats);

                      if (srepeats && typeof srepeats !== 'number') {
                        delete srepeats[startKey];
                        setField(startOrd, srepeats);
                      } else setField(startOrd, 0);

                      startOrd?.resetRegions();

                      if (startOrd !== endOrd && endOrd) {
                        const frepeats = {
                          ...(typeof endOrd.repeats === 'number' ? { '.': endOrd.repeats } : endOrd.repeats || {}),
                        };

                        delete frepeats[endKey || '.'];
                        setField(endOrd, frepeats);
                        endOrd?.resetRegions();
                      }

                      reset();
                      closeModal();
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        startFlash.repeat(count || 0) +
                        flashDivider +
                        ((startKey || '').startsWith('~')
                          ? fill(
                              startOrd,
                              startLinei,
                              startWordi,
                              true,
                              startLinei ?? undefined,
                              startWordi ?? undefined,
                            )
                          : startOrd === endOrd
                            ? fill(startOrd, startLinei, startWordi, true, endLinei ?? undefined, endWordi ?? undefined)
                            : `${fill(startOrd, startLinei, startWordi, true)}\n...\n${fill(
                                endOrd,
                                startLinei,
                                startWordi,
                                false,
                              )}`) +
                        flashDivider +
                        finishFlash.repeat(count || 0),
                    }}
                  />
                );
              })}
          </>,
        )}
        {footer(
          <div className="flex flex-big-gap">
            <IconButton
              Icon={IconUnavailableStrokeRounded}
              postfix="Отмена"
              onClick={closeModal}
            />
            <IconButton
              Icon={IconRefreshStrokeRounded}
              postfix="Сброс"
              onClick={() => {
                closeModal();
                reset();
              }}
            />
          </div>,
        )}
      </>
    );
  });

  return (
    <>
      {confirmNode}
      {modalNode}
      <div
        className="button remove"
        onClick={async event => {
          event.stopPropagation();

          if (isChordBlock) {
            if (await confirm(`Сбросить повторения блока "${startOrd.me.header() || ''}"?`, 'Сброс')) {
              startOrd.setField(coln, 0);
              reset();
            }
            return;
          }

          modalOpen();
        }}
      >
        <IconDelete01StrokeRounded />
      </div>
    </>
  );
};
