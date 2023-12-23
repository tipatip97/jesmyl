import styled, { css } from 'styled-components';
import { makeWid } from '../../../../complect/useWid';
import FontSizeContain from '../base/font-size-contain/FontSizeContain';
import { TranslationScreenProps } from './Translations.model';
import { useTranslation } from './useTranslation';

export default function TranslationScreen(props: TranslationScreenProps) {
  const { currText, position } = useTranslation();

  return (
    <Screen
      style={{
        width: '100%',
        height: '100%',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'montserrat, main, calibri, georgia, times, serif, verdana, arial',
        backgroundColor: 'black',
      }}
    >
      <FontSizeContain
        position={position}
        updater={update => props.updater && props.updater(update)}
      >
        <div
          style={{ whiteSpace: 'pre', textAlign: 'center', padding: '10px' }}
          dangerouslySetInnerHTML={{ __html: currText || '' }}
        />
      </FontSizeContain>
    </Screen>
  );
}

const transitionName = makeWid();

const Screen = styled.div`
  view-transition-name: ${transitionName};
`;

export const globalTranslationScreenStyle = css`
  ::view-transition-old(${transitionName}),
  ::view-transition-new(${transitionName}) {
    animation-duration: 0.4s;
  }
`;
