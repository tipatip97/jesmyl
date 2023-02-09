import { useState } from "react";
import KeyboardInput from "../../../../../../../../complect/keyboard/KeyboardInput";
import SendButton from "../../../../../../../../complect/SendButton";
import useService from "../../../../../../../../complect/service/useService";

export default function ObserveUrlAudio({ onSuccess, onUrlChange }: { onSuccess: (val: string) => void, onUrlChange?: (url: string) => void }) {
    const sendService = useService();
    const [url, setUrl] = useState('');

    return <div className="flex flex-between flex-gap">
        <KeyboardInput
            className="half-width"
            placeholder="URL-адрес"
            onInput={(value) => {
                setUrl(value);
                onUrlChange?.(value);
            }}
        />
        <SendButton
            title="Обзор URL"
            disabled={!url}
            onSuccess={onSuccess}
            onSend={() => sendService<string>('getResourceData', url)}
        />
    </div>;
}
