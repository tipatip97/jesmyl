import { SokiVisitor } from "../../../../../back/complect/soki/soki.model";

const eventStoppedPropagation = (event: { stopPropagation(): void }) => event.stopPropagation();

export const TgLinkOrFio = ({ profile }: { profile: SokiVisitor }) => {
    return <>
        {profile.tgId
            ? profile.nick.startsWith('t:') || profile.nick.startsWith('t.')
                ? <span className="color--7">{profile.nick}</span>
                : <a
                    href={`https://t.me/${profile.nick}`}
                    className="color--7 text-italic"
                    onClick={eventStoppedPropagation}
                >
                    {profile.nick}
                </a>
            : profile.fio
                ? profile.fio
                : <span className="color--ko">*unk*</span>}
    </>;
};
