import styled, { css } from 'styled-components';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import { styledHoverBind } from '../../../../../../../../complect/utils/styled-components';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import ComLine from '../../../../../col/com/line/ComLine';
import TheOrder from '../../../../../col/com/order/TheOrder';
import { useEditableCcom } from '../../useEditableCcom';

export default function ChordApplicationsRedactor() {
  const ccom = useEditableCcom();
  const exec = useExerExec();

  return (
    <Content className="chord-application-redactor">
      {ccom?.orders?.map((ord, ordi) => {
        if (!ord.isVisible) return null;
        const chords = ord.chords?.split('\n').map(line => line.split(' '));

        return (
          <TheOrder
            key={ordi}
            orderUnit={ord}
            chordVisibleVariant={ChordVisibleVariant.Maximal}
            com={ccom}
            orderUniti={ordi}
            asLineComponent={props => {
              const { com, textLine, textLinei } = props;
              const linePoss = ord.positions?.[textLinei] ?? [];
              const diffCount = (chords[textLinei]?.length || 0) - (linePoss?.length || 0);

              return (
                <div>
                  <div
                    className={`pre binder ${linePoss?.includes(-1) ? 'active' : ''}`}
                    onClick={() => exec(ord?.setChordPosition(textLinei, -1))}
                  />
                  <ComLine
                    key={textLinei}
                    {...props}
                    chordedOrd
                    orderUnit={ord}
                    com={com}
                    orderUniti={ordi}
                    isJoinLetters={false}
                    onClick={event => {
                      const clicked = event.nativeEvent
                        .composedPath()
                        .find(span => (span as HTMLSpanElement)?.classList?.contains('com-letter')) as HTMLSpanElement;

                      const [, letteri] =
                        Array.from(clicked.classList)
                          .find(className => className.startsWith('letteri_'))
                          ?.split('_') || [];

                      if (letteri != null) exec(ord?.setChordPosition(textLinei, +letteri));
                    }}
                  />
                  <div
                    className={'post binder' + (linePoss?.includes(-2) ? ' active' : '')}
                    onClick={() => {
                      exec(ord?.setChordPosition(textLinei, -2));
                    }}
                  />
                  <span
                    className={'margin-gap-h' + (diffCount < 0 ? ' pointer error-message' : '')}
                    onClick={() => {
                      exec(ord?.cutChordPositions(textLine, textLinei));
                    }}
                  >
                    {diffCount || ''}
                  </span>
                </div>
              );
            }}
          />
        );
      })}
    </Content>
  );
}

const Content = styled.div`
  max-width: 100vw;

  .composition-line {
    display: inline;
  }

  .binder {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    background-color: var(--color--2);
    width: 1em;
    height: 1em;

    &.active {
      background-color: var(--color--3);
    }

    &.pre {
      margin-right: 0.3em;
    }

    &.post {
      margin-left: 0.3em;
    }
  }

  .com-letter {
    cursor: pointer;

    ${styledHoverBind(css`
      background-color: var(--color--2);
    `)}

    &:before,
    &:after {
      font-size: 1em;
    }

    &.chorded:not(.pre) {
      > .fragment > * {
        display: inline-block;

        &.space-word {
          background-color: var(--color--ko);
        }

        &:first-letter {
          background-color: var(--color--ko);
        }
      }

      &:first-letter,
      &.spaced-word:after,
      &[attr-chord] > .fragment > *:first-letter {
        background-color: rgba(255, 209, 0, 0.3);
      }

      &[attr-chord].spaced-word > .fragment > *:first-letter {
        background-color: transparent;
      }
    }
  }
`;
