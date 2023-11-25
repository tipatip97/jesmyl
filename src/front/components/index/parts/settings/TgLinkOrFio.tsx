export const TgLinkOrFio = ({ profile }: { profile: { fio?: string, username?: string } }) => {
    return <>
        {profile.username
            ? profile.username.startsWith('t.')
                ? <span className="color--7">{profile.username}</span>
                : <a href={`https://t.me/${profile.username}`} className="color--7 text-italic">
                    {profile.username}
                </a>
            : profile.fio
                ? profile.fio
                : <span className="color--ko">*unk*</span>}
    </>;
};
