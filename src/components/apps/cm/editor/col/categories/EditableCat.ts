import { FreeExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { Cat } from "../../../col/cat/Cat";
import { catTrackers } from "../../../col/cat/Cat.complect";
import { CatKind, CatTracker, ComWrap, IExportableCat } from "../../../col/cat/Cat.model";
import { Com } from "../../../col/com/Com";
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
  kind: CatKind;

  constructor(cat: Cat, coms: EditableCom[]) {
    super(cat.top);
    this.topComs = coms;
    this.native = new Cat(cat.top, coms.map(com => com.native));
    this.initialName = cat.name;
    this.kind = cat.kind;
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
    const { select } = catTrackers.find(({ id }) => id === this.kind) || {};
    this.coms = select ? this.topComs.filter(com => select(com.native, this.native)) : [];

    this.search();

    return this.coms;
  }

  exec<Value>(bag: FreeExecDict<Value>) {
    this.execCol(bag, 'cat');
  }

  rename(name: string, exec: <Val>(val?: Val) => Val | nil) {
    this.renameCol(name, 'cat', (correct: string) => exec(this.rename(correct, exec)));
  }

  clearStack(isNeedClear: boolean) {
    const value = isNeedClear ? [] : this.native.stack.slice(0);

    this.exec({
      action: 'catClearStack',
      anti: ({ action }) => {
        if (action === 'catClearStack' && !isNeedClear)
          return () => false;
      },
    });

    this.stack = value;
  }

  setKind({ title, id }: CatTracker, onSet?: () => void) {
    this.exec({
      action: 'catSetKind',
      method: 'set',
      value: id,
      prev: this.kind,
      args: {
        value: id,
        kindn: title,
      },
    });
    this.kind = id;

    this.coms = [];
    setTimeout(() => {
      this.putComs();
      onSet && onSet();
    });
    this.corrects.catSetKind = null;
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

