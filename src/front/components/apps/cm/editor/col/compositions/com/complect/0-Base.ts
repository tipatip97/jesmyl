import { FreeExecDict } from '../../../../../../../../complect/exer/Exer.model';
import mylib from '../../../../../../../../complect/my-lib/MyLib';
import { IExportableCom } from '../../../../../../../../models';
import { blockStyles } from '../../../../../col/com/block-styles/BlockStyles';
import { Com } from '../../../../../col/com/Com';
import { EditableCol } from '../../../EditableCol';

export class EditableComBase extends Com {
  col: EditableCol<IExportableCom>;
  initialName: string;
  initial: Com;

  constructor(top: IExportableCom, index: number) {
    super(mylib.clone(top), index);

    this.col = new EditableCol(top);
    this.initialName = this.name;
    this.initial = new Com(mylib.clone(top), index);
  }

  get isCreated() {
    return this.col.isCreated;
  }
  set isCreated(val: boolean) {
    this.col.isCreated = val;
  }

  create() {
    this.isCreated = true;
    return this;
  }

  publicate(onLoad: () => void) {
    this.col.execCol(
      {
        action: 'comAdd',
        method: 'set',
        prev: NaN,
        args: {
          comw: this.wid,
          value: this.toCreateDict(),
        },
        onLoad,
      },
      'com',
    );
  }

  rename(
    name: string,
    onCorrecting?: ((val?: string) => any | nil | void) | nil,
    isSetExec = true,
    isSetAllText?: boolean,
  ) {
    this.col.renameCol(
      name,
      'com',
      (correct: string) => {
        this.rename(correct, onCorrecting);
        onCorrecting?.(correct);
      },
      isSetExec,
      isSetAllText,
    );

    this.setCreatedCom();
  }

  exec<Value>(bag: FreeExecDict<Value>) {
    this.setCreatedCom(() => this.col.execCol(bag, 'com'));
  }

  setCreatedCom(elseCb?: () => void) {
    if (this.isCreated)
      setTimeout(() =>
        this.col.execCol(
          {
            action: 'comAdd',
            method: 'set',
            prev: NaN,
            args: {
              value: this.toCreateDict(),
            },
          },
          'com',
        ),
      );
    else elseCb?.();
  }

  toCreateDict() {
    return {
      ...this.top,
      ...this.basics,
      ...this.col.toDict(),
      n: this.name,
      c: this.chords,
      t: this.texts,
      o: this.ords.map(topOrd => {
        const ord = mylib.clone(topOrd);
        delete ord.header;

        if (!ord.p?.length) delete ord.p;

        return ord;
      }),
    };
  }

  takeStyleByTitle(text: string) {
    if (!text) return;
    const preparedText = text
      .toLowerCase()
      .replace(/[^а-я]/g, '')
      .trim();
    return blockStyles?.styles.find(style => style.tags?.some(tag => preparedText.startsWith(tag)));
  }

  remove(isRemoved = true) {
    this.col.removeCol('com', isRemoved);
  }
}
