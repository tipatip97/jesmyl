import { ReactNode, useState } from "react";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { Mp3Rule } from "../CmEditor.model";

export default function Mp3RuleEditor(props: Partial<Mp3Rule> & { redact?: boolean, button?: ReactNode, onComplete?: (rule: Mp3Rule) => void }) {
    const [url, setUrl] = useState(props.url || '');
    const [attr, setAttr] = useState(props.attr || '');
    const [query, setQuery] = useState(props.query || '');
    const [isRedact, setIsRedact] = useState(props.redact);

    return <>
        <div className="flex column margin-big-gap">
            <div className="full-width">
                URL-адрес: {isRedact
                    ? <KeyboardInput value={url} onChange={setUrl} />
                    : <span className="color--7">{url}</span>}
            </div>
            <div className="full-width">
                Аттрибут с URL: {isRedact
                    ? <KeyboardInput value={attr} onChange={setAttr} />
                    : <span className="color--7">{attr}</span>}
            </div>
            <div className="full-width">
                QuerySelector: {isRedact
                    ? <KeyboardInput value={query} onChange={setQuery} />
                    : <span className="color--7">{query}</span>}
            </div>
            {props.button || (
                isRedact
                    ? <EvaButton
                        name="checkmark-circle"
                        className="color--ok margin-big-gap"
                        disabled={!url.match(/^https?:\/\/\w+/) || !attr || !query}
                        onClick={(() => {
                            setIsRedact(false);
                            props.onComplete?.({
                                url, attr, query,
                                w: props.w ?? Date.now() + Math.random()
                            });
                        })}
                    />
                    : <EvaButton
                        name="edit-outline"
                        onClick={() => setIsRedact(true)}
                    />)}
        </div>
    </>;
}