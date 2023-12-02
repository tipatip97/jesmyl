import { useEffect, useState } from "react";
import TheButton from "../../../../../complect/Button";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import EvaCheckbox from "../../../../../complect/eva-icon/EvaCheckbox";
import useFullContent from "../../../../../complect/fullscreen-content/useFullContent";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { getRandomTwiceName } from "../../../../../complect/random-twice-name/getRandomTwiceName";
import GamerRoomMemberList from "../../complect/GamerRoomMemberList";
import { useAliasState } from "./useAliasState";
import mylib from "../../../../../complect/my-lib/MyLib";

const roundTimesItems = [10, 60, 120, 180].map(id => ({ title: `${id} сек.`, id }));
const dreamItems = [10, 30, 50, 70, 100].map(id => ({ title: `${id} слов`, id }));
const levelGradationTitles = [
    'Не выбрано',
    'Лёгкий',
    'Средний',
    'Сложный',
    'Очень сложный',
    'Профессорский',
    'Космический',
    'Галактический',
];

const emptyList: any[] = [];

export default function AliasRoomInitialContent() {
    const { players, startRound, memberPossibilities, state, aliasWords } = useAliasState();
    const [roundTime, setRoundTime] = useState(state?.roundTime || 60);
    const [dream, setDream] = useState(state?.dream || 50);
    const [isPrevWords, setIsPrevWords] = useState(true);
    const [dicts, setDicts] = useState(state?.dicts || emptyList);
    const [teamsTitles, setGroupTitle] = useState<string[]>(emptyList);
    const [teamsCount, setGroupsCount] = useState(state?.teams.length || 2);
    const myPossibilities = memberPossibilities();
    const isImpossibleToCreate = (!state && !dicts.length) || (state && (!state.words.length && isPrevWords)) || !players || players.length < teamsCount || teamsCount < 2;
    const [isComputeNewTeams, setIsComputeNewTeams] = useState(true);

    const [dictsNode, openDicts] = useFullContent(() => {
        return <>
            {aliasWords.map((pack, packi) => {
                const levels: number[] = [0];
                Object.values(pack.words).forEach((num) => levels[num] = (levels[num] || 0) + 1);
                return <div
                    key={pack.title}
                    className="flex flex-gap margin-gap-v dropdown-ancestor"
                >
                    {pack.title}
                    <Dropdown
                        id={dicts[packi]}
                        items={levels.map((_, leveli) => ({ title: `${levelGradationTitles[leveli]}${leveli ? ` (${levels[leveli]} сл.)` : ''}`, id: leveli }))}
                        onSelectId={(id) => {
                            const newDicts: number[] = [...dicts];
                            newDicts[packi] = id;

                            while (newDicts[newDicts.length - 1] === 0)
                                newDicts.pop();

                            setDicts(newDicts);
                        }}
                    />
                </div>;
            })}
        </>;
    });

    useEffect(() => {
        if (!teamsTitles.length || (teamsTitles.length !== teamsCount && !isImpossibleToCreate)) {
            const titles: string[] = [];
            while (titles.length < teamsCount)
                titles.push(getRandomTwiceName().join(' '));
            setGroupTitle(titles);
        }
    }, [teamsTitles, teamsCount, isImpossibleToCreate]);

    return <>
        {dictsNode}
        <GamerRoomMemberList />
        {myPossibilities.isManager &&
            <>
                <h2>Настройки</h2>
                {state &&
                    <EvaCheckbox
                        checked={isPrevWords}
                        onChange={setIsPrevWords}
                        postfix="Оставить прежние словари"
                    />}
                {state && isPrevWords
                    ? <EvaButton
                        name="book-open-outline"
                        postfix={<>
                            Осталось {state.words.length}
                            {mylib.declension(state.words.length, ' слово', ' слова', ' слов')}
                        </>}
                    />
                    : <EvaButton
                        name="book-open-outline"
                        className="color--3"
                        postfix={<>
                            {'Выбрать словари - '}
                            {dicts.length
                                ? dicts.map((level, leveli) =>
                                    aliasWords[leveli].title
                                    + (' (' + levelGradationTitles[level])
                                    + (' - ' + Object.values(aliasWords[leveli].words).reduce((acc, num) => acc + +(num <= level), 0))
                                    + ' сл.)'
                                ).join(' + ')
                                : <span className="color--ko">Не выбраны</span>}
                        </>}
                        onClick={() => openDicts()}
                    />}
                <div className="flex flex-gap margin-gap-v dropdown-ancestor">
                    <EvaButton
                        name="clock-outline"
                        className="nowrap"
                        postfix="Время раунда"
                    />
                    <Dropdown
                        id={roundTime}
                        items={roundTimesItems}
                        onSelectId={setRoundTime}
                    />
                </div>
                <div className="flex flex-gap margin-gap-v dropdown-ancestor">
                    <EvaButton
                        name="award-outline"
                        className="nowrap"
                        postfix="Цель"
                    />
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
                        <EvaButton
                            name="people-outline"
                            className="nowrap"
                            postfix="Количество команд"
                        />
                        <KeyboardInput
                            value={'' + teamsCount}
                            type="number"
                            onChange={(val) => setGroupsCount(+val)}
                        />
                    </div>
                    {teamsTitles.map((teamTitle) => <div key={teamTitle} className="margin-giant-gap-l">{teamTitle}</div>)}
                </>}

                <div className="flex center margin-big-gap">
                    <TheButton
                        disabled={isImpossibleToCreate}
                        onClick={() => startRound({
                            isComputeNewTeams,
                            teamsCount,
                            roundTime,
                            dream,
                            teamsTitles,
                            dicts,
                            isPrevWords,
                        })}
                    >Начать раунд</TheButton>
                </div>
            </>
        }</>;
}
