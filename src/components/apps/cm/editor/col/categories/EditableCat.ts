import { FreeExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { Cat } from "../../../col/cat/Cat";
import { ComWrap, IExportableCat } from "../../../col/cat/Cat.model";
import { Com } from "../../../col/com/Com";
import { CorrectsBox } from "../../corrects-box/CorrectsBox";
import { EditableCom } from "../compositions/EditableCom";
import { EditableCol } from "../EditableCol";


export class EditableCat extends EditableCol<IExportableCat> {
  native: Cat;
  coms: EditableCom[];
  topComs: EditableCom[];
  initialName: string;
  stack: number[];
  term: string = '';
  wraps: ComWrap<EditableCom>[] = [];

  constructor(cat: Cat, coms: EditableCom[]) {
    super(cat.top);
    this.topComs = coms;
    this.native = new Cat(cat.top, coms.map(com => com.native));
    this.initialName = cat.name;
    this.stack = mylib.clone(cat.stack);

    this.coms = this.putComs();
  }

  search(term = this.term, cb?: () => void) {
    if (term) {
      if (term === '@1') {
        this.wraps = this.coms.filter(com => !com.native.audio.trim()).map(com => ({ com }));
      } else if (term === '@2') {
        this.wraps = this.coms.map(com => {
          com.nameCorrects(com.name, 'com');
          com.native.texts?.map((text, texti) => com.blockCorrects(text, 't', texti, 'setText'));
          return { com };
        });

      } else {
        this.wraps = mylib.searchRate<ComWrap<EditableCom>>(this.coms, term, ['name', mylib.c.POSITION, ['orders', mylib.c.INDEX, 'text']], 'com') as ComWrap<EditableCom>[];
      }
    } else this.wraps = this.coms.map(com => ({ com }));

    this.term = term;
    cb && cb();
  }

  putComs() {
    this.coms = this.native.putComs().map(com => this.topComs.find((ecom) => ecom.native === com)).filter(com => com) as EditableCom[];
    this.search();
    return this.coms;
  }

  exec<Value>(bag: FreeExecDict<Value>) {
    this.execCol(bag, 'cat');
  }

  rename(name: string, exec: <Val>(val?: Val) => Val | nil) {
    this.renameCol(name, 'cat', (correct: string) => exec(this.rename(correct, exec)));
  }

  setTrack(track: string, onSet?: () => void) {
    try {
      const value = JSON.parse(track);
      this.exec({
        action: 'catSetTrack',
        method: 'set',
        value,
        prev: this.native.track,
        args: {
          track: value,
        },
      });
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

  toggleComExistence(com: Com | nil, exec?: <Val>(v?: Val) => Val | nil) {
    if (!com) return;
    const index = this.stack.indexOf(com.wid);

    if (index < 0) {
      this.exec({
        action: 'catBindCom',
        args: {
          comw: com.wid,
        },
        anti: ({ action, args }) => {
          if (action === 'catUnbindCom' && args && args.comw === com.wid && args.catw === this.wid)
            return () => true;
        },
      });
      this.stack.push(com.wid);
    } else {
      this.exec({
        action: 'catUnbindCom',
        args: {
          comw: com.wid,
        },
        anti: ({ action, args }) => {
          if (action === 'catBindCom' && args && args.comw === com.wid && args.catw === this.wid)
            return () => true;
        },
      });
      this.stack.splice(index, 1);
    }
    exec?.();
  }
}

