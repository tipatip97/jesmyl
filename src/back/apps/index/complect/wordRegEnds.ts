import smylib, { SMyLib } from "../../../shared/SMyLib";

type Replacer<Ret> = (substring: string, ...args: any[]) => Ret;

interface EndVariantsDict {
    pronoun: string | Replacer<Replacer<string>>,
    verb_pronoun: string | Replacer<Replacer<string>>,
    verb_noun: string | Replacer<Replacer<string>>,
}

const wordRegEnds: Record<string, Record<string, EndVariantsDict>> = {
    '([ыи])$|,$': {
        'йся$': { // отвернувшийся
            pronoun: 'еся', // отвернувшиеся
            verb_pronoun: 'хся',
            verb_noun: '',
        },
        'ичий': { // птичий
            pronoun: 'ичьи', // птичьи
            verb_pronoun: 'ичьих',
            verb_noun: '',
        },
        'ый$': { // гордый
            pronoun: 'ые', // гордые
            verb_pronoun: 'ых',
            verb_noun: '',
        },
        'ий$': { // синий
            pronoun: 'ие', // синие
            verb_pronoun: 'их',
            verb_noun: '',
        },
        'ой$': { // простой
            pronoun: 'ые', // простые
            verb_pronoun: 'ых',
            verb_noun: '',
        },
    },
    '([аяь])$|(.):$': {
        'ичий': { // охотничий
            pronoun: 'ичья', // охотничья
            verb_pronoun: 'ичьей',
            verb_noun: '',
        },
        '([жшчщ])[иоы]й': {  // большой
            pronoun: '$1ая', // большая
            verb_pronoun: '$1ой',
            verb_noun: '',
        },
        'ний$': { // синий
            pronoun: 'няя', // синяя
            verb_pronoun: 'ней',
            verb_noun: '',
        },
        '([иоы])й$': { // скорый
            pronoun: 'ая', // скорая
            verb_pronoun: 'й',
            verb_noun: 'ы',
        },
    },
    '([оеё])$|\\.$': {
        'ний$': { // ранний
            pronoun: 'нее', // раннее
            verb_pronoun: 'него',
            verb_noun: '',
        },
        'ичий': { // птичий
            pronoun: 'ичье', // птичье
            verb_pronoun: 'ичьего',
            verb_noun: '',
        },
        '([жчщ])[иоы]й': { // большой поющий
            pronoun: '$1ее', // большее поющее
            verb_pronoun: '$1его',
            verb_noun: '',
        },
        '[иоы]й$': { // холостой
            pronoun: 'ое', // холостое
            verb_pronoun: 'ого',
            verb_noun: '',
        },
    },
};

const regEnds: [RegExp, [RegExp, EndVariantsDict][]][] =
    SMyLib.entries(wordRegEnds).map(([end, variants]) => [
        new RegExp(end),
        SMyLib.entries(variants).map(([end, dict]) => [new RegExp(end), dict]),
    ]);

const allAll = (all: string) => all;

const fixNoun = (() => {
    const reg = /[^- а-яё\d"]/ig;
    return (noun: string) => noun.replace(reg, '') + (noun.startsWith('"') ? '"' : '');
})();

export const replacePronounEnd = (pronoun: string, noun: string): [string, string] => {
    for (let i = 0; i < regEnds.length; i++) {
        const match = regEnds[i][0].exec(noun);
        if (match) {
            const regEnd = regEnds[i][1];

            for (let j = 0; j < regEnd.length; j++) {
                if (regEnd[j][0].exec(pronoun)) {
                    const invoke = (funcOrString: any) => {
                        return smylib.isFunc(funcOrString)
                            ? funcOrString(...match)
                            : funcOrString || allAll;
                    };

                    return [
                        pronoun.replace(regEnd[j][0], invoke(regEnd[j][1].pronoun)),
                        fixNoun(noun),
                    ];
                }
            }
        }
    }
    return [pronoun, fixNoun(noun)];
};
