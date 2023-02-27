import { FreeExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { Cat } from "../../../col/cat/Cat";
import { catTrackers } from "../../../col/cat/Cat.complect";
import { CatTracker, ComWrap, IExportableCat } from "../../../col/cat/Cat.model";
import { Com } from "../../../col/com/Com";
import { EditableCom } from "../compositions/EditableCom";
import { EditableCol } from "../EditableCol";


export class EditableCat extends Cat {
  coms: EditableCom[];
  topComs: EditableCom[];
  initialName: string;
  term: string = '';
  wraps: ComWrap<EditableCom>[] = [];
  col: EditableCol<IExportableCat>;

  constructor(top: IExportableCat, coms: EditableCom[]) {
    super(top, coms);
    this.col = new EditableCol(top);
    this.topComs = coms;
    this.initialName = this.name;

    this.coms = this.putComs();
  }

  search(term = this.term) {
    if (term) {
      if (term === '@1') {
        this.wraps = this.coms.filter(com => !com.audio.trim()).map(com => ({ com }));
      } else if (term === '@2') {
        this.wraps = this.coms.map(com => {
          com.texts?.forEach((text, texti) => com.setBlockCorrects('texts', texti, text, true));
          com.chords?.forEach((chords, chordsi) => com.setBlockCorrects('chords', chordsi, chords, true));
          com.rename(com.name, null, false, true);

          return Object.values(com.corrects).some(correct => correct?.isSome()) ? { com } : null;
        }).filter((wrap) => wrap) as never;

      } else {
        this.wraps = mylib.searchRate<ComWrap<EditableCom>>(this.coms, term, ['name', mylib.c.POSITION, ['orders', mylib.c.INDEX, 'text']], 'com') as ComWrap<EditableCom>[];
      }
    } else this.wraps = this.coms.map(com => ({ com }));

    this.term = term;
  }

  putComs() {
    const { select } = catTrackers.find(({ id }) => id === this.kind) || {};
    this.coms = select ? this.topComs.filter(com => select(com, this)) : [];

    this.search();

    return this.coms;
  }

  newCom(com: EditableCom) {
    this.topComs.push(com);
    this.putComs();
  }

  exec<Value>(bag: FreeExecDict<Value>) {
    this.col.execCol(bag, 'cat');
  }

  rename(name: string, exec: <Val>(val?: Val) => Val | nil) {
    this.col.renameCol(name, 'cat', (correct: string) => exec(this.rename(correct, exec)));
  }

  clearStack(isNeedClear: boolean) {
    const value = isNeedClear ? [] : this.stack.slice(0);

    this.exec({
      action: 'catClearStack',
      method: 'set',
      anti: ({ action }) => {
        if (action === 'catClearStack' && !isNeedClear)
          return (strategy) => strategy.RememberNew;
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
    this.col.corrects.catSetKind = null;
  }

  toggleComExistence(com: Com | nil, exec?: <Val>(v?: Val) => Val | nil) {
    if (!com) return;
    const index = this.stack.indexOf(com.wid);

    if (index < 0) {
      this.exec({
        action: 'catBindCom',
        method: 'push',
        args: {
          comw: com.wid,
          value: com.wid,
          comn: com.name,
        },
        anti: ({ action, args }) => {
          if (action === 'catUnbindCom' && args && args.comw === com.wid && args.catw === this.wid)
            return (strategy) => strategy.RemoveNew;
        },
      });
      this.stack.push(com.wid);
    } else {
      this.exec({
        action: 'catUnbindCom',
        method: 'remove',
        args: {
          comw: com.wid,
          comn: com.name,
        },
        anti: ({ action, args }) => {
          if (action === 'catBindCom' && args && args.comw === com.wid && args.catw === this.wid)
            return (strategy) => strategy.RemoveNew;
        },
      });
      this.stack.splice(index, 1);
    }
    exec?.();
  }
}

