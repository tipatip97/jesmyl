import { useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';
import { useActualRef } from '../../../../../../complect/useActualRef';
import FontSizeContain from '../../../base/font-size-contain/FontSizeContain';
import { TranslationScreenProps } from './Translations.model';
import { useControlledTranslation } from './hooks';
import { useCmTranslationConfigs, useSetCurrentConfigi } from './hooks/configs';
import { TranslationYPosition, TrnslationScreenConfig } from './model';

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

  return (
    <Screen
      $backColor={props.backColor}
      $config={currentConfig}
      $isCanShowLimits={props.canShowLimits}
      $isShowText={stateRef.current.isVisible}
      positionY={stateRef.current.positionY}
      html={stateRef.current.permanentText}
      subUpdate={
        forceUpdates +
        (props.proportion === undefined ? 1000 : props.proportion) +
        (currentConfig === undefined
          ? 10000
          : +currentConfig.paddingFix + currentConfig.paddingVPx + currentConfig.paddingHPx)
      }
    />
  );
}

const Screen = styled(FontSizeContain)<{
  $backColor?: string;
  $config?: TrnslationScreenConfig;
  $isCanShowLimits?: boolean;
  $isShowText: boolean;
  positionY: TranslationYPosition;
}>`
  position: relative;

  font-family: montserrat, main, calibri, georgia, times, serif, verdana, arial;
  background-color: ${props => props.$backColor || 'black'};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.$config
      ? css`
          color: ${props.$isShowText ? props.$config.color : 'transparent'};
          font-weight: ${props.$config.fontWeight};
          text-align: ${props.$config.textAlign};
        `
      : css`
          color: white;
          font-weight: bold;
          text-align: center;
        `}

  > .fsc-children {
    white-space: pre;
  }

  ${props =>
    props.$config &&
    css`
      ${props.$config.paddingShowLimits &&
      props.$isCanShowLimits &&
      css`
        &:before,
        &:after {
          content: '';
          position: absolute;
          border: 2px dotted white;
          pointer-events: none;
        }

        &:before {
          left: -250%;
          width: 500%;
          height: calc(100% - ${props.$config.paddingVPx * 3}px);
        }

        &:after {
          top: -250%;
          height: 500%;
          width: calc(100% - ${(props.$config.paddingFix ? props.$config.paddingVPx : props.$config.paddingHPx) * 3}px);
        }
      `}

      .fsc-shadow-child {
        padding: ${props.$config.paddingFix
          ? `${props.$config.paddingVPx}px`
          : `${props.$config.paddingVPx}px ${props.$config.paddingHPx}px`};
      }
    `}

  ${props =>
    props.positionY !== 'center' &&
    css`
      .fsc-child {
        transform-origin: center ${props.$config?.paddingVPx}px;
      }
    `}
`;
