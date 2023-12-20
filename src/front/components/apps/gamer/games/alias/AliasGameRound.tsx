import AliasGameRoundWin from './AliasGameRoundWin';
import AliasObserverContent from './AliasObserverContent';
import AliasSpeakerContent from './AliasSpeakerContent';
import { useAliasIsMySpeech } from './hooks/is-my-speech';
import { useAliasRoomState } from './hooks/state';

export default function AliasGameRound() {
    const state = useAliasRoomState();
    const isMySpeech = useAliasIsMySpeech();

    if (state && !state.teams.some((team, _, teama) => team.rounds !== teama[0].rounds)) {
        const scores = state.teams.map(team => team.score);
        const maxScore = Math.max(...scores);

        if (maxScore >= state.dream)
            return <AliasGameRoundWin maxScore={maxScore} />;
    }

    return isMySpeech
        ? <AliasSpeakerContent />
        : <AliasObserverContent />;
}