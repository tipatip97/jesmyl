import { useMemo } from "react";

const deps: [] = [];

export const makeWid = () => ('wid_' + Date.now() + Math.random() + Math.random()).replace(/\./g, '_');
export const useWid = () => useMemo(makeWid, deps);
