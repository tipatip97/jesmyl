import { Molecule } from '../../../complect/atoms';
import { BibleBooki, BibleChapteri, BibleStorage, BibleVersei } from './model';

export const bibleMolecule = new Molecule<BibleStorage>(
  {
    kas: null,
    nrt: null,
    rst: { chapters: [] },

    booki: BibleBooki.def,
    chapteri: BibleChapteri.def,
    versei: BibleVersei.def,

    showTranslates: ['rst'],
    myTranslates: ['rst'],
    translationPlan: [],
    translationHistory: [],
    translationScreenConfigs: [],
    joinAddress: null,
  },
  'bible',
);
