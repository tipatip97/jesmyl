import mylib from "../../../../../../../complect/my-lib/MyLib";
import { useAliasPacks } from "../../hooks/packs";


export const levelGradationTitles = [
    'Не выбрано',
    'Лёгкий',
    'Средний',
    'Сложный',
    'Очень сложный',
    'Профессорский',
    'Космический',
    'Галактический',
];

interface Props {
    dicts: number[],
}

export const AliasSelectedDictsTextInfo = ({ dicts }: Props) => {
    const packs = useAliasPacks();

    return <>
        {'Словари - '}
        {dicts.length
            ? dicts
                .map((level, leveli) => {
                    return !level
                        ? ''
                        : packs[leveli].title
                        + ' ('
                        + (mylib.isNum(packs[leveli].words)
                            ? level
                            : (levelGradationTitles[level])
                            + (' - ' + Object.values(packs[leveli].words).reduce((acc, num) => acc + +(num && num <= level), 0)))
                        + ' сл.)'
                })
                .filter(it => it)
                .join(' + ')
            : <span className="color--ko">Не выбраны</span>}
    </>;
};
