import { ReactNode, memo, useEffect } from 'react';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import IconButton from '../../../../complect/the-icon/IconButton';
import { IconBook02StrokeRounded } from '../../../../complect/the-icon/icons/book-02';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import BibleTranslatesContextProvider from '../../bible/translates/TranslatesContext';
import BibleTranslationControlled from '../../bible/translations/BibleTranslationControlled';
import { Com } from '../../cm/col/com/Com';
import CmTranslationControlled from '../../cm/translation/complect/controlled/CmTranslationControlled';
import { useCurrentTranslationTextAppValue, useSwitchCurrentTranslationTextApp } from './hooks/current-app';

interface Props {
  useNav: () => ReturnType<typeof useNavConfigurer>;
  comList?: Com[];
  headTitle?: ReactNode;
}

export const TranslationPage = memo(function TranslationPage({ useNav, comList, headTitle }: Props) {
  const app = useCurrentTranslationTextAppValue();
  const switchCurrApp = useSwitchCurrentTranslationTextApp();
  const head = (
    <IconButton
      Icon={app === 'cm' ? IconBookOpen02StrokeRounded : IconBook02StrokeRounded}
      className="margin-gap-r"
      onClick={() => switchCurrApp()}
    />
  );

  useEffect(() => {
    return hookEffectLine()
      .addEventListener(window, 'keypress', event => {
        if (!event.ctrlKey || !event.shiftKey || event.code !== 'KeyQ') return;
        event.preventDefault();
        switchCurrApp();
      })
      .effect();
  }, [switchCurrApp]);

  return app === 'cm' ? (
    <CmTranslationControlled
      head={head}
      comList={comList}
      useNav={useNav}
      headTitle={headTitle}
    />
  ) : (
    <BibleTranslatesContextProvider>
      <BibleTranslationControlled
        head={head}
        useNav={useNav}
        headTitle={headTitle}
      />
    </BibleTranslatesContextProvider>
  );
});
