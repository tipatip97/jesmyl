import { useMemo } from "react";

export const useWid = () => useMemo(() => '' + Date.now() + Math.random() + Math.random(), []);
