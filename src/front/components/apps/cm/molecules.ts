import { atom, Molecule } from '../../../complect/atoms';
import { CmState } from './Cm.model';
import { CmEditorStoraged } from './editor/CmEditor.model';
import { defaultCmConfig } from './translation/complect/controlled/hooks/configs';

export const cmMolecule = new Molecule<CmState & CmEditorStoraged>(
  {
    chordVisibleVariant: 0,
    laterComwList: [],
    isMiniAnchor: false,
    playerHideMode: 'min',
    marks: [],
    comFontSize: 15,
    chordTracks: {},
    comTopTools: ['mark-com', 'fullscreen-mode', 'chords-variant'],
    translationScreenConfigs: [defaultCmConfig],
    comComments: {},
    isMetronomeHide: true,
    metronomeAccentes: '1000',
    metronomeMainSound: '380',
    metronomeSecondarySound: '200',
    cols: null,
    meetings: { contexts: [] },
    eventContext: [],
    isShowComHashComments: false,

    speedRollKf: 10,

    // editor
    mp3Rules: [],
    rules: [],
    eeStorage: {},
  },
  'cm',
  {
    serverStored: ['marks', 'comComments'],
  },
);

export const cmEventContextAtom = cmMolecule.select(s => s.eventContext);
export const cmMeetingsAtom = cmMolecule.select(s => s.meetings);
export const cmComFontSizeAtom = cmMolecule.select(s => s.comFontSize);
export const cmTranslationScreenConfigsAtom = cmMolecule.select(s => s.translationScreenConfigs);

export const isOpenChordImagesAtom = atom(false);
