import { Cat } from "../col/cat/Cat";
import { IExportableCat } from "../col/cat/Cat.model";
import { EditableCat } from "../col/cat/EditableCat";
import { Com } from "../col/com/Com";
import { IExportableCom } from "../col/com/Com.model";
import { EditableCom } from "../col/com/EditableCom";



export interface ICols {
    coms: Com[];
    cats: Cat[];
}

export interface ICol {
    com: Com;
    cat: Cat;
}

export interface IExportableCol {
    com: IExportableCom;
    cat: IExportableCat;
}

export interface IEditableCol {
    com: EditableCom;
    cat: EditableCat;
}

export interface IExportableCols {
    coms: IExportableCom[];
    cats: IExportableCat[];
}

