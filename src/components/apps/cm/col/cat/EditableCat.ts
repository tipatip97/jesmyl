import { ExecDict } from "../../../../../complect/exer/Exer.model";
import { CorrectsBox } from "../../editor/corrects-box/CorrectsBox";
import { Com } from "../com/Com";
import { EditableCom } from "../com/EditableCom";
import { EditableCol } from "../EditableCol";
import { Cat } from "./Cat";
import { IExportableCat } from "./Cat.model";


export class EditableCat extends EditableCol<IExportableCat> {
  native: Cat;
  coms: EditableCom[] = [];
  initialName: string;
  index: number;

  constructor(cat: Cat, coms: Com[]) {
    super(cat.top);
    this.native = new Cat(cat.top, coms);
    this.index = cat.index;
    this.initialName = cat.name;

    this.coms = this.putComs();
  }

  putComs() {
    return this.coms = this.native.putComs().map(com => new EditableCom(com, com.index));
  }

  exec<Value>(bag: ExecDict<Value>) {
    this.execCol(bag, 'cat');
  }

  rename(name: string, exec: <Val>(val?: Val) => Val | nil) {
    this.renameCol(name, 'cat', (correct: string) => exec(this.rename(correct, exec)));
  }

  setTrack(track: string, onSet?: () => void) {
    try {
      const value = JSON.parse(track);
      this.execCol({
        action: 'catSetTrack',
        value,
        prev: this.native.track,
        args: {
          track: value,
        },
        argValue: 'track',
      }, 'cat');
      this.native.track = value;

      this.coms = [];
      setTimeout(() => {
        this.putComs();
        onSet && onSet();
      });
      this.corrects.catSetTrack = null;
    } catch (e) {
      const errors = [{ message: 'Некорректное значение JSON' }];

      if (this.corrects.catSetTrack) this.corrects.catSetTrack.setErrors(errors);
      else this.corrects.catSetTrack = new CorrectsBox(errors);
    }
  }
}

