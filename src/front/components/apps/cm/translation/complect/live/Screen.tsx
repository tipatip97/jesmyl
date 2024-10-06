import { useEffect, useState } from 'react';
import { useCcom } from '../../../col/com/useCcom';
import { CmTranslationScreenConfig } from '../controlled/model';
import { CmLiveTranslationList } from './List';
import { CmLiveTranslationSlide } from './Slide';

interface Props {
  texti?: number;
  comw?: number;
  text: string;
  nextText: string;
  config: CmTranslationScreenConfig;
}

export const CmLiveTranslationScreen = (props: Props) => {
  const com = useCcom(props.comw);
  const [subUpdates, setSubUpdates] = useState(0);

  useEffect(() => {
    let i = 0;

    const onResize = () => setSubUpdates(++i);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const texts = com?.getOrderedTexts(true, props.config.pushKind);
  const text = props.texti == null || texts == null ? props.text : texts[props.texti] || props.text;
  const nextText = props.texti == null || texts == null ? props.text : texts[props.texti + 1] || props.nextText;

  return window.innerWidth > window.innerHeight ? (
    <CmLiveTranslationSlide
      subUpdates={subUpdates}
      text={text}
      nextText={nextText}
      config={props.config}
    />
  ) : (
    <CmLiveTranslationList
      com={com}
      text={text}
      nextText={nextText}
      texti={props.texti}
      config={props.config}
    />
  );
};
