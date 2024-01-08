import { useEffect, useReducer } from 'react';
import { useActualRef } from '../../../../../../complect/useActualRef';
import { applyFontFamilyFromMyFiles } from '../../../../../index/parts/actions/files/utils/set-font-family-effect';
import FontSizeContain from '../../../base/font-size-contain/FontSizeContain';
import { TranslationScreenProps } from './Translations.model';
import { useControlledTranslation } from './hooks';
import { useCmTranslationConfigs, useSetCurrentConfigi } from './hooks/configs';

const forceUpdater = (it: number) => it + 1;

export default function TranslationScreen(props: TranslationScreenProps) {
  const [forceUpdates, forceUpdate] = useReducer(forceUpdater, 0);
  const { updateConfig, currentConfig, configs } = useCmTranslationConfigs(props.screeni);
  const stateRef = useActualRef(useControlledTranslation());
  const setCurrentConfigiRef = useActualRef(useSetCurrentConfigi());

  useEffect(() => {
    if (props.win == null) return;
    const win = props.win;
    let debounceTimeout: TimeOut;

    const updater = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        updateConfig({ proportion: win.innerWidth / win.innerHeight });
        forceUpdate();
      }, 300);
    };

    if (props.screeni !== undefined) {
      const screeni = props.screeni;
      win.onfocus = () => setCurrentConfigiRef.current(screeni);
    }

    win.addEventListener('resize', updater);
    return () => win.removeEventListener('resize', updater);
  }, [updateConfig, props.win, props.screeni, setCurrentConfigiRef]);

  useEffect(() => {
    const onKeyTranslations = async (event: KeyboardEvent) => {
      const state = stateRef.current;

      switch (event.code) {
        case 'F5':
          // just prevent default + stop propagation
          break;
        case 'Tab':
          setCurrentConfigiRef.current(
            event.shiftKey
              ? state.currentConfigi === 0
                ? configs.length - 1
                : state.currentConfigi - 1
              : state.currentConfigi === configs.length - 1
                ? 0
                : state.currentConfigi + 1,
          );
          break;
        case 'ArrowUp':
          if (!event.ctrlKey) return;
          state.prevCom();
          break;

        case 'ArrowDown':
          if (!event.ctrlKey) return;
          state.nextCom();
          break;

        case 'ArrowLeft':
          state.prevText();
          break;

        case 'ArrowRight':
          state.nextText();
          break;

        case 'Escape':
        case 'KeyV':
          state.switchVisible();
          break;

        case 'KeyF':
          props.win && props.win.focus();
          break;

        case 'KeyT':
          state.switchPosition();
          break;

        default:
          return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    props.win?.addEventListener('keydown', onKeyTranslations);
    window.onkeydown = onKeyTranslations;

    return () => {
      props.win?.removeEventListener('keydown', onKeyTranslations);
      window.onkeydown = null;
    };
  }, [props.screeni, stateRef, props.win, setCurrentConfigiRef, configs.length]);

  useEffect(() => {
    if (currentConfig?.fontFamily === undefined) return;
    applyFontFamilyFromMyFiles(currentConfig.fontFamily, props.win ?? window);
  }, [currentConfig?.fontFamily, props.win]);

  return (
    <FontSizeContain
      className="inline-flex center white-pre-children bgcolor-black"
      style={{
        fontFamily:
          (currentConfig?.fontFamily && `'${currentConfig.fontFamily}',`) +
          'montserrat,main,calibri,georgia,times,serif,verdana,arial',

        ...(currentConfig
          ? {
              color: stateRef.current.isVisible ? currentConfig.color : 'transparent',
              fontWeight: currentConfig.fontWeight,
              textAlign: currentConfig.textAlign,
            }
          : {
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }),
      }}
      shadowStyle={{
        padding:
          currentConfig &&
          `${
            currentConfig.paddingFix
              ? `${currentConfig.paddingVPx}px`
              : `${currentConfig.paddingVPx}px ${currentConfig.paddingHPx}px`
          }`,
        transformOrigin:
          currentConfig && stateRef.current.positionY !== 'center' ? `center ${currentConfig.paddingVPx}px` : undefined,
      }}
      html={stateRef.current.permanentText}
      subUpdate={
        stateRef.current.currentConfigi +
        forceUpdates +
        (props.proportion === undefined ? 1000 : props.proportion) +
        (currentConfig === undefined
          ? 10000
          : +currentConfig.paddingFix + currentConfig.paddingVPx + currentConfig.paddingHPx)
      }
    />
  );
}
