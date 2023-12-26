import { ReactNode } from 'react';
import CopyTextButton from '../../../../../../complect/CopyTextButton';
import { useIsRememberExpand } from '../../../../../../complect/expand/useIsRememberExpand';
import useToast from '../../../../../../complect/modal/useToast';
import { CoderResultNameStyled } from './styles';

interface Props {
  shortValue: string;
  fullValue: ReactNode;
  name?: string | number;
  onCopy: (() => string | nil) | null;
  scope: string;
}

const valueExpandableStyle = { marginLeft: 20 };

export const CoderValueExpandable = ({ shortValue, fullValue, name, onCopy, scope }: Props) => {
  const [, isExpand, setIsExpand] = useIsRememberExpand(scope);
  const [toastNode, toast] = useToast();

  return (
    <>
      {toastNode}
      <span
        onClick={() => setIsExpand()}
        className="flex pointer flex-gap flex-max"
      >
        {name != null && (
          <span>
            <CoderResultNameStyled>{name}: </CoderResultNameStyled>
          </span>
        )}
        {isExpand
          ? onCopy && (
              <>
                <span className="color--2">{shortValue}</span>
                <CopyTextButton
                  text={() => {
                    try {
                      return onCopy();
                    } catch (error) {
                      toast('' + error, { mood: 'ko' });
                    }
                  }}
                />
              </>
            )
          : shortValue}
      </span>
      {isExpand && <div style={valueExpandableStyle}>{fullValue}</div>}
    </>
  );
};
