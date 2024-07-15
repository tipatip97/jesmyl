import { ScreenTranslationPartialConfigProps } from '../../../../../../../+complect/translations/complect/model';
import Dropdown from '../../../../../../../../../complect/dropdown/Dropdown';
import { translationPushKinds } from '../../../../../../col/com/Com.complect';

type Props = ScreenTranslationPartialConfigProps<{ pushKind?: number }>;

const ExtractTitels = ({ title }: { title: string }, id: number) => ({ title, id });

export const CmScreenTranslateConfigurationPushKind = ({ config, updateConfig }: Props) => {
  return (
    <>
      <div className="flex flex-gap">
        Строчки
        <Dropdown
          id={config.pushKind}
          items={translationPushKinds.map(ExtractTitels)}
          onSelectId={pushKind => updateConfig({ pushKind })}
        />
      </div>
    </>
  );
};
