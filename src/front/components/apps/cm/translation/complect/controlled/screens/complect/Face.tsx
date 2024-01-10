import styled from 'styled-components';
import EvaButton from '../../../../../../../../complect/eva-icon/EvaButton';
import { useActualRef } from '../../../../../../../../complect/useActualRef';
import { useControlledTranslation } from '../../hooks';
import { useCmTranslationConfigs, useSetCurrentConfigi } from '../../hooks/configs';
import { TranslationScreenConfig } from '../../model';

interface Props {
  configi: number;
  config: TranslationScreenConfig;
}

export const CmTranslateScreenConfigurationsFace = ({ configi, config }: Props) => {
  const configsState = useCmTranslationConfigs();
  const { currentConfigi, configs, updateConfig, windows } = configsState;
  const stateRef = useActualRef(useControlledTranslation());
  const setCurrentConfigi = useSetCurrentConfigi();

  return (
    <Face
      className={
        'inline-flex flex-gap between pointer margin-gap-l ' +
        (windows[configi] === null ? ' bgcolor--ko ' : currentConfigi === configi ? ' bgcolor--7 ' : ' bgcolor--3 ')
      }
      onClick={() => {
        setCurrentConfigi(configi);
        if (windows.length && windows[configi] === null) {
          stateRef.current.watchTranslation(false, configi);
          return;
        }
        windows[configi]?.focus();
      }}
    >
      <span>{config.title}</span>
      <EvaButton
        name="close"
        confirm="Закрыть окно?"
        onClick={event => {
          event.stopPropagation();
          updateConfig(null, configi);

          if (currentConfigi === configs.length - 1) {
            setCurrentConfigi(configs.length - 2);
            return;
          }

          if (currentConfigi > configi) {
            setCurrentConfigi(currentConfigi - 1);
          }
        }}
      />
    </Face>
  );
};

const Face = styled.div`
  padding: 3px 10px;
  border-radius: 5px;
  color: var(--color--1);
  min-width: 70px;
`;
