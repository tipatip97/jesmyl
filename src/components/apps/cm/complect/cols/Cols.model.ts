import { Cat } from "../../col/cat/Cat";
import { IExportableCat } from "../../col/cat/Cat.model";
import { Com } from "../../col/com/Com";
import { IExportableCom } from "../../col/com/Com.model";



export interface ICols {
    coms: Com[];
    cats: Cat[];
}

export interface IExportableCols {
    coms: IExportableCom[];
    cats: IExportableCat[];
}

