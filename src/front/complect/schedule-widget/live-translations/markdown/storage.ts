import { scopeStorage } from '../../../scopeStorage';

type Md = {
  markdown: string;
  setMd: (markdown: string) => void;
};

export const useMarkdownTranslation = scopeStorage<Md>(set => ({
  markdown: '',
  setMd: markdown => set({ markdown }),
}));
