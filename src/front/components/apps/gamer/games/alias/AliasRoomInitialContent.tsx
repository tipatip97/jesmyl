import { useEffect, useState } from "react";
import TheButton from "../../../../../complect/Button";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { getRandomTwiceName } from "../../../../../complect/random-twice-name/getRandomTwiceName";
import GamerRoomMemberList from "../../complect/GamerRoomMemberList";
import useAliasState from "./useAliasState";
import EvaCheckbox from "../../../../../complect/eva-icon/EvaCheckbox";

const roundTimesItems = [10, 60, 120, 180].map(id => ({ title: `${id} сек.`, id }));
const dreamItems = [10, 30, 50, 70, 100].map(id => ({ title: `${id} слов`, id }));

export default function AliasRoomInitialContent() {
    const { players, startRound, memberPossibilities, state } = useAliasState();
    const [roundTime, setRoundTime] = useState(state?.roundTime || 60);
    const [dream, setDream] = useState(state?.dream || 50);
    const [teamsTitles, setGroupTitle] = useState<string[]>([]);
    const [teamsCount, setGroupsCount] = useState(state?.teams.length || 2);
    const myPossibilities = memberPossibilities();
    const isImpossibleToCreate = !players || players.length < teamsCount || teamsCount < 2;
    const [isComputeNewTeams, setIsComputeNewTeams] = useState(true);

    useEffect(() => {
        if (!teamsTitles.length || (teamsTitles.length !== teamsCount && !isImpossibleToCreate)) {
            const titles: string[] = [];
            while (titles.length < teamsCount)
                titles.push(getRandomTwiceName().join(' '));
            setGroupTitle(titles);
        }
    }, [teamsTitles, teamsCount, isImpossibleToCreate]);

    return <>
        <GamerRoomMemberList />
        {myPossibilities.isManager &&
            <>
                <h2>Настройки</h2>
                <div className="flex flex-gap margin-gap-v dropdown-ancestor">
                    <span className="nowrap">Время раунда</span>
                    <Dropdown
                        id={roundTime}
                        items={roundTimesItems}
                        onSelectId={setRoundTime}
                    />
                </div>
                <div className="flex flex-gap margin-gap-v dropdown-ancestor">
                    <span className="nowrap">Цель</span>
                    <Dropdown
                        id={dream}
                        items={dreamItems}
                        onSelectId={setDream}
                    />
                </div>
                {state && <EvaCheckbox
                    checked={isComputeNewTeams}
                    onChange={setIsComputeNewTeams}
                    postfix="Собрать новые команды"
                />}
                {isComputeNewTeams && <>
                    <div className="flex flex-gap margin-gap-v">
                        <span className="nowrap">Количество команд</span>
                        <KeyboardInput
                            value={'' + teamsCount}
                            type="number"
                            onChange={(val) => setGroupsCount(+val)}
                        />
                    </div>
                    {teamsTitles.map((teamTitle) => <div key={teamTitle}>{teamTitle}</div>)}
                </>}

                <div className="flex center margin-big-gap">
                    <TheButton
                        disabled={isImpossibleToCreate}
                        onClick={() => startRound(isComputeNewTeams, teamsCount, roundTime, dream, teamsTitles)}
                    >Начать раунд</TheButton>
                </div>
            </>
        }</>;
}