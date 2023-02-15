import { useState } from "react";
import { useSelector } from "react-redux";
import { CmMp3ContainsPageResult } from "../../../../../../../../../back/apps/cm/CmBackend.model";
import KeyboardInput from "../../../../../../../../complect/keyboard/KeyboardInput";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import SendButton from "../../../../../../../../complect/SendButton";
import useService from "../../../../../../../../complect/service/useService";
import { RootState } from "../../../../../../../../shared/store";

const mp3RulesSelector = (state: RootState) => state.cm.mp3Rules;

export default function ObserveUrlResource({ onSuccess, availableWithTextQuery }: { onSuccess: (val: CmMp3ContainsPageResult) => void, availableWithTextQuery?: boolean }) {
    const sendService = useService();
    const [url, setUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const mp3Rules = useSelector(mp3RulesSelector);

    return <div>
        <div className="flex flex-between flex-gap">
            <KeyboardInput
                className="half-width"
                placeholder="URL-адрес"
                onInput={(value) => {
                    try {
                        const url = new URL(value);
                        if (mp3Rules && !mp3Rules.some((u) => new URL(u.url).host === url.host)) {
                            setErrorMessage('Неизвестный источник');
                        } else setErrorMessage('');
                    } catch (e) {
                        setErrorMessage('Невалидный URL-адрес');
                    }
                    setUrl(value);
                }}
            />
            <SendButton
                title="Обзор URL"
                disabled={!url || !!errorMessage}
                onSuccess={onSuccess}
                onFailure={(errorMessage) => modalService.alert(errorMessage, 'Ошибка')}
                onSend={() => sendService<CmMp3ContainsPageResult>('getResourceData', url)}
            />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <h2>Известные ресурсы:</h2>
        {mp3Rules?.map((rule) => {
            return (!availableWithTextQuery || rule.textQuery) && <div key={rule.url} className="color--7">{rule.url}</div>;
        })}
    </div>;
}
