import { useEffect, useState } from "react";
import TheButton from "../../../../../complect/Button";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { getRandomTwiceName } from "../../../leader/resources/getRandomTwiceName";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";

const roundTimes = [60, 120, 180];

export default function AliasRoomInitialManagerContent() {
    const { players } = useGamerRooms();
    const [roundTime, setRoundTime] = useState(60);
    const [groupTitles, setGroupTitle] = useState<string[] | null>(null);
    const [groupsCount, setGroupsCount] = useState(players ? Math.ceil(players.length / 2) : 1);

    useEffect(() => {
        if (groupTitles && groupTitles.length !== groupsCount) {
            const titles: string[] = [];
            while (titles.length < groupsCount)
                titles.push(getRandomTwiceName().join(' '));
            setGroupTitle(titles);
        }
    }, [groupTitles, groupsCount]);

    return <>
        <h2>Настройки</h2>
        <div className="flex flex-gap margin-gap-v">
            <span className="nowrap">Время раунда</span>
            <Dropdown
                id={roundTime}
                items={roundTimes.map(id => ({ title: `${id} сек.`, id }))}
                onSelect={({ id }) => setRoundTime(id)}
            />
        </div>
        <div className="flex flex-gap margin-gap-v">
            <span className="nowrap">Количество команд</span>
            <KeyboardInput
                value={'' + groupsCount}
                type="number"
                onChange={(val) => setGroupsCount(+val)}
            />
        </div>

        <TheButton
            onClick={() => setGroupTitle(groupTitles ? null : [])}
        >{groupTitles ? 'Не называть группы' : 'Задать названия группам'}</TheButton>
        {groupTitles?.map((groupTitle) => {
            return <div key={groupTitle}>{groupTitle}</div>;
        })}
        <div className="flex center margin-big-gap">
            <TheButton
                disabled={!players || players.length < +groupsCount}
            >Начать раунд</TheButton>
        </div>
    </>
}