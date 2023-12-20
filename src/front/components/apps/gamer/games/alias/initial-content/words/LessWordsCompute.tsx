import mylib from "../../../../../../../complect/my-lib/MyLib";
import { useAliasRoomState } from "../../hooks/state";
import { useTokenSortedWordsNaked } from "../../hooks/token-sorted-words";

export const AliasRoomLessWordsCompute = () => {
    const state = useAliasRoomState();
    const infos = useTokenSortedWordsNaked();

    if (!state) return null;

    const lessWords = infos.length - (state.wordsi || 0) - 1;

    return <span className={lessWords < 30 ? 'color--ko' : ''}>
        В игре осталось {lessWords}
        {mylib.declension(lessWords, ' слово', ' слова', ' слов')}
    </span>;
};
