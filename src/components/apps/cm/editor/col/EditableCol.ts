import { ExecArgs, FreeExecDict } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed, BaseNamedExportables } from "../../base/Base";
import { eeStorage } from "../../base/ee-storage/EeStorage";
import { cmExer } from "../../Cm.store";
import { IEditableCol, IExportableCol } from "../../cols/Cols.model";
import { CorrectsBox } from "../corrects-box/CorrectsBox";
import { ICorrectsBox } from "../corrects-box/CorrectsBox.model";

export class EditableCol<Col extends BaseNamedExportables> extends BaseNamed<Col> {
  removed = false;
  incorrectName = false;
  corrects: Record<string, CorrectsBox | nil> = {};

  renameCol<Coln extends keyof IExportableCol>(name: string, coln: Coln, onFix?: (correct: string) => void) {
    const action = `${coln}Rename`;
    const corrects = this.nameCorrects(name, coln, onFix);

    this.execCol({
      action,
      prev: this.name,
      value: name,
      argValue: 'name',
      corrects,
    }, coln);

    this.name = name;
    this.corrects[action] = corrects;
  }

  removeCol<Coln extends keyof IExportableCol>(coln: Coln, isRemoved = true) {
    this.execCol({
      action: `${coln}Del`,
    }, coln);
    return this.removed = isRemoved;
  }

  execCol<Value, Coln extends keyof IExportableCol>(bag: FreeExecDict<Value>, coln: Coln) {
    cmExer.set<Value>({
      ...bag,
      scope: this.scope(bag.action, bag.uniq),
      args: {
        prev: bag.prev,
        name: this.name,
        ...bag.args,
        [`${coln}w`]: this.wid,
      },
      generalId: this.wid,
    });
  }

  scope(action?: string, uniq?: number | string) {
    return [this.wid, '.', mylib.typ('[no-action]', action), ':', [mylib.def(uniq, '[no-uniq]')].join(',')].join('');
  }

  setFieldCol<Coln extends keyof IExportableCol, Fieldn extends keyof Col>(fieldn: Fieldn, value: Col[Fieldn], actions: Record<Fieldn, string>, coln: Coln, defVal?: Col[Fieldn]) {
    this.execCol({
      prev: mylib.def(this.getOrBase(fieldn), defVal),
      value,
      method: 'set',
      action: actions[fieldn],
      args: {
        n: this.name,
        value
      } as ExecArgs<Col[Fieldn]>
    }, coln);

    this.setExportable(fieldn, value);

    return this;
  }

  getIncorrectNameReg() {
    return /([^а-яёіґїє !?]+\s*)+$/i;
  }

  nameCorrects<Coln extends keyof IEditableCol>(name = this.name, coln: Coln, onIncorrectsFix?: (correct: string) => void) {
    // const colLists: IEditableCol[Coln][] = cols[`${coln}s`] as never;
    const minLen = 3;
    const msg = (msg?: string) => msg && `"${name}" - не корректное имя для ${coln === 'cat' ? 'категории' : 'песни'}. ${msg}`;
    const ret = (err?: string, onFix?: () => void) => this.textCorrects(name).merge({ errors: err ? [{ message: err, onFix }] : null });

    if (!mylib.isStr(name)) return ret(msg('Не верный формат'));
    if (name === '?' && coln === 'com') return ret('');
    if (name === '') return ret(msg('Пустое имя'));

    const incorrects = name.match(this.getIncorrectNameReg());
    if (incorrects) return ret(msg(`Недопустимые символы${incorrects[0] === name ? '' : ' в конце'} (${incorrects[0]})`), () => onIncorrectsFix && onIncorrectsFix(name.slice(0, -incorrects[0].length)));

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

    text.split(/[^а-яёіґїє]/i).forEach((realWord) => {
      if (!realWord.match(/[её]/i) || realWord.match(/[іґїє]/i)) return;
      const lower = realWord.toLowerCase();
      const word = lower.replace(/ё/g, 'е');
      const parts = lower.split(/[а-дж-я]*([её])/).filter(p => p);
      console.log(lower, word, parts, eeStorage);

      if (eeStorage.get(word) === -1) {
        unknowns.push({ message: `Слово '${realWord}' ещё не встречалось среди существующих песен. Проверь, пожалуйста, правильность написания букв ё/е, встречающихся в нём`, word: realWord, code: 2, });
        return;
      }

      [eeStorage.get(word)].flat().forEach((type, typei, typea) => {
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
    });
    console.log(text, errors, warnings, unknowns)

    return new CorrectsBox(errors, warnings, unknowns);
  }
}

