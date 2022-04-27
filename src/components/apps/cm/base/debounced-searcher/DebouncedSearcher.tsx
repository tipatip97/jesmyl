import { useEffect, useRef, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import "./DebouncedSearcher.scss";

export default function DebouncedSearcher(props: {
  initialTerm?: string;
  debounce?: number;
  onSearch?: (term: string) => void;
  onDebounced?: (term: string) => void;
  onTermChange?: (term: string) => void;
}) {
  const {
    initialTerm = "",
    onSearch,
    onDebounced,
    debounce,
    onTermChange,
  } = props;
  const searchInputRef = useRef<HTMLInputElement>(null);
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
    <div className="debounced-searcher">
      <EvaIcon name="search-outline" />
      <input
        className="filter-input"
        type="text"
        placeholder="Поиск песен"
        onChange={(event) => setTerm(event.target.value)}
        ref={searchInputRef}
        value={term}
      />
      <EvaIcon
        name="close"
        className={`clear-button ${term ? "" : "hidden"}`}
        onClick={() => {
          setTerm("");
          searchInputRef.current?.focus();
        }}
      />
    </div>
  );
}
