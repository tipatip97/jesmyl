import { useState } from "react";
import { CmMp3ContainsPageResult } from "../../../../../../../../../back/apps/cm/CmBackend.model";
import KeyboardInput from "../../../../../../../../complect/keyboard/KeyboardInput";
import modalService from "../../../../../../../../complect/modal/Modal.service";
import SendButton from "../../../../../../../../complect/SendButton";
import useService from "../../../../../../../../complect/service/useService";

export default function ObserveUrlAudio({ onSuccess }: { onSuccess: (val: CmMp3ContainsPageResult) => void }) {
    const sendService = useService();
    const [url, setUrl] = useState('');

    return <div className="flex flex-between flex-gap">
        <KeyboardInput
            className="half-width"
            placeholder="URL-адрес"
            onInput={(value) => setUrl(value)}
        />
        <SendButton
            title="Обзор URL"
            disabled={!url}
            onSuccess={onSuccess}
            onFailure={(errorMessage) => modalService.alert(errorMessage, 'Ошибка')}
            onSend={() => sendService<CmMp3ContainsPageResult>('getResourceData', url)}
        />
    </div>;
}
