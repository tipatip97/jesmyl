import { ExecDict } from "../../../../../complect/exer/Exer.model";
import { CorrectsBox } from "../../editor/corrects-box/CorrectsBox";
import { ExportedCat } from "./ExportedCat";


export class EditableCat extends ExportedCat {

  exec<Value>(bag: ExecDict<Value>) {
    super.execCol(bag, 'cat');
  }

  rename(name: string) {
    this.renameCol(name, 'cat');
  }

  putComs() { }

  setTrack(track: string, onSet?: () => void) {
    try {
      const value = JSON.parse(track);
      this.execCol({
        action: 'catSetTrack',
        value,
        prev: this.track,
        args: {
          track: value,
        },
        argValue: 'track',
      }, 'cat');
      this.track = value;
      
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

