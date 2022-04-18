import { cmStorage } from "../../../../../shared/jstorages";
import { EeStorageStoreType } from "./EeStorage.model";



export class EeStorage {
    store?: EeStorageStoreType;

    load() {
        if (this.store != null) return this.store;
        return this.store = cmStorage.getOr('eeStorage', {});
    }

    save() {
        cmStorage.set('eeStorage', this.store || {});
    }

    get(word: string) {
        return this.store ? this.store[word] : -1;
    }
}

export const eeStorage = new EeStorage();
