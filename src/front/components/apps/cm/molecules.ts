import { Molecule } from '../../../complect/atoms';
import { CmState } from './Cm.model';
import { defaultCmConfig } from './translation/complect/controlled/hooks/configs';

export const cmMolecule = new Molecule<CmState>(
  {
    chordVisibleVariant: 0,
    laterComwList: [],
    isMiniAnchor: false,
    playerHideMode: 'min',
    marks: [],
    comFontSize: 15,
    chordTracks: {},
    isShowTranslationInfo: true,
    favoriteMeetings: { contexts: [], events: [] },
    comTopTools: ['mark-com', 'fullscreen-mode'],
    translationScreenConfigs: [defaultCmConfig],
    comComments: {},
    isMetronomeHide: true,
    metronomeAccentes: '1000',
    metronomeMainSound: '380',
    metronomeSecondarySound: '200',
    cols: { cats: [], coms: [] },
    meetings: { contexts: [] },

    speedRollKf: 10,
  },
  'cm',
);
