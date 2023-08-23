import { useState } from "react";
import StrongEditableField from "../../../../../complect/strong-control/field/StrongEditableField";
import { TeamGameImportable } from "../../Leader.model";
import { LeaderCleans } from "../LeaderCleans";

const newl2moreReg = /\n{2,}/;
const newlReg = /\n/;
const upperName = '^([А-ЯЁ]+ [А-ЯЁ\\d]+)';
const upperNameMatchReg = new RegExp(upperName);
const lineMatchReg = new RegExp(`${upperName}(.+?)(-?\\d+([.,]\\d+)?)(.*)`);

const minSetter = ['MIN'] as const;
const maxSetter = ['MAX'] as const;

export function GameDescription({ game, redactable }: { game: TeamGameImportable, redactable?: true }) {
    const [isRedact, setIsRedact] = useState(false);

    let value = game.dsc;

    if (!isRedact && value) {
        const blocks = value.split(newl2moreReg);
        value = '';
        blocks.forEach(block => {
            const blocks = block.split(newlReg);
            value += '\n';
            let max = 0;
            let min = 0;

            blocks
                .map((line, linei): [number | typeof minSetter | typeof maxSetter, string] => {
                    if (line.search(upperNameMatchReg) < 0) return [maxSetter, linei === 0 ? '<i className="color--7">' + line + '</i>' : line];

                    const lineParts = line.match(lineMatchReg);
                    if (lineParts !== null) {
                        const [, teamTitle, separation, numbers, , rest] = lineParts;
                        const num = +numbers.replace(/,/, '.');
                        if (max < num) max = num + 1;
                        if (min > num) min = num - 1;

                        return [num, `${teamTitle}${separation || ' '}${numbers}${rest || ''}`];
                    }
                    return [minSetter, line];
                })
                .sort((a, b) => {
                    const aNum = a[0] === minSetter ? min : a[0] === maxSetter ? max : a[0];
                    const bNum = b[0] === minSetter ? min : b[0] === maxSetter ? max : b[0];

                    return bNum as number - (aNum as number);
                })
                .forEach(([, line]) => value += '\n' + line);
        });
    }

    return <>
        <StrongEditableField
            scope=""
            fieldName=""
            value={value}
            multiline
            title="Рейт. калькулятор"
            icon={redactable && "file-text-outline"}
            onSend={redactable && ((dsc) => LeaderCleans.setGameDescription(game.w, dsc))}
            isRedact={redactable}
            setSelfRedact={redactable}
            onSelfRedactChange={redactable && setIsRedact}
        />
    </>;
}
