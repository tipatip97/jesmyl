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
  coms: EditableCom[] = [];
  initialName: string;
  stack: number[];
  term: string = '';
  wraps: ComWrap[] = [];

  constructor(cat: Cat, coms: Com[]) {
    super(cat.top);
    this.native = new Cat(cat.top, coms);
    this.initialName = cat.name;
    this.stack = mylib.clone(cat.stack);

    this.coms = this.putComs();
  }

  search(term = this.term, cb?: () => void) {
    if (term) {
      if (term === '@1') {
        this.wraps = this.native.coms.filter(com => !com.audio || !com.audio.trim()).map(com => ({ com }));
      } else if (term === '@2') {
        this.wraps = this.coms.map(com => {
          const correct: [CorrectsBox, number][] | nil = com.native.texts?.map((text, texti) => [com.blockCorrects(text, 't', texti), texti]);

          return {
            com: com.native,
            bag: ([[com.nameCorrects(com.name, 'com'), 'n']].concat(correct as never || []) as [CorrectsBox, string][]).filter(([s]) => s && s.errors)
          };
        })
          .filter(({ bag }) => bag.length)
          .map(({ com, bag }) => {
            return {
              com,
              errors: [bag].flat().map(([{ errors, warnings, unknowns }, index]) => errors && errors.map(({ message }) => message + ' ' + (index + 1)))
            };
          });

      } else {
        this.wraps = mylib.searchRate<ComWrap>(this.native.coms, term, ['name', mylib.c.POSITION, ['orders', mylib.c.INDEX, 'text']], 'com') as ComWrap[];
      }
    } else this.wraps = this.native.coms.map(com => ({ com }));

    this.term = term;
    cb && cb();
  }

  putComs() {
    this.coms = this.native.putComs().map(com => new EditableCom(com, com.index));
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
      this.execCol({
        action: 'catSetTrack',
        value,
        prev: this.native.track,
        args: {
          track: value,
        },
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

