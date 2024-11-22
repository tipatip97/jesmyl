import { mylib } from 'front/utils';
import { EditableCom } from '../../com/EditableCom';

interface Props {
  ccoln: 'texts' | 'chords';
  ccom: EditableCom;
  coli: number;
}

export default function TextsChordsRedactorAnchorTitles({ ccoln, ccom, coli }: Props) {
  const istcoln = ccoln === 'texts';

  const ords = ccom.orders?.filter(ord => (istcoln ? ord.texti : ord.chordsi) === coli) || [];

  return (
    <div>
      {coli + 1 + '. '}
      {
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
                        (o.me.isAnchor || o.me.isAnchorInherit || o.me.isAnchorInheritPlus ? '&#9875;' : '') +
                        `${o.me.header()}${o.me.style?.isInherit ? ` ${o.me.style.key}` : ''}`,
                    ),
                    o => o,
                  )
                  .join(', ')
              : 'Нет упоминаний этого блока',
          }}
        />
      }
    </div>
  );
}
