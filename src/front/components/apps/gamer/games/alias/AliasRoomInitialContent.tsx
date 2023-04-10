import { useEffect, useState } from "react";
import TheButton from "../../../../../complect/Button";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { getRandomTwiceName } from "../../../leader/resources/getRandomTwiceName";
import GamerRoomMemberList from "../../complect/GamerRoomMemberList";
import useAliasState from "./useAliasState";

const roundTimes = [10, 60, 120, 180];

export default function AliasRoomInitialContent() {
    const { players, startRound, memberPossibilities } = useAliasState();
    const [roundTime, setRoundTime] = useState(60);
    const [teamsTitles, setGroupTitle] = useState<string[] | undefined>();
    const [teamsCount, setGroupsCount] = useState(2);
    const myPossibilities = memberPossibilities();

    useEffect(() => {
        if (teamsTitles && teamsTitles.length !== teamsCount) {
            const titles: string[] = [];
            while (titles.length < teamsCount)
                titles.push(getRandomTwiceName().join(' '));
            setGroupTitle(titles);
        }
    }, [teamsTitles, teamsCount]);

    return <>
        <GamerRoomMemberList />
        {myPossibilities.isManager &&
            <>
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
                        value={'' + teamsCount}
                        type="number"
                        onChange={(val) => setGroupsCount(+val)}
                    />
                </div>

                <TheButton
                    onClick={() => setGroupTitle(teamsTitles ? undefined : [])}
                >{teamsTitles ? 'Не называть группы' : 'Задать названия группам'}</TheButton>
                {teamsTitles?.map((groupTitle) => {
                    return <div key={groupTitle}>{groupTitle}</div>;
                })}
                <div className="flex center margin-big-gap">
                    <TheButton
                        disabled={!players || players.length < +teamsCount}
                        onClick={() => startRound(teamsCount, roundTime, teamsTitles)}
                    >Начать раунд</TheButton>
                </div>
            </>
        }</>;
}