import { atom, Molecule, useAtom, useAtomValue } from '../../../complect/atoms';
import { ExecRule } from '../../../complect/exer/Exer.model';
import { LeaderState } from './Leader.model';

export const leaderRulesAtom = atom<ExecRule[]>([], 'leader', 'rules');

export const leaderMolecule = new Molecule<LeaderState>(
  {
    gameTimers: {},
    humanListSortVariant: 'name',
    sendingComments: [],
    isSendingMessagesError: false,
    contexts: {},
    games: {},
    people: {},
  },
  'leader',
);

export const useLeaderHumans = () => useAtomValue(leaderMolecule.take('people'))?.humans;
export const useLeaderContexts = () => useAtomValue(leaderMolecule.take('contexts'));
export const useLeaderGames = () => useAtomValue(leaderMolecule.take('games'));

export const useLeaderHumanListSortVariant = () => useAtom(leaderMolecule.take('humanListSortVariant'));
export const useLeaderSendingComments = () => useAtom(leaderMolecule.take('sendingComments'));
export const useLeaderIsSendingMessagesError = () => useAtom(leaderMolecule.take('isSendingMessagesError'));
export const useLeaderGameTimers = () => useAtom(leaderMolecule.take('gameTimers'));
