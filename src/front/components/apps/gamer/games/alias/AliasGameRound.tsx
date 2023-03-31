import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import './Alias.scss';
import useAliasState from "./useAliasState";

export default function AliasGameRound() {
    const { state, isMySpeech, takeSpeaker, startSpeech, takeCurrentWord, strikeWord } = useAliasState();
    const queue = state?.queue ?? state?.teams.map(({ members }) => members).flat();

    if (!queue || !state) return null;

    return <>{
        isMySpeech()
            ? <div className={`show-word-area flex center no-scrollbar ${state.speechTime ? 'start-round' : ''}`}>
                <div
                    className="round-button flex center"
                    onClick={() => startSpeech()}
                >{state.speechTime ? takeCurrentWord() : 'Начать'}</div>
                <EvaButton
                    name="checkmark-circle-2-outline"
                    className="color--ok ok-button"
                    onClick={() => strikeWord('cor')}
                />
                <EvaButton
                    name="close-circle-outline"
                    className="color--ko ko-button"
                    onClick={() => strikeWord('inc')}
                />
            </div>
            : <>Спикер - {
                takeSpeaker()?.name
            } - {state.speechTime}</>
    }</>;
}