import { useMemo } from "react";
import { useSelector } from "react-redux";
import mylib from "../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../shared/store";

export const SPY_ROLE = '<SPY>';

export const wordSpyParts = '0987654321qwertyuiopasdfghjklzxcvbnm';
const symbols = `${wordSpyParts}!@#$%^&*()_+=,./[]{}:;QWERTYUIOPASDFGHJKLZXCVBNM\\"'<>?`;
export const getSpyRandomSymbol = (line = symbols) => line[mylib.randomOf(0, line.length - 1)];
export const secretSpyRole = (word: string[]) => {
    while (new Blob([word.join("")]).size < 50) {
        word.splice(mylib.randomOf(0, word.length - 1), 0, getSpyRandomSymbol());
    }
    return btoa(
        unescape(
            encodeURIComponent(
                getSpyRandomSymbol() + word.join("") + getSpyRandomSymbol()
            )
        )
    );
};

export const unsecretSpyRole = (word: string) => {
    try {
        const role = decodeURIComponent(escape(atob(word))).replace(/[^а-яё -]/gi, '');
        return role === 'ШПИОН' ? SPY_ROLE : role;
    } catch (e) {
        return word;
    }
};

(window as any).unsec = unsecretSpyRole;

const locationsSelector = (state: RootState) => state.spy.locations;

export default function useSpyLocations(strikedLocations?: string[]) {
    const locations = useSelector(locationsSelector);
    const actualLocations = useMemo(() =>
        (strikedLocations
            ? locations?.filter((location) => strikedLocations.indexOf(location) < 0)
            : locations) || [], [strikedLocations, locations]);

    const ret = {
        locations,
        actualLocations,
    };
    return ret;
}