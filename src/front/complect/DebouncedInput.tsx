import { useLayoutEffect, useState } from "react";
import EvaIcon, { EvaIconName } from "./eva-icon/EvaIcon";
import useKeyboard from "./keyboard/useKeyboard";

export default function DebouncedInput(props: {
  uniq?: string;
  initialTerm?: string;
  debounce?: number;
  onSearch?: (term: string) => void;
  onDebounced?: (term: string) => void;
  onTermChange?: (term: string) => void;
  placeholder?: string;
  icon?: EvaIconName;
  className?: string;
  textarea?: boolean;
}) {
  const {
    initialTerm = "",
    onSearch,
    onDebounced,
    debounce,
    onTermChange,
    icon,
    className,
    textarea,
  } = props;
  const [term, setTerm] = useState(initialTerm || "");
  const [termDebounced, setTermDebounced] = useState(initialTerm);
  const [timeout, setTimeOut] = useState();
  const input = useKeyboard()(`debounce-input ${props.uniq || "{uniq}"}`, {
    className: "input",
    placeholder: props.placeholder,
    onChange: (value) => setTerm(value),
    theValue: term,
    multiline: textarea
  });

  useLayoutEffect(() => {
    onSearch?.(term);

    if (debounce) {
      setTimeOut(
        setTimeout(() => {
          setTermDebounced?.(term);
          onTermChange?.(term);
        }, debounce) as never
      );
      clearTimeout(timeout);
    } else onTermChange?.(term);
  }, [term, onSearch, debounce, onTermChange]);

  useLayoutEffect(
    () => onDebounced?.(termDebounced),
    [termDebounced, onDebounced]
  );

  return (
    <div className={`debounced-input ${className}`}>
      {icon ? <EvaIcon name={icon} /> : null}
      {input.node}
    </div>
  );
}
