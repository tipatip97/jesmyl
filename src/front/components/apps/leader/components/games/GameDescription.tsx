import { useState } from 'react';
import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import StrongEditableField from '../../../../../complect/strong-control/field/StrongEditableField';
import { IconFile02StrokeRounded } from '../../../../../complect/the-icon/icons/file-02';
import { TeamGameImportable } from '../../Leader.model';
import { LeaderCleans } from '../LeaderCleans';

const upperName = '^([А-ЯЁ]+ [А-ЯЁ\\d]+)';
const upperNameMatchReg = makeRegExp(`/${upperName}/`);
const lineMatchReg = makeRegExp(`/${upperName}(.+?)(-?\\d+([.,]\\d+)?)(.*)/`);

const minSetter = ['MIN'] as const;
const maxSetter = ['MAX'] as const;

export function GameDescription({ game, redactable }: { game: TeamGameImportable; redactable?: true }) {
  const [isRedact, setIsRedact] = useState(false);

  let value = game.dsc;

  if (!isRedact && value) {
    const blocks = value.split(makeRegExp('/\\n{2,}/'));
    value = '';
    blocks.forEach(block => {
      const blocks = block.split(makeRegExp('/\\n/'));
      value += '\n';
      let max = 0;
      let min = 0;

      blocks
        .map((line, linei): [number | typeof minSetter | typeof maxSetter, string] => {
          if (line.search(upperNameMatchReg) < 0)
            return [maxSetter, linei === 0 ? '<i className="color--7">' + line + '</i>' : line];

          const lineParts = line.match(lineMatchReg);
          if (lineParts !== null) {
            const [, teamTitle, separation, numbers, , rest] = lineParts;
            const num = +numbers.replace(makeRegExp('/,/'), '.');
            if (max < num) max = num + 1;
            if (min > num) min = num - 1;

            return [num, `${teamTitle}${separation || ' '}${numbers}${rest || ''}`];
          }
          return [minSetter, line];
        })
        .sort((a, b) => {
          const aNum = a[0] === minSetter ? min : a[0] === maxSetter ? max : a[0];
          const bNum = b[0] === minSetter ? min : b[0] === maxSetter ? max : b[0];

          return (bNum as number) - (aNum as number);
        })
        .forEach(([, line]) => (value += '\n' + line));
    });
  }

  return (
    <>
      <StrongEditableField
        scope=""
        fieldName=""
        value={value}
        multiline
        title="Рейт. калькулятор"
        Icon={redactable && IconFile02StrokeRounded}
        onSend={redactable && (dsc => LeaderCleans.setGameDescription(game.w, dsc))}
        isRedact={redactable}
        setSelfRedact={redactable}
        onSelfRedactChange={redactable && setIsRedact}
      />
    </>
  );
}
