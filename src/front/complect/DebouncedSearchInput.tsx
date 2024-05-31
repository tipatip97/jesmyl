import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/store';
import { switchIsNumberSearch } from './Complect.store';
import IconButton from './the-icon/IconButton';
import { IconGridTableStrokeRounded } from '@icons/grid-table';
import { IconSearchVisualStrokeRounded } from '@icons/search-visual';
import { KeyboardInputPropsType } from './keyboard/Keyboard.model';
import KeyboardInput from './keyboard/KeyboardInput';

const isNumberSearchSelector = (state: RootState) => state.complect.isNumberSearch;

export default function DebouncedSearchInput(props: {
  initialTerm?: string;
  debounce?: number;
  onSearch?: (term: string, isNumberSearch: boolean) => void;
  onIconClick?: (term: string) => void;
  onDebounced?: (term: string) => void;
  onTermChange?: (term: string) => void;
  placeholder?: string;
  withoutIcon?: boolean;
  className?: string;
  type?: KeyboardInputPropsType;
}) {
  const { initialTerm = '', onSearch, onDebounced, debounce, onTermChange, withoutIcon, className } = props;
  const dispatch = useDispatch();
  const timeout = useMemo((): { val?: TimeOut } => ({}), []);
  const isNumberSearch = useSelector(isNumberSearchSelector);

  return (
    <div className={`debounced-input ${className}`}>
      {withoutIcon || (
        <IconButton
          Icon={isNumberSearch ? IconGridTableStrokeRounded : IconSearchVisualStrokeRounded}
          onClick={() => dispatch(switchIsNumberSearch())}
        />
      )}
      <KeyboardInput
        type={isNumberSearch ? 'number' : 'text'}
        value={initialTerm}
        className="input"
        placeholder={props.placeholder}
        onChange={term => {
          onSearch?.(term, isNumberSearch);

          if (debounce) {
            clearTimeout(timeout.val);
            timeout.val = setTimeout(() => {
              onDebounced?.(term);
              onTermChange?.(term);
            }, debounce);
          } else onTermChange?.(term);
        }}
      />
    </div>
  );
}
