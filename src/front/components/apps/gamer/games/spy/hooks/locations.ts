import { useMemo } from 'react';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { useSpyLocations } from '../molecules';
import { SpyRoomState } from '../Spy.model';
import { useSpyRoomStateNaked } from './state';

export const SPY_ROLE = '<SPY>';

export const wordSpyParts = '0987654321qwertyuiopasdfghjklzxcvbnm';
const symbols = `${wordSpyParts}!@#$%^&*()_+=,./[]{}:;QWERTYUIOPASDFGHJKLZXCVBNM\\"'<>?`;
export const getSpyRandomSymbol = (line = symbols) => line[mylib.randomOf(0, line.length - 1)];
export const secretSpyRole = (word: string[]) => {
  word = word.slice(0);
  while (new Blob([word.join('')]).size < 50) {
    word.splice(mylib.randomOf(0, word.length - 1), 0, getSpyRandomSymbol());
  }
  return btoa(unescape(encodeURIComponent(getSpyRandomSymbol() + word.join('') + getSpyRandomSymbol())));
};

export const unsecretSpyRole = (word: string | und) => {
  if (word === undefined) return '';
  try {
    const role = decodeURIComponent(escape(atob(word))).replace(/[^а-яё -]/gi, '');
    return role === 'ШПИОН' ? SPY_ROLE : role;
  } catch (e) {
    return word;
  }
};

(window as any).unsec = unsecretSpyRole;

export const useSpyActualLocations = (locations: string[] | und, strikedLocations: string[] | und) => {
  return useMemo(
    () => (strikedLocations ? locations?.filter(location => strikedLocations.indexOf(location) < 0) : locations) || [],
    [strikedLocations, locations],
  );
};

export const useSpyActualLocationsNaked = () =>
  useSpyActualLocations(useSpyLocations(), useSpyRoomStateNaked()?.locations);

export const useSpyStrikedLocationsNaked = () => useSpyStrikedLocations(useSpyRoomStateNaked());

export const useSpyStrikedLocations = (state: SpyRoomState | und) => {
  return useMemo(() => {
    return (state?.locations || []).map(location => unsecretSpyRole(location)).filter(location => location) as string[];
  }, [state?.locations]);
};

export const useSpyCleanLocationsNaked = () => useSpyCleanLocations(useSpyRoomStateNaked());

export const useSpyCleanLocations = (state: SpyRoomState | und) => {
  return useMemo(() => state?.locations?.map(location => [unsecretSpyRole(location), location]), [state?.locations]);
};
