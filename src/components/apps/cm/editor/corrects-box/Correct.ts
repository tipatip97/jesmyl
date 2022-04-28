import Simplifyed from "../../../../../complect/Simplifyed";
import { ICorrect } from "./CorrectsBox.model";

export default class Correct extends Simplifyed implements ICorrect {
    code?: number;
    message: string;
    onFix?: () => void;
    fixLabel?: string;
    id: string;
    uniq?: string;

    constructor(top: ICorrect) {
        super();
        this.message = top.message;
        this.setReals(top, ['code', 'onFix', 'fixLabel', 'uniq']);
        this.id = `correct#${Date.now() + Math.random()}`;
    }
}