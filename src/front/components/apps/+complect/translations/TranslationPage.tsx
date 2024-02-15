import EvaButton from '../../../../complect/eva-icon/EvaButton';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import BibleTranslationControlled from '../../bible/translations/BibleTranslationControlled';
import { Com } from '../../cm/col/com/Com';
import CmTranslationControlled from '../../cm/translation/complect/controlled/CmTranslationControlled';
import { useCurrentTranslationTextApp, useSwitchCurrentTranslationTextApp } from './hooks/current-app';

interface Props {
  useNav: () => ReturnType<typeof useNavConfigurer>;
  comList?: Com[];
}

export default function TranslationPage({ useNav, comList }: Props) {
  const app = useCurrentTranslationTextApp();
  const switchCurrApp = useSwitchCurrentTranslationTextApp();
  const head = (
    <EvaButton
      name={app === 'cm' ? 'book-open-outline' : 'book-outline'}
      className="margin-gap-r"
      onClick={() => switchCurrApp()}
    />
  );

  return app === 'cm' ? (
    <CmTranslationControlled
      head={head}
      comList={comList}
      useNav={useNav}
    />
  ) : (
    <BibleTranslationControlled
      head={head}
      useNav={useNav}
    />
  );
}
