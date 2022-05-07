import { useEffect, useRef, useState } from "react";
import EvaIcon, { EvaIconName } from "./eva-icon/EvaIcon";

export default function DebouncedInput(props: {
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
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [term, setTerm] = useState(initialTerm || "");
  const [termDebounced, setTermDebounced] = useState(initialTerm);
  const [timeout, setTimeOut] = useState();

  useEffect(() => {
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

  useEffect(() => onDebounced?.(termDebounced), [termDebounced, onDebounced]);

  return (
    <div className={`debounced-input ${className}`}>
      {icon ? <EvaIcon name={icon} /> : null}
      {textarea ? (
        <textarea
          className="input"
          placeholder={props.placeholder}
          onChange={(event) => setTerm(event.target.value)}
          ref={textareaRef}
          value={term}
        />
      ) : (
        <input
          className="input"
          type="text"
          placeholder={props.placeholder}
          onChange={(event) => setTerm(event.target.value)}
          ref={inputRef}
          value={term}
        />
      )}
      <EvaIcon
        name="close"
        className={`clear-button ${term ? "" : "hidden"}`}
        onClick={() => {
          setTerm("");
          inputRef.current?.focus();
          textareaRef.current?.focus();
        }}
      />
    </div>
  );
}
