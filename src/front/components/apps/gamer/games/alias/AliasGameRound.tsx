import './Alias.scss';
import AliasObserverContent from './AliasObserverContent';
import AliasSpeakerContent from './AliasSpeakerContent';
import useAliasState from "./useAliasState";

export default function AliasGameRound() {
    return useAliasState().isMySpeech()
        ? <AliasSpeakerContent />
        : <AliasObserverContent />;
}