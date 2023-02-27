import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { switchIsNumberSearch } from "./Complect.store";
import EvaIcon from "./eva-icon/EvaIcon";
import { KeyboardInputPropsType } from "./keyboard/Keyboard.model";
import KeyboardInput from "./keyboard/KeyboardInput";

const isNumberSearchSelector = (state: RootState) => state.complect.isNumberSearch;

export default function DebouncedSearchInput(props: {
  initialTerm?: string,
  debounce?: number,
  onSearch?: (term: string, isNumberSearch: boolean) => void,
  onIconClick?: (term: string) => void,
  onDebounced?: (term: string) => void,
  onTermChange?: (term: string) => void,
  placeholder?: string,
  withoutIcon?: boolean,
  className?: string,
  type?: KeyboardInputPropsType,
}) {
  const {
    initialTerm = "",
    onSearch,
    onDebounced,
    debounce,
    onTermChange,
    withoutIcon,
    className,
  } = props;
  const dispatch = useDispatch();
  const [term, setTerm] = useState(initialTerm || "");
  const [termDebounced, setTermDebounced] = useState(initialTerm);
  const [timeout, setTimeOut] = useState();
  const isNumberSearch = useSelector(isNumberSearchSelector);

  useLayoutEffect(() => {
    onSearch?.(term, isNumberSearch);

    if (debounce) {
      setTimeOut(
        setTimeout(() => {
          setTermDebounced?.(term);
          onTermChange?.(term);
        }, debounce) as never
      );
      clearTimeout(timeout);
    } else onTermChange?.(term);
  }, [term, onSearch, debounce, onTermChange, isNumberSearch]);

  useLayoutEffect(
    () => onDebounced?.(termDebounced),
    [termDebounced, onDebounced]
  );

  return (
    <div className={`debounced-input ${className}`}>
      {withoutIcon ||
        <EvaIcon
          name={isNumberSearch ? 'keypad-outline' : 'search-outline'}
          onClick={() => dispatch(switchIsNumberSearch())}
        />}
      <KeyboardInput
        type={isNumberSearch ? 'number' : 'text'}
        value={term}
        className="input"
        placeholder={props.placeholder}
        onChange={(value) => setTerm(value)}
      />
    </div>
  );
}
