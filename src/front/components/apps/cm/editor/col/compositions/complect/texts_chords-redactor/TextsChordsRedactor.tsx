import { makeRegExp } from 'shared/utils';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import { MyLib, mylib } from 'front/utils';
import IconButton from '../../../../../../../../complect/the-icon/IconButton';
import { IconCancel01StrokeRounded } from '../../../../../../../../complect/the-icon/icons/cancel-01';
import { IconGridStrokeRounded } from '../../../../../../../../complect/the-icon/icons/grid';
import { IconPlusSignCircleStrokeRounded } from '../../../../../../../../complect/the-icon/icons/plus-sign-circle';
import EditContainerCorrectsInformer from '../../../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import { useEditableCcom } from '../../useEditableCcom';
import { CutTextRedactor } from './CutText';
import TextAreaRedactor from './TextAreaRedactor';

export default function TextsChordsRedactor({ ccoln }: { ccoln: 'texts' | 'chords' }) {
  const ccom = useEditableCcom();
  const exec = useExerExec();

  if (!ccom) return null;

  const istcoln = ccoln === 'texts';
  const colList = istcoln ? ccom.texts : ccom.transBlocks();

  return (
    <>
      {[colList?.length ? colList : ''].flat().map((col, coli) => {
        return (
          <EditContainerCorrectsInformer
            className="margin-big-gap-v"
            key={coli}
            corrects={ccom.corrects[`${ccoln}-block-${coli}`]}
          >
            <div>
              {!coli && <IconPlusSignCircleStrokeRounded onClick={() => exec(ccom.insertBlocks(ccoln, -1, ''))} />}
              <div className="flex between">
                <div>
                  {coli + 1 + '. '}
                  {(ords => (
                    <span
                      style={{
                        color: ords.length ? 'grey' : 'red',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: ords.length
                          ? mylib
                              .unique(
                                ords.map(
                                  o =>
                                    (o.me.isAnchor || o.me.isAnchorInherit || o.me.isAnchorInheritPlus
                                      ? '&#9875;'
                                      : '') + `${o.me.header()}${o.me.style?.isInherit ? ` ${o.me.style.key}` : ''}`,
                                ),
                                o => o,
                              )
                              .join(', ')
                          : 'Нет упоминаний этого блока',
                      }}
                    />
                  ))(ccom.orders?.filter(ord => (istcoln ? ord.texti : ord.chordsi) === coli) || [])}
                </div>
                <span className="flex flex-gap">
                  {!istcoln && makeRegExp('/[A-H]b/').exec(col) && (
                    <IconButton
                      Icon={IconGridStrokeRounded}
                      onClick={() => exec(ccom.replaceBemoles(coli))}
                    />
                  )}
                  <IconButton
                    Icon={IconCancel01StrokeRounded}
                    onClick={() => exec(ccom.removeBlock(ccoln, coli))}
                  />
                </span>
              </div>
              <TextAreaRedactor
                ccoln={ccoln}
                com={ccom}
                col={col}
                onChange={value => exec(ccom.changeBlock(ccoln, coli, value))}
              />
              <IconPlusSignCircleStrokeRounded onClick={() => exec(ccom.insertBlocks(ccoln, coli, ''))} />
              {istcoln && (
                <CutTextRedactor
                  ccom={ccom}
                  coli={coli}
                  text={col}
                />
              )}
            </div>
          </EditContainerCorrectsInformer>
        );
      })}
    </>
  );
}
