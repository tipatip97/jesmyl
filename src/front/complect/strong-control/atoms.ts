import { atom, useAtom } from '../atoms';
import { ClipboardStore } from './Strong.model';

const clipboardAtom = atom<ClipboardStore>({ items: {} }, 'strong', 'clipboard');

export const useStrongClipboard = () => useAtom(clipboardAtom);
