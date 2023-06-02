import { useEffect, useRef } from "react";
import { ChordVisibleVariant } from "../../Cm.model";
import { Com } from "../../col/com/Com";
import TheControlledCom from "../../col/com/TheControlledCom";

export default function TheComForFullScreen({
    com,
    comList,
    chordVisibleVariant,
    onComSet,
}: {
    com?: Com,
    comList?: Com[] | nil,
    chordVisibleVariant: ChordVisibleVariant,
    onComSet: (com: Com) => void,
}) {
    const comListElem = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (comListElem.current) comListElem.current.scrollTop = 0;
    }, [com?.wid]);

    if (!com) return null;

    return <div ref={comListElem} className="absolute full-width full-height over-y-auto pos-top pos-left">
        <TheControlledCom
            com={com}
            chordVisibleVariant={chordVisibleVariant}
            comList={comList}
            onComSet={onComSet}
        />
    </div>;
}