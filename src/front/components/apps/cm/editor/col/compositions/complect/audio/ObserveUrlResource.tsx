import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CmMp3ContainsPageResult } from "../../../../../../../../models";
import KeyboardInput from "../../../../../../../../complect/keyboard/KeyboardInput";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import SendButton from "../../../../../../../../complect/sends/send-button/SendButton";
import serviceMaster from "../../../../../../../../complect/service/serviceMaster";
import { RootState } from "../../../../../../../../shared/store";

const mp3RulesSelector = (state: RootState) => state.cm.mp3Rules;

export default function ObserveUrlResource({ onSuccess, availableWithTextQuery }: { onSuccess: (val: CmMp3ContainsPageResult) => void, availableWithTextQuery?: boolean }) {
    const sendService = serviceMaster('cm');
    const [url, setUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const mp3Rules = useSelector(mp3RulesSelector);

    useEffect(() => {
        try {
            const theUrl = new URL(url);
            if (mp3Rules && !mp3Rules.some((u) => new URL(u.url).origin === theUrl.origin)) {
                setErrorMessage('Неизвестный источник');
            } else setErrorMessage('');
        } catch (e) {
            setErrorMessage('Невалидный URL-адрес');
        }
    }, [url, mp3Rules]);

    return <div>
        <div className="flex flex-between flex-gap">
            <KeyboardInput
                className="half-width"
                placeholder="URL-адрес"
                value={url}
                onFocus={async (event) => {
                    if (url) return;
                    const val = await navigator.clipboard.readText();
                    if (val) {
                        try {
                            const url = new URL(val);
                            if (mp3Rules && !mp3Rules.some((u) => new URL(u.url).host === url.host)) {
                                setErrorMessage('Скопированный текст содержит неизвестный источник');
                            } else {
                                setUrl(url.toString());
                                event.blur();
                                setErrorMessage('');
                            }
                        } catch (e) {
                            setErrorMessage('Скопированный текст содержит невалидную ссылку');
                        }
                    }
                }}
                onInput={setUrl}
            />
            <SendButton
                title="Обзор URL"
                disabled={!url || !!errorMessage}
                onSuccess={onSuccess}
                onSend={() => sendService<CmMp3ContainsPageResult>('getResourceData', url)}
            />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <h2>Известные ресурсы:</h2>
        {mp3Rules?.map((rule) => {
            return (!availableWithTextQuery || rule.textQuery) &&
                <div
                    key={rule.url}
                    className={!url || url.startsWith(rule.url) ? "color--7" : ''}
                >{rule.url}</div>;
        })}
    </div>;
}
