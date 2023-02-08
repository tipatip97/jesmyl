import { useState } from "react";
import { useDispatch } from "react-redux";
import { LocalSokiAuth } from "../../../../../back/complect/soki/soki.model";
import TheButton from "../../../../complect/Button";
import EvaButton from "../../../../complect/eva-icon/EvaButton";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import KeyboardInput from "../../../../complect/keyboard/KeyboardInput";
import mylib from "../../../../complect/my-lib/MyLib";
import { qrCodeMaster } from "../../../../complect/qr-code/QRCodeMaster";
import { SpyPassport } from "../Spy.model";
import { updateSpyPassport } from "../Spy.store";
import PhaseSpyContainer from "./PhaseSpyContainer";
import useSpyOfflineRooms from "./rooms/offline-room/useSpyOfflineRooms";

export default function TheSpyPassport() {
    const dispatch = useDispatch();
    const { passportData, passport, authData } = useSpyOfflineRooms();
    const [isEdit, setIsEdit] = useState(!passport);
    const [fio, setFio] = useState(passport?.fio || '');

    const back = (data: SpyPassport | LocalSokiAuth | nil) => {
        setFio(data?.fio || '');
        setIsEdit(!data);
    };

    return <PhaseSpyContainer
        topClass="spy-passport"
        headTitle="Паспорт"
        headClass="flex between"
        withoutBackButton
        content={<>
            {isEdit && <div className="flex center margin-big-gap">
                <KeyboardInput
                    value={fio}
                    placeholder="Твой ник-нейм"
                    onChange={(value) => setFio(value)}
                    maxLength={50}
                />
            </div>}
            {isEdit
                ? <div>
                    <div className="flex center flex-wrap flex-gap">
                        <TheButton
                            className="margin-gap"
                            disabled={!fio || fio === passport?.fio}
                            onClick={() => {
                                setIsEdit(false);
                                dispatch(updateSpyPassport({
                                    fio,
                                    login: passportData?.login || `P:${mylib.md5(`${fio} ${Date.now() + Math.random()}`)}`,
                                }));
                            }}
                        >
                            {passport ? 'Обновить' : 'Создать'} паспорт
                        </TheButton>
                        {passportData && <TheButton
                            className="margin-gap"
                            disabled={!fio}
                            confirm
                            onClick={() => {
                                back(authData);
                                dispatch(updateSpyPassport(null));
                            }}
                        >
                            Сбросить данные
                        </TheButton>}
                    </div>
                    <div
                        className="flex center padding-giant-gap pointer"
                        onClick={() => back(passport)}
                    >Назад</div>
                </div>
                : <>
                    <h2 className="flex center passport-name">
                        <div className="name ellipsis">{passport?.fio}</div>
                        <EvaButton
                            name="edit-outline"
                            onClick={() => setIsEdit(true)}
                        /></h2>
                    {passport && <div className="flex center margin-big-gap">
                        <div
                            className="flex center flex-gap margin-big-gap pointer"
                            onClick={() => {
                                qrCodeMaster.shareData('spy', 'passport', [passport.login, passport.fio]);
                            }}>
                            <EvaIcon name="qr-code" />
                            Предъявить
                        </div>
                    </div>}
                </>
            }
        </>}
    />
}