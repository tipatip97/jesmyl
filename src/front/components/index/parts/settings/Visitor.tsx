import { useState } from "react";
import { SokiVisitor } from "../../../../../back/complect/soki/soki.model";
import { TgLinkOrFio } from "./TgLinkOrFio";

const itNIt = (it: unknown) => !it;

export const Visitor = ({ visitor }: { visitor: SokiVisitor }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <div onClick={() => setIsOpen(itNIt)}>
        <TgLinkOrFio profile={visitor} /> v{visitor.version || '?'} {visitor.deviceId}
        {isOpen
            ? <div className="margin-gap">
                <div className="color--7">{visitor.time}</div>
                <div className="color--4">{visitor.browser}</div>
            </div>
            : ''}
    </div>;
};
