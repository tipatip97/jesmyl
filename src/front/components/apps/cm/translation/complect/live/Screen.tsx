import { useEffect, useState } from 'react';
import { useCcom } from '../../../col/com/useCcom';
import { CmTranslationScreenConfig } from '../controlled/model';
import { CmLiveTranslationList } from './List';
import { CmLiveTranslationSlide } from './Slide';

interface Props {
  texti: number;
  comw: number;
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

  if (com === undefined) return;

  const texts = com.getOrderedTexts(true, props.config.pushKind);

  return window.innerWidth > window.innerHeight ? (
    <CmLiveTranslationSlide
      subUpdates={subUpdates}
      config={props.config}
      texti={props.texti}
      texts={texts}
    />
  ) : (
    <CmLiveTranslationList
      com={com}
      texti={props.texti}
      config={props.config}
    />
  );
};
