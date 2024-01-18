import styled from 'styled-components';
import EvaButton from '../../../../../../../../complect/eva-icon/EvaButton';
import { useCmTranslationConfigs, useSetCurrentConfigi } from '../../hooks/configs';
import { TranslationScreenConfig } from '../../model';
import { CmTranslateCurrentScreenConfigurationTypeTextAlign } from '../current/complect/TextAlign';
import { CmTranslateCurrentScreenConfigurationTypeFontWeight } from '../current/complect/Type';
import { CmTranslateScreenConfigurationsFace } from './Face';

const defaultConfig: TranslationScreenConfig = {
  title: 'Трансляция',
  left: 5,
  top: 5,
  width: 90,
  height: 90,
  proportion: 1,
  color: '#ffffff',
  textAlign: CmTranslateCurrentScreenConfigurationTypeTextAlign.Center,
  fontWeight: CmTranslateCurrentScreenConfigurationTypeFontWeight.Bold,
};

export const CmTranslateScreenConfigurationsFaceLine = () => {
  const { configs, updateConfig } = useCmTranslationConfigs();
  const setCurrentConfigi = useSetCurrentConfigi();

  return (
    <div className="margin-big-gap-t">
      <ConfigLine className="margin-gap-b no-scrollbar children-middle">
        {configs.map((config, configi) => {
          return (
            <CmTranslateScreenConfigurationsFace
              key={configi}
              config={config}
              configi={configi}
            />
          );
        })}
        <EvaButton
          name="plus"
          className="margin-gap-l"
          onClick={() => {
            updateConfig(defaultConfig, configs.length);
            setCurrentConfigi(configs.length);
          }}
        />
      </ConfigLine>
    </div>
  );
};

const ConfigLine = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;