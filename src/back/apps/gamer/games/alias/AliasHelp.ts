import smylib, { SMyLib } from '../../../../shared/SMyLib';
import { makeTwiceKnownName } from '../../../index/complect/makeTwiceKnownName';
import { NounPronsType } from '../../../index/models/nounProns.model';
import { AliasWordInfo, AliasWordsPack, GamerAliasRoomState } from './alias.model';

export class AliasHelp {
  static computeGameScore = (corrects: AliasWordInfo[], incorrects: AliasWordInfo[], fix: number[]) => {
    return (
      corrects.reduce((sum, attrs) => sum + (fix.includes(attrs.wordi) ? -attrs.minus : attrs.plus), 0) -
      incorrects.reduce((sum, attrs) => sum + (fix.includes(attrs.wordi) ? -attrs.plus : attrs.minus), 0)
    );
  };

  static takeSpeakerDetails = (state: GamerAliasRoomState, currentSpeakeri?: number) => {
    let membersCount = 0;
    let currTeami = -1;
    const speakeri = state.speakeri || 0;

    let startCurrentMembersi = -1;
    let finishCurrentMembersi = -1;

    let startNextMembersi = -1;
    let finishNextMembersi = -1;

    state.teams.forEach((team, teami, teama) => {
      membersCount += team.members.length;

      if (currTeami !== -1 || membersCount <= speakeri) return;

      currTeami = teami;
      startCurrentMembersi = membersCount - team.members.length;
      finishCurrentMembersi = membersCount;

      if (teami === teama.length - 1) {
        startNextMembersi = 0;
        finishNextMembersi = teama[0].members.length;
      } else {
        startNextMembersi = membersCount;
        finishNextMembersi = membersCount + teama[teami + 1].members.length;
      }
    });

    if (currentSpeakeri !== undefined) {
      const currentTeamSpeaks = state.speaks.slice(startCurrentMembersi, finishCurrentMembersi);
      const currentTeamMinSpeak = Math.min(...currentTeamSpeaks);
      const currentTeamSpeakersList = smylib.mapFilter(currentTeamSpeaks, (speaks, speaksi) =>
        speaks === currentTeamMinSpeak && currentSpeakeri !== speaksi + startCurrentMembersi ? speaksi : undefined,
      );

      if (currentTeamSpeakersList.length) {
        return [
          startCurrentMembersi + currentTeamSpeakersList[0], // next speakeri
          currTeami,
        ] as const;
      }
    }

    const nextTeamSpeaks = state.speaks.slice(startNextMembersi, finishNextMembersi);
    const nextTeamMinSpeak = Math.min(...nextTeamSpeaks);
    const nextTeamSpeakersList = smylib.mapFilter(nextTeamSpeaks, (speaks, speaksi) =>
      speaks === nextTeamMinSpeak ? speaksi : undefined,
    );

    return [
      startNextMembersi + nextTeamSpeakersList[0], // next speakeri
      currTeami,
    ] as const;
  };

  private static sortTokenParts = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  static makeSortToken = () => {
    let token = '';
    for (let i = 0; i < 10; i++) token += smylib.randomItem(this.sortTokenParts);
    return token;
  };

  private static transformTokenbit = (token: string, base = 2) => {
    return token
      .split('')
      .map(letter => letter.charCodeAt(0).toString(base))
      .join('');
  };

  static takeLens = (
    lens: number[] | nil,
    dicts: number[],
    packs: AliasWordsPack[],
    nounsProns: NounPronsType | und,
  ) => {
    if (lens != null && lens.length === dicts.length) return lens;

    return dicts.map((max, packi) => {
      if (max === 0) return 0;

      return smylib.isNum(packs[packi].words)
        ? nounsProns
          ? max < 0
            ? smylib.keys(nounsProns.nouns).length - 1
            : Math.min(smylib.keys(nounsProns.nouns).length - 1, smylib.keys(nounsProns.pronouns).length - 1)
          : 0
        : smylib.keys(packs[packi].words).length - 1;
    });
  };

  static removeTokenizedWordInfos = (token: string) => {
    return delete this.tokenizedWordInfoStorage[token];
  };

  private static tokenizedWordInfoStorage: Record<string, AliasWordInfo[]> = {};
  private static sortItemsByTokenbit = <Item>(items: Item[], tokenbit: string) => {
    let i = 0;
    const len = tokenbit.length;

    return smylib.toSorted(items, () => (tokenbit[i++ % len] === '1' ? 1 : -1));
  };

  static getTokenizedWordInfos = (
    token: string | und,
    dicts: number[] | und,
    lens: number[] | nil,
    packs: AliasWordsPack[],
    nounsProns: NounPronsType | und,
  ): AliasWordInfo[] => {
    if (token === undefined || dicts === undefined || nounsProns === undefined) return [];

    if (this.tokenizedWordInfoStorage[token] !== undefined) return this.tokenizedWordInfoStorage[token];

    const generalTokenbit = this.transformTokenbit(token);
    const packInfos: AliasWordInfo[][] = [];

    dicts.forEach((max, packi) => {
      if (max === 0) return 0;

      const packWords = packs[packi].words;

      if (smylib.isNum(packWords)) {
        const nouns = smylib.keys(nounsProns.nouns).slice(0, -1);
        let minLen = lens![packi] ?? nouns.length;
        let pronounsSorted: string[] = [];
        const isSpecialMax = max < 0;

        if (!isSpecialMax) {
          const pronouns = smylib.keys(nounsProns.pronouns).slice(0, -1);
          minLen = lens![packi] ?? Math.min(nouns.length, pronouns.length);

          pronounsSorted = this.sortItemsByTokenbit(pronouns.slice(0, minLen), generalTokenbit.reverse());
        }

        const nounsSorted = this.sortItemsByTokenbit(nouns.slice(0, minLen), generalTokenbit);

        packInfos.push(
          nounsSorted.slice(0, max).map((noun, nouni) => {
            const weight = isSpecialMax
              ? nounsProns.nouns[noun] - 1
              : nounsProns.nouns[noun] + nounsProns.pronouns[pronounsSorted[nouni]];

            return {
              weight,
              packi,
              wordi: nouni,
              minus: 1,
              max: weight,
              plus: weight,
              word: isSpecialMax
                ? noun
                    .toUpperCase()
                    .replace(/[^-а-яё ]/gi, '')
                    .replace(/_/, ' ')
                : makeTwiceKnownName(pronounsSorted[nouni], noun).join(' ').toUpperCase(),
            };
          }),
        );
      } else {
        const words = smylib
          .keys(packWords)
          .slice(0, -1)
          .filter(word => packWords[word] <= max);

        packInfos.push(
          this.sortItemsByTokenbit(
            words.slice(0, lens![packi]).map((word, wordi) => {
              return {
                word,
                max,
                minus: (max || 0) + 1 - (packWords[word] || 0),
                wordi,
                packi,
                plus: max,
                weight: packWords[word],
              };
            }),
            generalTokenbit,
          ),
        );
      }

      SMyLib.entries(packs[packi]);
    });

    let infoLine: AliasWordInfo[] = [];

    if (packInfos.length < 2) infoLine = packInfos.flat();
    else {
      const lengths = packInfos.map(it => it.length);
      const min = Math.min(...lengths);
      const max = Math.max(...lengths);
      const diffs = packInfos.map(it => Math.floor((it.length - min) / (max * 0.1)));

      const computePackPointerTokenbit = () => {
        const bits = this.transformTokenbit(token, packInfos.length).split('').map(Number);

        diffs.forEach((diff, diffi) => {
          const diffBits = diff.toString(2);
          let inserts = 0;
          let diffBitsi = 0;

          while (inserts < diff) {
            if (diffBits[diffBitsi++ % diffBits.length] === '1') {
              inserts++;
              bits.splice(diffBitsi % bits.length, 0, diffi);
            }
          }
        });

        return bits;
      };
      let packPointerTokenbit = computePackPointerTokenbit();
      let packPointerTokenbiti = 0;
      let stacki = 0;

      while (true) {
        const infoItemi = packPointerTokenbit[packPointerTokenbiti++ % packPointerTokenbit.length];

        if (packInfos[infoItemi]?.length) {
          infoLine.push(packInfos[infoItemi][0]);
          packInfos[infoItemi].splice(0, 1);
        } else {
          if (packInfos.length < 2) break;
          packInfos.splice(infoItemi, 1);
          diffs.splice(infoItemi, 1);

          if (packInfos.length > 1) packPointerTokenbit = computePackPointerTokenbit();
          else packPointerTokenbit = [0];
        }

        if (stacki > 10000 || packInfos.length === 0) break;
      }
    }

    const infos = this.sortItemsByTokenbit(infoLine, generalTokenbit);

    for (let i = 0; i < infos.length; i++) {
      if (infos[i]) infos[i].wordi = i;
    }

    return (this.tokenizedWordInfoStorage[token] = infos);
  };
}
