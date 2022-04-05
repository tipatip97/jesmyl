import { ExecArgs, ExecDict } from "../../../../complect/exer/Exer.model";
import mylib from "../../../../complect/my-lib/MyLib";
import { cmExer } from "../Cm.store";
import { IEditableCol, IExportableCol } from "../cols/Cols.model";
import { CorrectsBox } from "../editor/corrects-box/CorrectsBox";
import { ICorrectsBox } from "../editor/corrects-box/CorrectsBox.model";
import { eeStorage } from "../ee-storage/EeStorage";
import { IEditableColDefaultArgs, IExportedCol } from "./Col.model";
import { ExportedCol } from "./ExportedCol";


export class EditableCol<Col extends IExportedCol> extends ExportedCol<Col> {
  removed = false;
  incorrectName = false;

  renameCol<Coln extends keyof IExportableCol>(name: string, coln: Coln) {
    this.execCol({
      action: `${coln}Rename`,
      value: name,
    }, coln);
    this.name = name;
  }

  removeCol<Coln extends keyof IExportableCol>(coln: Coln, isRemoved = true) {
    this.execCol({
      action: `${coln}Del`,
    }, coln);
      return this.removed = isRemoved;
  }

  protected execCol<Value, Args, Coln extends keyof IExportableCol>(bag: ExecDict<Value, Args>, coln: Coln) {
    cmExer.set(mylib.overlap({}, bag, {
      scope: this.scope(bag.action, bag.uniq),
      args: mylib.overlap({}, bag.args, {
        [`${coln}w`]: this.wid,
        name: this.name
      }),
      generalId: this.wid
    }) as ExecDict<Value, Args>);
  }

  scope(action?: string, uniq?: number | string) {
    return [this.wid, '.', mylib.typ('[action]', action), ':', [''].concat(mylib.def(uniq, '[uniq]')).join(',')].join('');
  }

  setFieldCol<Coln extends keyof IExportableCol, Fieldn extends keyof Col>(fieldn: Fieldn, value: Col[Fieldn], actions: Record<Fieldn, string>, coln: Coln, defVal?: Col[Fieldn], internalError?: string) {
    this.execCol({
      prev: mylib.def(this.getOrBase(fieldn), defVal),
      value,
      method: 'set',
      action: actions[fieldn],
      internalError,
      args: {
        n: this.name,
        value
      } as ExecArgs<Col[Fieldn], IEditableColDefaultArgs<Col[Fieldn]>>
    }, coln);

    this.setExportable(fieldn, value);

    return this;
  }

  getIncorrectNameReg() {
    return /([^а-яёіґїє !?]+\s*)+$/i;
  }

  nameCorrects<Coln extends keyof IEditableCol>(name = this.name, coln: Coln) {
    // const colLists: IEditableCol[Coln][] = cols[`${coln}s`] as never;
    const minLen = 3;
    const msg = (msg?: string) => msg && `"${name}" - не корректное имя для ${coln === 'cat' ? 'категории' : 'песни'}. ${msg}`;
    const ret = (err?: string) => this.textCorrects(name).merge({ errors: err ? [{ message: err }] : null });

    if (!mylib.isStr(name)) return ret(msg('Не верный формат'));
    if (name === '?' && coln === 'com') return ret('');
    if (name === '') return ret(msg('Пустое имя'));

    const incorrects = name.match(this.getIncorrectNameReg());
    if (incorrects) return ret(msg(`Недопустимые символы${incorrects[0] === name ? '' : ' в конце'} (${incorrects[0]})`));

    if (name.length < minLen) return ret(msg(`Минимальное количество символов - ${minLen}`));
    // if (colLists.find(col => col.name === name && this.wid !== col.wid)) return ret(`именем "${name}" уже названа одна из ${coln === 'cat' ? 'категорий' : 'песен'}`);

    return ret('');
  }

  prepareName(name: string) {
    return mylib.isStr(name) ? name.replace(this.getIncorrectNameReg(), '') : name;
  }

  textCorrects(text: string) {
    if (!mylib.isStr(text)) return new CorrectsBox().setIncorrectType('[got not string]');
    const errors: ICorrectsBox[] = [];
    const warnings: ICorrectsBox[] = [];
    const unknowns: ICorrectsBox[] = [];

    text.split(/[^а-яёіґїє]/i).filter((realWord): boolean => {
      if (!realWord.match(/[её]/i) || realWord.match(/[іґїє]/i)) return false;
      const lower = realWord.toLowerCase();
      const word = lower.replace(/ё/g, 'е');
      const parts = lower.split(/[а-дж-я]*([её])/).filter(p => p);

      if (eeStorage.get(word) == null) unknowns.push({ message: `Слово '${realWord}' ещё не встречалось среди существующих песен. Проверь, пожалуйста, правильность написания букв ё/е, встречающихся в нём`, word: realWord, code: 2, });

      ([] as number[]).concat(eeStorage.get(word)).forEach((type, typei, typea) => {
        const isE = parts[typei] === 'е';
        const info = (code: number) => ({ code, message: `${['Не верно', 'Возможно не верно'][code]} указана ${typea.length > 1 ? `${typei + 1}-я из букв ё/е` : `буква ${parts[typei]}`} в слове '${realWord}'`, word: realWord, letter: parts[typei], pos: typei, alt: isE ? 'ё' : 'е' });

        if (type === 0) {
          if (isE) warnings.push(info(1));
        } else {
          if (isE) {
            if (type === 2) errors.push(info(0));
          } else if (type === 1) errors.push(info(0));
        }
      });
      return false
    });

    return new CorrectsBox(errors, warnings, unknowns);
  }
}

