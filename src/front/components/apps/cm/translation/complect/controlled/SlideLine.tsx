import styled from 'styled-components';
import { useControlledTranslation } from './hooks';

interface Props {
  stateRef: { current: ReturnType<typeof useControlledTranslation> };
}

export const CmTranslationSlideLine = ({ stateRef }: Props) => {
  const state = stateRef.current;
  return (
    <>
      {state.texts && (
        <Line className="no-scrollbar">
          {state.texts.map((text, texti) => {
            return (
              <LineItem
                key={texti}
                id={`translation-window-line-${texti}`}
                onClick={() => state.setTexti(texti)}
              >
                <div>{texti + 1}</div>
                <CmSlideLineItemInnerStyle className={state.currTexti === texti ? 'active' : ''}>
                  <div dangerouslySetInnerHTML={{ __html: text }} />
                </CmSlideLineItemInnerStyle>
              </LineItem>
            );
          })}
        </Line>
      )}
    </>
  );
};

export const CmSlideLineItemInnerStyle = styled.div`
  display: flex;
  cursor: pointer;
  border: solid 1px transparent;
  background: black;
  padding: 5px;
  height: calc(100% - 1.5em);
  overflow: hidden;
  color: var(--color-far);
  font-size: 14px;
  user-select: none;
  text-align: center;
  white-space: pre;

  &.active {
    border-color: var(--color-far);
  }
`;

const LineItem = styled.div`
  margin: 0 7px;
  scroll-snap-align: center;
`;

const Line = styled.div`
  display: flex;
  margin: 1em 0;
  border-radius: var(--radius);
  background: black;
  padding: 1em 0;
  overflow: auto;
  scroll-snap-type: x mandatory;
  color: white;
  white-space: nowrap;
`;
