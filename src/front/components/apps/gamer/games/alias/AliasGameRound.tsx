import './Alias.scss';
import AliasGameRoundWin from './AliasGameRoundWin';
import AliasObserverContent from './AliasObserverContent';
import AliasSpeakerContent from './AliasSpeakerContent';
import useAliasState from "./useAliasState";

export default function AliasGameRound() {
    const { state, isMySpeech } = useAliasState();
    
    if (state && !state.teams.some((team, _, teama) => team.rounds !== teama[0].rounds)) {
        const scores = state.teams.map(team => team.score);
        const maxScore = Math.max(...scores);

        if (maxScore >= state.dream)
            return <AliasGameRoundWin maxScore={maxScore} />;
    }

    return isMySpeech()
        ? <AliasSpeakerContent />
        : <AliasObserverContent />;
}